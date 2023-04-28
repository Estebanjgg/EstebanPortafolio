import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

import { useTheme } from "../components/ThemeSwitcher/ThemeContext";


function MyApp({ Component, pageProps }) {
  const { currentTheme } = useTheme();
  return (
    <div style={currentTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
  );
}

export default MyApp;