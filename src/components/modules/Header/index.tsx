import React from "react";
import cn from "classnames";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// import { Theme } from "@/enums/common";
// import useTheme from "@/hooks/theme";

import s from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  // const { theme, setTheme } = useTheme();

  // const changeTheme = () => {
  //   theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
  // };

  return (
    <header
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.header
      )}
    >
      <div>FE Boilerplate</div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      {/* <div className={s.header_theme} onClick={changeTheme}>
        {theme === Theme.LIGHT ? (
          <FontAwesomeIcon icon={faSun} size="4x" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="4x" />
        )}
      </div> */}
    </header>
  );
};

export default Header;
