import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'

import DefaultLayout from "@/components/layouts/Default";
import CustomHead from "@/components/layouts/CustomHead";

import "@/styles/index.scss";

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
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
