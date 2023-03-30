import type { AppProps } from "next/app";

import DefaultLayout from "@/components/layouts/Default";
import CustomHead from "@/components/layouts/CustomHead";

import "@/styles/index.scss";

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <CustomHead seoInfo={pageProps?.seoInfo} />
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
