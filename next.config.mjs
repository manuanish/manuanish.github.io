import withMDX from "@next/mdx";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkPrism, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

export default config({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
});
