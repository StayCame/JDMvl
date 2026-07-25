import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Container = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;
  animation: fadeInUp 0.6s ease forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    bottom: 16px;
    right: 16px;
    gap: 10px;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`;

const TelegramButton = styled(Button)`
  background: #0088cc;
`;

const WhatsAppButton = styled(Button)`
  background: #25D366;
`;

const PhoneButton = styled(Button)`
  background: ${theme.colors.accent.primary};
`;

const FloatingButtons = () => {
    return (
        <Container>
            <TelegramButton
                href="https://t.me/+79146665533"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
            >
                <i className="fa-brands fa-telegram"></i>
            </TelegramButton>
            <WhatsAppButton
                href="https://wa.me/79146665533"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </WhatsAppButton>
            <PhoneButton href="tel:+79146665533" aria-label="Позвонить">
                <i className="fas fa-phone"></i>
            </PhoneButton>
        </Container>
    );
};

export default FloatingButtons;