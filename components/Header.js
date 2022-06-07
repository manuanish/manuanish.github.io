import {
  Breadcrumbs,
  Link,
  Drawer,
  Code,
  Divider,
  Tree
} from "@geist-ui/core";

import {HomeFillIcon} from "@primer/octicons-react";
import * as React from "react";
import { useRouter } from "next/router";


export default function Header(props){
  const [state, setState] = React.useState(false);
  const router = useRouter();

  return(
    <div>
      <div className="w-full mt-8">
        <Breadcrumbs>
          <Breadcrumbs.Item href="#" onClick={() => setState(true)}><HomeFillIcon/>manuanish</Breadcrumbs.Item>
          {props.dir.map((file) => (
            <Breadcrumbs.Item href="#" onClick={() => setState(true)} key={file}>{file}</Breadcrumbs.Item>
          ))}
        </Breadcrumbs>
      </div>
      <Drawer visible={state} onClose={() => setState(false)} placement="left" width="330px">
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>File system</Drawer.Subtitle>
        <Divider/>
        <Drawer.Content>
        <Tree>
          <Tree.Folder name="pages">
            <Tree.File name="index.js" onClick={() => {router.push("/");setState(false)}}/>
          </Tree.Folder>
          <Tree.Folder name="public">
            <Tree.File name="README.md" onClick={() => {router.push("/readme");setState(false)}}/>
            <Tree.File name="pubkey.txt" onClick={() => {router.push("/pubkey");setState(false)}}/>
          </Tree.Folder>
        </Tree>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
