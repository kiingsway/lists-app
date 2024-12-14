import { ConfigProvider, theme } from 'antd';
import type { AppProps } from 'next/app'
import React from 'react';
import "./_app.css";

export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {


  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
} 