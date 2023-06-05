import React from "react";
import cn from "classnames";
import Link from "next/link";

import { Theme } from "@/enums/common";
import useTheme from "@/hooks/theme";
// icons
import MoonSVG from "@/static/icons/moon-solid.svg";
import SunSVG from "@/static/icons/sun-solid.svg";

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
      <div>FE Boilerplate</div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      <div className={s.header_theme} onClick={changeTheme}>
        {theme === Theme.LIGHT ? (
          <MoonSVG />
        ) : (
          <SunSVG className={s.header_white} />
        )}
      </div>
    </header>
  );
};

export default Header;
