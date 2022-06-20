import Header from "@components/Header";
import BlogTitle from "@components/BlogTitle";
import Author from "@components/Author";
import { Text, Input, Tag, Card, Link } from "@geist-ui/core";
import { SearchIcon } from "@primer/octicons-react";
import Twemoji from "@components/Twemoji";
import * as React from "react";

export default function Blog() {
  const [allTags, setAllTags] = React.useState([
    "Princeton",
    "Math",
    "Puzzle",
    "Well-written",
    "Solution",
    "Submission",
    "Update",
  ]);

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
            <Card width="100%">
              <Text h4 my={0} className="flex">
                LXXIII. Uncovered. - 20/6/22
              </Text>
              <Text>
                Solutions to the puzzle{" "}
                <Link
                  href="https://lxxiii-old.vercel.app"
                  target="_blank"
                  underline
                  color
                >
                  LXXIII
                </Link>
                .
              </Text>
              <Card.Footer>
                <Link block icon target="_blank" href="/blog/lxxiii-uncovered">
                  Read more!
                </Link>
              </Card.Footer>
            </Card>
            <Card width="100%">
              <Text h4 my={0}>
                LXXIII. The end? - 11/6/22
              </Text>
              <Text>
                Closing the puzzle{" "}
                <Link
                  href="https://lxxiii-old.vercel.app"
                  target="_blank"
                  underline
                  color
                >
                  LXXIII
                </Link>{" "}
                that I created.
              </Text>
              <Card.Footer>
                <Link block icon target="_blank" href="/blog/lxxiii-the-end">
                  Read more!
                </Link>
              </Card.Footer>
            </Card>
            <Card width="100%">
              <Text h4 my={0}>
                Beach/Summer Graph Contest - 7/6/22
              </Text>
              <Text>
                A short explaination on how I created a high quality graph.
              </Text>
              <Card.Footer>
                <Link
                  block
                  icon
                  target="_blank"
                  href="/blog/beach-graph-contest"
                >
                  Read more!
                </Link>
              </Card.Footer>
            </Card>
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
                {allTags.map((tag) => (
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
