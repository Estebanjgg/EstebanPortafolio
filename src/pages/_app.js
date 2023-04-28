import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeSwitcher/ThemeContext";


function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
  );
}

export default MyApp;