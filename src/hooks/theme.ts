import { useState } from "react";
import { Theme } from "@/enums/common";

type Props = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useTheme = (): Props => {
  const [theme, setThemeDisplay] = useState<Theme>(Theme.LIGHT);
  const setTheme = (themeTxt: Theme) => {
    document.body.setAttribute("data-theme", themeTxt);
    setThemeDisplay(themeTxt);
  };

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
