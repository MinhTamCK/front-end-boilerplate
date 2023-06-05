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
      <div className={cn("container", s.footer_content)}>Footer</div>
    </footer>
  );
};

export default Footer;
