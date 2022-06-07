import "../styles/globals.css";
import "inter-ui/inter.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import * as React from "react";
import {
  Toggle
} from "@geist-ui/core";
import {
  SunIcon,
  MoonIcon
} from "@primer/octicons-react";

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = React.useState('dark')
  const [checked, setChecked] = React.useState(true)
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <div className="flex scale-2 pt-5 mb-20 mr-5 md:mr-20 lg:mr-20">
        <div className="grow"></div>
        <div>
          <SunIcon size={16} />&nbsp;&nbsp;<Toggle checked={checked} onChange={switchThemes}/>&nbsp;&nbsp;<MoonIcon size={16} />
        </div>
      </div>
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default MyApp;
