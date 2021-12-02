import "../public/css/flickity.min.css";
import "../public/css/fonts-hezareh.css";

import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";

import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import client from "../server/apollo";
import createCache from '@emotion/cache';
import createEmotionCache from "../src/createEmotionCache";
import rtlPlugin from 'stylis-plugin-rtl';
import store from "../store/store";
import theme from "../src/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
      <CacheProvider value={cacheRtl}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
        </CacheProvider>
      </ApolloProvider>
    </Provider>
  );
}
