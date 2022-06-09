import {
  Breadcrumbs,
  Link,
  Drawer,
  Code,
  Divider,
  Tree,
  Toggle,
  Button,
  Description,
  Snippet
} from "@geist-ui/core";

import FileTree from "@components/FileTree";

import { HomeFillIcon, SunIcon, MoonIcon, GraphIcon } from "@primer/octicons-react";
import * as React from "react";
import { useRouter } from "next/router";

export default function Header(props) {
  const [state, setState] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");
  const router = useRouter();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  });

  const handleClick = () => {
    if (checked == false) {
      localStorage.setItem("theme", "dark");
      router.push(router.pathname);
    } else {
      localStorage.setItem("theme", "light");
      router.push(router.pathname);
    }
  };

  const changeState = () => {
    setState(false);
  }

  return (
    <div className="flex">
      <div className="mt-8 grow">
        <div className="">
        <Breadcrumbs className="overflow-scroll">
            <Breadcrumbs.Item href="#" onClick={(e) => {setState(true); e.preventDefault();}}>
             { theme == "dark" ? <span style={{color: '#3291ff', backgroundColor: 'rgba(7, 97, 209, 0.25)', padding: 4, paddingRight: 5, borderRadius: 5}}><HomeFillIcon size={20}/>
             manuanish</span>: <span style={{color: '#0070f3', backgroundColor: 'rgba(7, 97, 209, 0.1)', padding: 4, paddingRight: 5, borderRadius: 5}}><HomeFillIcon size={20}/>
             manuanish</span>}

            </Breadcrumbs.Item>
            {props.dir.map((file) => (
              <Breadcrumbs.Item
                href="#"
                onClick={(e) => {setState(true); e.preventDefault();}}
                key={file}
              >
                {file}
              </Breadcrumbs.Item>
            ))}
          </Breadcrumbs>
        </div>
      </div>
      <Drawer
        visible={state}
        onClose={() => setState(false)}
        placement="left"
        width="332px"
      >
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>Metadata</Drawer.Subtitle>

        <Drawer.Content>
        <br/>
          <Description title="Files" content="Explore all public page routes." />
          <br/>
          <FileTree func={changeState}/>
          <br/>
          <Divider/>
          <br/>
          <Description title="Statistics" content="Information about the current page." />
          <br/>
          <div className="flex">
          <Snippet symbol="" type="lite" width="100%" text={[`{`, `  path: ${router.pathname},`, `  views: null,`, `  impressions: null`,`}`]}/>
          </div>
          <br/>
          <Divider/>
          <br/>
          <Description title="Theme" content="Change the website's color palette." />
          <br/>
          <div className="flex gap-2 justify-center w-full">
            <SunIcon />
            <Toggle checked={checked} onClick={handleClick} />
            <MoonIcon />
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
