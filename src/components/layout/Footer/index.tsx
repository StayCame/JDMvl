import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../styles/theme';

const StyledFooter = styled.footer`
  background: ${theme.colors.background.card};
  border-top: 1px solid ${theme.colors.glass.border};
  padding: 40px 20px 24px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 24px;
  }
`;

const Column = styled.div`
  h4 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.md};
    margin-bottom: 12px;
    color: ${theme.colors.text.primary};
  }

  p,
  a {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    line-height: 1.8;
    display: block;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.text.primary};
    }
  }

  .socials {
    display: flex;
    gap: 16px;
    margin-top: 12px;

    @media (max-width: ${theme.breakpoints.md}) {
      justify-content: center;
    }

    a {
      font-size: 24px;
      color: ${theme.colors.text.secondary};
      transition: color ${theme.transitions.default};

      &:hover {
        color: ${theme.colors.accent.primary};
      }
    }
  }

  .messenger-buttons {
    display: flex;
    gap: 12px;
    margin-top: 12px;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.md}) {
      justify-content: center;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 20px;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      &.telegram {
        background: #0088cc;
      }

      &.whatsapp {
        background: #25D366;
      }
    }
  }
`;

const MapWrapper = styled.div`
  iframe {
    width: 100%;
    height: 180px;
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.glass.border};
    filter: grayscale(0.8) invert(0.9);
    margin-top: 8px;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid ${theme.colors.glass.border};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.xs};

  .legal-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 12px;

    a {
      color: ${theme.colors.text.secondary};
      text-decoration: none;
      font-size: 12px;
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.text.primary};
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        {/* Колонка 1: Карта */}
        <Column>
          <h4>📍 Наш склад</h4>
          <p>Владивосток, ул. Примерная, 10</p>
          <MapWrapper>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=132.043144%2C43.385379&mode=search&oid=1885130574&ol=biz&z=18"
              title="Карта склада"
              loading="lazy"
            />
          </MapWrapper>
        </Column>

        {/* Колонка 2: Контакты */}
        <Column>
          <h4>📞 Контакты</h4>
          <a href="tel:+79146665533">+7 (914) 666-55-33</a>
          <a href="mailto:info@jdmvl.ru">info@jdmvl.ru</a>

          {/* Блок соцсетей (иконки) */}
          <div className="socials">
            <a href="#" aria-label="Telegram">📱</a>
            <a href="#" aria-label="WhatsApp">💬</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>

          {/* Кнопки мессенджеров */}
          <div className="messenger-buttons">
            <a href="#" className="telegram">
              <i className="fa-brands fa-telegram"></i> Telegram
            </a>
            <a href="#" className="whatsapp">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </Column>

        {/* Колонка 3: О компании */}
        <Column>
          <h4>О компании</h4>
          <p>Прямой импорт авто из Японии с аукционов.</p>
          <p>Доставка под ключ во Владивосток и по России.</p>
          <p style={{ marginTop: 8, color: theme.colors.accent.primary }}>
            🇯🇵 日本品質
          </p>
        </Column>
      </FooterContainer>

      <FooterBottom>
        <div className="legal-links">
          <Link to="/privacy-policy">Политика конфиденциальности</Link>
          <Link to="/terms-of-service">Пользовательское соглашение</Link>
        </div>
        © 2026 JDMVL — Японский импорт авто и запчастей во Владивостоке.
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;