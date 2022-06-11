import { Tree } from "@geist-ui/core";
import { useRouter } from "next/router";

export default function FileTree(props) {
  const router = useRouter();

  return (
    <Tree>
      <Tree.Folder name="pages">
        <Tree.Folder name="blog">
          <Tree.File
            name="beach-graph-contest.mdx"
            onClick={() => {
              router.push("/blog/beach-graph-contest");
              props.func();
            }}
          />
          <Tree.File
            name="lxxiii-the-end.mdx"
            onClick={() => {
              router.push("/blog/lxxiii-the-end");
              props.func();
            }}
          />
        </Tree.Folder>
        <Tree.File
          name="index.js"
          onClick={() => {
            router.push("/");
            props.func();
          }}
        />
      </Tree.Folder>
      <Tree.Folder name="public">
        <Tree.File
          name="README.md"
          onClick={() => {
            router.push("/readme");
            props.func();
          }}
        />
        <Tree.File
          name="pubkey.txt"
          onClick={() => {
            router.push("/pubkey");
            props.func();
          }}
        />
      </Tree.Folder>
    </Tree>
  );
}
