import React from "react";
import Head from "next/head";

import { SeoInfo } from "@/interfaces/base";

type Props = {
  seoInfo?: SeoInfo;
};

const CustomHead: React.FunctionComponent<Props> = ({
  seoInfo
}) => {
  return (
    <Head>
      <title>{seoInfo?.title || ""}</title>
      <meta name="description" content={seoInfo?.description || ""} />
      <meta name="keywords" content={seoInfo?.keywords || ""} />
      <meta property="og:title" content={seoInfo?.title || ""} />
      <meta property="og:description" content={seoInfo?.description || ""} />
      <meta property="og:url" content="" />
      <meta property="og:image" content={seoInfo?.seoImage || ""} />
      <meta name="twitter:title" content={seoInfo?.title} />
      <meta name="twitter:description" content={seoInfo?.description || ""} />
      <meta name="twitter:image" content={seoInfo?.seoImage || ""} />
      <link rel="canonical" href="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CustomHead;
