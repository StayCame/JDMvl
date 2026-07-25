import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  /* Кастомный скроллбар */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent.primary};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent.secondary};
  }

  /* Стили для выделения текста */
  ::selection {
    background: ${theme.colors.accent.primary};
    color: #fff;
  }
`;