import {
  Breadcrumbs,
  Link,
  Drawer,
  Code,
  Divider,
  Tree,
  Toggle,
  Button
} from "@geist-ui/core";

import { HomeFillIcon, SunIcon, MoonIcon } from "@primer/octicons-react";
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

  return (
    <div>
      <div className="w-full mt-8">
        <Breadcrumbs>
          <Breadcrumbs.Item href="#" onClick={(e) => {setState(true); e.preventDefault();}}>
            <HomeFillIcon size={20}/>
            manuanish
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
      <Drawer
        visible={state}
        onClose={() => setState(false)}
        placement="left"
        width="330px"
      >
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>File system</Drawer.Subtitle>
        <Divider />
        <Drawer.Content>
          <Tree>
            <Tree.Folder name="pages">
              <Tree.File
                name="index.js"
                onClick={() => {
                  router.push("/");
                  setState(false);
                }}
              />
            </Tree.Folder>
            <Tree.Folder name="public">
              <Tree.File
                name="README.md"
                onClick={() => {
                  router.push("/readme");
                  setState(false);
                }}
              />
              <Tree.File
                name="pubkey.txt"
                onClick={() => {
                  router.push("/pubkey");
                  setState(false);
                }}
              />
            </Tree.Folder>
          </Tree>
        </Drawer.Content>
        <div className="flex gap-2 justify-center w-full mt-20">
          <SunIcon />
          <Toggle checked={checked} onClick={handleClick} />
          <MoonIcon />
        </div>
      </Drawer>
    </div>
  );
}
