import React from "react";

import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

type Props = {
  children: React.ReactNode;
};

const Default: React.FunctionComponent<Props> = ({ children }: Props) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Default;
