import Header from "@components/Header";
import BlogTitle from "@components/BlogTitle";
import Author from "@components/Author";
import {Text, Input} from "@geist-ui/core";
import {SearchIcon} from "@primer/octicons-react";

export default function Blog(){
  return (
    <div>
      <Header dir={["blog"]} />
      <div className="flex flex-row mt-20">
        <div className="grow">
          <BlogTitle>All Posts</BlogTitle>
          <Text type="secondary">Check back here for updates!</Text>
          <hr/>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
