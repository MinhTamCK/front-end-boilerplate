import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import ToggleButton from "react-bootstrap/ToggleButton";

import { Theme } from "@/enums/common";
import useTheme from "@/hooks/theme";

import s from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(true);

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? Theme.LIGHT : Theme.DARK);
    setChecked(checked);
  };

  return (
    <header
      className={cn(
        "d-flex align-items-center justify-content-center",
        s.header
      )}
    >
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      <div>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="light"
          onChange={e => handleThemeChange(e.currentTarget.checked)}
        >
          {theme}
        </ToggleButton>
      </div>
    </header>
  );
};

export default Header;
