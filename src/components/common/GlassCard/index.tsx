import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const GlassCard = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.xl};
  padding: 24px 28px;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.hover};
  }
`;

export default GlassCard;