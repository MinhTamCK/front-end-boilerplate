import React from "react";
import cn from "classnames";
import Link from 'next/link'

import s from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  return (
    <header
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.header
      )}
    >
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
    </header>
  );
};

export default Header;
