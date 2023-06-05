import React from "react";
import cn from "classnames";
import Link from "next/link";

import { Theme } from "@/enums/common";
import useTheme from "@/hooks/theme";
// icons
import MoonSVG from "@/static/icons/moon-solid.svg";
import SunSVG from "@/static/icons/sun-solid.svg";
import GithubSVG from "@/static/icons/github.svg";

import s from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
  };

  return (
    <header
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.header
      )}
    >
      <Link href="/">Web3 File</Link>
      <div className={s.header_theme} onClick={changeTheme}>
        {theme === Theme.LIGHT ? <MoonSVG /> : <SunSVG />}
      </div>
      <div className={s.header_theme}>
        <a
          href="https://github.com/MinhTamCK/front-end-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSVG />
        </a>
      </div>
    </header>
  );
};

export default Header;
