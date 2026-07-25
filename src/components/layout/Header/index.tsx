import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { useFavorites } from '../../../hooks/useFavorites';

// ===== СТИЛИ =====
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 40px;
  background: rgba(13, 13, 13, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: ${theme.colors.text.primary};
  text-decoration: none;

  span {
    color: ${theme.colors.accent.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.text.secondary};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.text.primary};
    }
  }
`;

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;

  span {
    width: 28px;
    height: 2px;
    background: ${theme.colors.text.primary};
    border-radius: 2px;
    transition: all 0.3s;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 24px;
  color: ${theme.colors.text.primary};
  transition: transform 0.2s;
  padding: 4px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: ${theme.colors.accent.primary};
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-family: 'Inter', sans-serif;
`;

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

// ===== МЕНЮ (десктоп — сверху, мобильные — слева) =====
const SideMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-300px')};
  width: 280px;
  height: 100%;
  background: ${theme.colors.background.card};
  padding: 60px 30px;
  transition: left 0.35s ease;
  z-index: 1002;
  box-shadow: 4px 0 32px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  nav {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      font-size: 20px;
      font-weight: 500;
      color: ${theme.colors.text.primary};
      text-decoration: none;
      padding: 8px 0;
      border-bottom: 1px solid ${theme.colors.glass.border};
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.accent.primary};
      }
    }
  }

  .socials {
    display: flex;
    gap: 20px;
    a {
      font-size: 24px;
      color: ${theme.colors.text.secondary};
      transition: color 0.3s;
      &:hover {
        color: ${theme.colors.accent.primary};
      }
    }
  }

  /* Десктопная версия: выезжает сверху */
  @media (min-width: 769px) {
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 80vh;
    padding: 80px 40px 40px;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    left: auto;
    width: 100%;
    height: auto;
    border-radius: 0;

    &.open {
      transform: translateY(0);
    }

    nav {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px 32px;
      max-width: 900px;
      margin: 0 auto;
      width: 100%;

      a {
        font-size: 18px;
        padding: 12px 0;
        border-bottom: none;
        color: ${theme.colors.text.secondary};
        text-align: center;
        transition: color 0.3s, transform 0.2s;
        border-radius: 8px;
        padding: 10px 16px;

        &:hover {
          color: ${theme.colors.text.primary};
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
      }
    }

    .socials {
      justify-content: center;
      margin-top: 24px;
      a {
        color: ${theme.colors.text.secondary};
        &:hover {
          color: ${theme.colors.accent.primary};
        }
      }
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;

  @media (min-width: 769px) {
    top: 24px;
    right: 40px;
    font-size: 28px;
  }
`;

// ===== КОМПОНЕНТ =====
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  return (
    <>
      <HeaderWrapper>
        <Logo to="/">JDM<span>VL</span></Logo>

        <Nav>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог авто</Link>
          <Link to="/parts">Автозапчасти</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/contacts">Контакты</Link>
        </Nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Избранное */}
          <IconButton as={Link} to="/favorites" aria-label="Избранное">
            ❤️
            {favorites.length > 0 && <Badge>{favorites.length}</Badge>}
          </IconButton>

          {/* Бургер-кнопка */}
          <BurgerButton onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerButton>
        </div>
      </HeaderWrapper>

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
      <SideMenu open={menuOpen} className={menuOpen ? 'open' : ''}>
        <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton>
        <nav>
          <Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link to="/catalog" onClick={() => setMenuOpen(false)}>Каталог авто</Link>
          <Link to="/parts" onClick={() => setMenuOpen(false)}>Автозапчасти</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Услуги</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>О компании</Link>
          <Link to="/journal" onClick={() => setMenuOpen(false)}>Журнал</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>Избранное</Link>
          <Link to="/calculator" onClick={() => setMenuOpen(false)}>Калькулятор</Link>
          <Link to="/documents" onClick={() => setMenuOpen(false)}>Документы</Link>
          <Link to="/how-we-work" onClick={() => setMenuOpen(false)}>Как мы работаем</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>Вопрос-ответ</Link>
          <Link to="/guarantees" onClick={() => setMenuOpen(false)}>Гарантии</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Прозрачность цен</Link>
          <Link to="/process-map" onClick={() => setMenuOpen(false)}>Карта процесса</Link>
        </nav>
        <div className="socials">
          <a href="#" aria-label="VK"><i className="fa-brands fa-vk"></i></a>
          <a href="#" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </SideMenu>
    </>
  );
};

export default Header;