import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    style?: React.CSSProperties; // добавлено, чтобы принимать style
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  font-size: ${({ size }) =>
        size === 'sm' ? theme.fontSizes.sm :
            size === 'lg' ? theme.fontSizes.lg :
                theme.fontSizes.md};
  padding: ${({ size }) =>
        size === 'sm' ? '8px 20px' :
            size === 'lg' ? '14px 36px' :
                '12px 28px'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  transition: all ${theme.transitions.default};
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) => {
        switch (variant) {
            case 'secondary':
                return `
          background: ${theme.colors.background.card};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.glass.border};
          &:hover {
            background: ${theme.colors.glass.background};
            transform: translateY(-2px);
          }
        `;
            case 'outline':
                return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.text.primary};
          &:hover {
            background: ${theme.colors.text.primary};
            color: ${theme.colors.background.primary};
            transform: translateY(-2px);
          }
        `;
            case 'ghost':
                return `
          background: transparent;
          color: ${theme.colors.text.secondary};
          &:hover {
            color: ${theme.colors.text.primary};
          }
        `;
            default:
                return `
          background: ${theme.colors.accent.primary};
          color: #fff;
          box-shadow: 0 4px 16px rgba(220, 20, 60, 0.3);
          &:hover {
            background: #b80030;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(220, 20, 60, 0.4);
          }
        `;
        }
    }}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;