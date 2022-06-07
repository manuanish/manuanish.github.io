import "../styles/globals.css";
import "inter-ui/inter.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });
  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default MyApp;
