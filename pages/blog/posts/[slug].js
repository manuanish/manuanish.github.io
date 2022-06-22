import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

import Author from '@components/Author'
import BlogImage from '@components/BlogImage'
import BlogTitle from '@components/BlogTitle'
import Header from '@components/Header'
import PageTitle from '@components/PageTitle'
import Tags from '@components/Tags'
import Twemoji from "@components/Twemoji";

import ELADemo from "@components/blog/ELADemo";
import VisibilityDemo from "@components/blog/VisibilityDemo";

import { User, Note, Collapse } from "@geist-ui/core";

import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'

import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  BlogImage: BlogImage,
  User: User,
  Note: Note,
  Collapse: Collapse,
  Twemoji: Twemoji,
  ELADemo: ELADemo,
  VisibilityDemo: VisibilityDemo
}

export default function PostPage({ source, frontMatter }) {
  console.log(frontMatter)
  return (
    <div>
      <Header dir={['blog', 'posts', frontMatter.file]}/>
      <br/>
      <br/>
      <br/>
      <Tags tags={[frontMatter.tag1, frontMatter.tag2, frontMatter.tag3, frontMatter.tag4, frontMatter.tag5, frontMatter.tag6, frontMatter.tag7]} />
      <br/>
      <BlogTitle>{frontMatter.title}</BlogTitle>
      <Author userName={frontMatter.userName} readTime={frontMatter.readTime} date={frontMatter.date} />
      <br />
      <hr/>
      <main>
        <MDXRemote {...source} components={components}/>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkPrism, remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
