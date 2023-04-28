import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { useTheme } from "../ThemeSwitcher/ThemeContext";

const  Layout = ({ children }) => {
  const { currentTheme } = useTheme();
  
  return (
    <div style={currentTheme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;