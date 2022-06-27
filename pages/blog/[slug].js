import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { join } from "path";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

import Author from "@components/Author";
import BlogImage from "@components/BlogImage";
import BlogTitle from "@components/BlogTitle";
import Header from "@components/Header";
import PageTitle from "@components/PageTitle";
import Tags from "@components/Tags";
import Twemoji from "@components/Twemoji";

import ELADemo from "@components/blog/ELADemo";
import VisibilityDemo from "@components/blog/VisibilityDemo";

import { User, Note, Collapse } from "@geist-ui/core";

import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const components = {
  BlogImage: BlogImage,
  User: User,
  Note: Note,
  Collapse: Collapse,
  Twemoji: Twemoji,
  ELADemo: ELADemo,
  VisibilityDemo: VisibilityDemo,
};

export default function BlogPost({ source, frontMatter }) {
  const router = useRouter();

  return (
    <div>
      <PageTitle title={`manuanish | ${frontMatter.title}`} />
      <Header dynamic={true} dir={["blog", router.query.slug]} />
      <br />
      <br />
      <br />
      <Tags
        tags={[
          frontMatter.tag1,
          frontMatter.tag2,
          frontMatter.tag3,
          frontMatter.tag4,
          frontMatter.tag5,
          frontMatter.tag6,
          frontMatter.tag7,
        ]}
      />
      <br />
      <BlogTitle>{frontMatter.title}</BlogTitle>
      <Author
        userName={frontMatter.userName}
        readTime={frontMatter.readTime}
        date={frontMatter.date}
      />
      <br />
      <hr />
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(
    join(process.cwd(), "blog-posts"),
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkPrism, remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "blog-posts"))
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
