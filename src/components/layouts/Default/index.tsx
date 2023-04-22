import React from "react";

import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

import s from "./Default.module.scss";

type Props = {
  children: React.ReactNode;
};

const Default: React.FunctionComponent<Props> = ({ children }: Props) => {

  return (
    <>
      <Header />
      <main className={s.default}>{children}</main>
      <Footer />
    </>
  );
};

export default Default;
