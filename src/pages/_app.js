import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import React, { useState } from "react";
import { ThemeProvider, LightTheme, DarkTheme } from '../components/ThemeSwitcher/ThemeContext'
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? LightTheme : DarkTheme;
 

  return (
     <Layout>  
     <ThemeProvider theme={theme} setTheme={setTheme}>
     <div style={currentTheme}>
        
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />     
   
    </div>
    </ThemeProvider>

    </Layout>
     
  );
}

export default MyApp;
