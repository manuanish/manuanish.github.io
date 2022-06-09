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

import { HomeFillIcon, SunIcon, MoonIcon, GraphIcon } from "@primer/octicons-react";
import * as React from "react";
import { useRouter } from "next/router";

export default function Header(props) {
  const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);
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
    <div className="flex">
      <div className="w-full mt-8 grow">
        <Breadcrumbs>
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
      <div className="mt-10">
        <Link href="#" block onClick={(e) => {setState2(true); e.preventDefault();}}><GraphIcon size={16} /></Link>
      </div>
      <Drawer
        visible={state}
        onClose={() => setState(false)}
        placement="left"
        width="332px"
      >
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>File system</Drawer.Subtitle>
        <Divider />
        <Drawer.Content>
          <Tree>
            <Tree.Folder name="pages">
              <Tree.Folder name="blog">
                <Tree.File
                  name="beach-graph-contest.mdx"
                  onClick={() => {
                    router.push("/blog/beach-graph-contest");
                    setState(false);
                  }}
                />
              </Tree.Folder>
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
      <Drawer
        visible={state2}
        onClose={() => setState2(false)}
        placement="right"
        width="332px"
      >
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>Page Statistics</Drawer.Subtitle>
        <Divider />
        <Drawer.Content>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
