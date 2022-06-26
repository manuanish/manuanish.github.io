import fs from "fs";
import { join } from "path";
import * as matter from "gray-matter";
export const random = 10;
const postsDirectory = join(process.cwd(), "blog-posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.substring(0, post.length - 4));
}

export function getAllPostData() {
  const postFiles = fs.readdirSync(postsDirectory);
  const postData = [];

  postFiles.map((post) => {
    const { data, content } = matter(
      fs.readFileSync(postsDirectory + "/" + post, "utf8")
    );
    postData.push(data);
  });

  return postData;
}

export function getAllTags() {
  const postData = getAllPostData();
  const tagsList = [];
  for (var k = 0; k < postData.length; k++) {
    tagsList.push(postData[k].tag1);
    tagsList.push(postData[k].tag2);
    tagsList.push(postData[k].tag3);
    tagsList.push(postData[k].tag4);
    tagsList.push(postData[k].tag5);
    tagsList.push(postData[k].tag6);
    tagsList.push(postData[k].tag7);
  }
  const tagsListFiltered = tagsList.filter(function (element) {
    return element !== undefined;
  });
  const tagsListFinal = [...new Set(tagsListFiltered)];
  return tagsListFinal;
}
