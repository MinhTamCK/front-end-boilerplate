import React from "react";
import cn from "classnames";

import s from "./Footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.footer
      )}
    >
      Footer
    </footer>
  );
};

export default Footer;
