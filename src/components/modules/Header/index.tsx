import React from "react";
import cn from "classnames";

import s from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  return (
    <header
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.header
      )}
    >
      header
    </header>
  );
};

export default Header;
