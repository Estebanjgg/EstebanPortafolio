import Layout from '../components/Layout/Layout';
import 'swiper/swiper-bundle.min.css';
import '../styles/globals.css';
import React from "react";
import { ThemeProvider } from '../components/ThemeSwitcher/ThemeContext'
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider>
        <ThemeSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
