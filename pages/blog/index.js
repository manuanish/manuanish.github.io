import Header from "@components/Header";
import BlogTitle from "@components/BlogTitle";
import Author from "@components/Author";
import { Text, Input, Tag, Card, Link } from "@geist-ui/core";
import { SearchIcon } from "@primer/octicons-react";
import Twemoji from "@components/Twemoji";
import * as React from "react";
import { getPostSlugs, getAllPostData, getAllTags } from "@lib/parseMDX";
import { useRouter } from "next/router";

import BlogPost from "@components/BlogPost";

export default function Blog({ postData, postSlugs, tagsList }) {
  const router = useRouter();

  var dataList = [];
  for (var j = 0; j < postSlugs.length; j++)
    dataList.push({ slug: postSlugs[j], data: postData[j] });

  dataList.sort(function (a, b) {
    var aa = a.data.date.split("/").join(),
      bb = b.data.date.split("/").join();
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  for (var k = 0; k < postSlugs.length; k++) {
    postSlugs[k] = dataList[k].slug;
    postData[k] = dataList[k].data;
  }

  postData = postData.reverse();
  postSlugs = postSlugs.reverse();

  return (
    <div>
      <Header dir={["blog"]} />
      <div className="flex flex-row mt-20 gap-5">
        <div className="grow">
          <BlogTitle>All Posts</BlogTitle>
          <Text type="secondary">Check back here for updates!</Text>
          <hr />
          <div className="flex flex-col w-full gap-5">
            <br />
            {postSlugs.map((slug) => (
              <BlogPost
                key={slug}
                tag1={postData[postSlugs.indexOf(slug)].tag1}
                tag2={postData[postSlugs.indexOf(slug)].tag2}
                tag3={postData[postSlugs.indexOf(slug)].tag3}
                tag4={postData[postSlugs.indexOf(slug)].tag4}
                tag5={postData[postSlugs.indexOf(slug)].tag5}
                tag6={postData[postSlugs.indexOf(slug)].tag6}
                tag7={postData[postSlugs.indexOf(slug)].tag7}
                title={postData[postSlugs.indexOf(slug)].title}
                date={postData[postSlugs.indexOf(slug)].date}
                description={postData[postSlugs.indexOf(slug)].description}
                href={slug}
              />
            ))}
          </div>
        </div>
        <div className="invisible sm:visible">
          <div className="w-[0px] sm:w-[250px]">
            <div className="flex flex-col">
              <Text h5>Quick find</Text>
              <Input
                icon={<SearchIcon />}
                placeholder="Search..."
                width="100%"
              />
              <br />
            </div>
            <div className="flex flex-col max-w-[250px]">
              <Text h5>
                <Twemoji emoji="🔖" /> Tags
              </Text>
              <div className="flex flex-row flex-wrap gap-2">
                {tagsList.map((tag) => (
                  <Tag type="success" invert key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const postData = await getAllPostData();
  const postSlugs = await getPostSlugs();
  const tagsList = await getAllTags();

  return {
    props: {
      postData,
      postSlugs,
      tagsList: tagsList,
    },
  };
}
