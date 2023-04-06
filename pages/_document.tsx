import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import useTheme from "@/hooks/theme";

const WebAppDocument: React.FunctionComponent<Document> = () => {
  const { theme } = useTheme();

  return (
    <Html>
      <Head />
      <body data-theme={theme}>
        <Main />
        <NextScript />
        <noscript>Your browser does not support JavaScript!</noscript>
      </body>
    </Html>
  );
};

export default WebAppDocument;
