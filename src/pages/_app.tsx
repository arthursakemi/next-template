import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { TemplateProvider } from '../context/ContextTemplate';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <TemplateProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </TemplateProvider>
  </ThemeProvider>
);
export default MyApp;
