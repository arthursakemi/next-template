import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { TemplateProvider } from '../context/ContextTemplate';

import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <TemplateProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </TemplateProvider>
  </ThemeProvider>
);
export default MyApp;
