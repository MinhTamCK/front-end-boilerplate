import type { AppProps } from "next/app";

import DefaultLayout from "@/components/layouts/Default";

import "@/styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {pageProps.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
