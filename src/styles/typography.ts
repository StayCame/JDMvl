import { css } from 'styled-components';
import { theme } from './theme';

export const typography = {
    heading1: css`
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    font-size: ${theme.fontSizes['6xl']};
    line-height: 1.1;
    letter-spacing: 0.05em;
  `,
    heading2: css`
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    font-size: ${theme.fontSizes['4xl']};
    line-height: 1.2;
    letter-spacing: 0.04em;
  `,
    heading3: css`
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    font-size: ${theme.fontSizes['2xl']};
    line-height: 1.3;
    letter-spacing: 0.03em;
  `,
    body1: css`
    font-family: ${theme.fonts.body};
    font-weight: 400;
    font-size: ${theme.fontSizes.md};
    line-height: 1.7;
  `,
    body2: css`
    font-family: ${theme.fonts.body};
    font-weight: 400;
    font-size: ${theme.fontSizes.sm};
    line-height: 1.6;
    color: ${theme.colors.text.secondary};
  `,
    caption: css`
    font-family: ${theme.fonts.body};
    font-weight: 300;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.text.secondary};
    letter-spacing: 0.02em;
  `,
    japanese: css`
    font-family: ${theme.fonts.japanese};
    font-weight: 400;
  `,
};