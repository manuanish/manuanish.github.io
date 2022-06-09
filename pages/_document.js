import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css"
        />
        <link
          rel="stylesheet"
          href="https://gitcdn.link/cdn/PrismJS/prism-themes/master/themes/prism-one-dark.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
        />
      </Head>
      <body
        suppressHydrationWarning
        className="md:p-20 lg:p-[180px] lg:pt-0 md:pt-0 p-5 lg:pb-10 md:pb-10"
      >
        <div>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
