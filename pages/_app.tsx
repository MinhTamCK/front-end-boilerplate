import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Amplify } from "aws-amplify";

import DefaultLayout from "@/components/layouts/Default";
import CustomHead from "@/components/layouts/CustomHead";
import awsconfig from "@/config/aws-exports";

import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });
Amplify.configure(awsconfig);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="ethereum">
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
    </ThirdwebProvider>
  );
}

export default App;
