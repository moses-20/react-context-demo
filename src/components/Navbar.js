import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <h3> List of Favorite Books </h3>
    </nav>
  );
};

export default Navbar;
