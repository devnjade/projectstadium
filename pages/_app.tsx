import 'styles/index.scss';
import type { AppProps } from 'next/app';
import AppProvider from 'provider';
import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
