import { Provider } from "@/components/ui/provider"
import type { AppProps } from 'next/app'
import React from 'react';
import "./_app.css";

export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          {/* {children} */}
          <Component {...pageProps} />

        </Provider>
      </body>
    </html>
  );
} 