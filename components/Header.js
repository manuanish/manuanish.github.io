import {
  Breadcrumbs,
  Link,
  Drawer,
  Code,
  Divider,
  Tree,
  Toggle,
  Button,
  Description,
  Snippet,
  Badge,
  Text,
  Avatar,
  Spacer,
  Loading,
} from "@geist-ui/core";
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

import FileTree from "@components/FileTree";

import {
  HomeFillIcon,
  SunIcon,
  MoonIcon,
  GraphIcon,
  GitBranchIcon,
  CommentIcon,
  CheckIcon,
} from "@primer/octicons-react";
import * as React from "react";
import { useRouter } from "next/router";

export default function Header(props) {
  const [state, setState] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");
  const [viewCount, setViewCount] = React.useState(null);
  const [impressionCount, setImpressionCount] = React.useState(null);
  const [lastViewed, setLastViewed] = React.useState("null");
  const [currentPageID, setCurrentPageID] = React.useState(null);
  const [hasUpdated, setHasUpdated] = React.useState(false);
  const [hasUpdatedViews, setHasUpdatedViews] = React.useState(false);
  const [hasUpdatedImpressions, setHasUpdatedImpressions] =
    React.useState(false);
  const [commitData, setCommitData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasFetchedCommitData, setHasFetchedCommitData] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }

    async function fetchViews() {
      var pageNames = [];
      var idList = [];
      if (props.dynamic != true) {
        try {
          const { data, error } = await supabase.from("page-data").select();
          var pageData = data;
          for (var i = 0; i < pageData.length; i++) {
            pageNames.push(pageData[i].pageName);
            idList.push(pageData[i].id);
          }
          if (pageNames.includes(router.pathname) == false) {
            if (pageData.length == 0) {
              const { data, error } = await supabase.from("page-data").insert([
                {
                  id: 1,
                  pageName: router.pathname,
                  viewCount: 1,
                  impressionCount: 1,
                },
              ]);
              localStorage.setItem(`has_viewed_${router.pathname}`, "true");
            } else {
              const { data, error } = await supabase.from("page-data").insert([
                {
                  id: Math.max.apply(Math, idList) + 1,
                  pageName: router.pathname,
                  viewCount: 1,
                  impressionCount: 1,
                },
              ]);
              localStorage.setItem(`has_viewed_${router.pathname}`, "true");
            }
          } else {
            for (var i = 0; i < pageData.length; i++) {
              if (pageData[i].pageName == router.pathname) {
                if (hasUpdated == false) {
                  if (hasUpdatedImpressions == false) {
                    var current = new Date();
                    await supabase
                      .from("page-data")
                      .update({
                        impressionCount: pageData[i].impressionCount + 1,
                      })
                      .match({ pageName: router.pathname });
                    await supabase
                      .from("page-data")
                      .update({ lastViewed: current })
                      .match({ pageName: router.pathname });
                    setHasUpdatedImpressions(true);
                    setImpressionCount(pageData[i].impressionCount + 1);
                    setLastViewed(current);
                  }

                  if (hasUpdatedViews == false) {
                    const hasViewed = await localStorage.getItem(
                      `has_viewed_${router.pathname}`
                    );

                    if (hasViewed != "true") {
                      await supabase
                        .from("page-data")
                        .update({ viewCount: pageData[i].viewCount + 1 })
                        .match({ pageName: router.pathname });
                      localStorage.setItem(
                        `has_viewed_${router.pathname}`,
                        "true"
                      );
                      setHasUpdatedViews(true);
                      setViewCount(pageData[i].viewCount + 1);
                    } else {
                      setViewCount(pageData[i].viewCount);
                    }
                  }
                }
                setHasUpdated(true);
              }
            }
          }
        } catch {
          setViewCount("-1");
          setImpressionCount("-1");
          setLastViewed("-1");
        }
      } else if (props.dynamic == true) {
        var DYNAMIC_URL =
          router.pathname.substring(0, router.pathname.lastIndexOf("/")) +
          "/" +
          router.query.slug;

        try {
          const { data, error } = await supabase.from("page-data").select();
          var pageData = data;
          for (var i = 0; i < pageData.length; i++) {
            pageNames.push(pageData[i].pageName);
            idList.push(pageData[i].id);
          }
          if (pageNames.includes(DYNAMIC_URL) == false) {
            if (pageData.length == 0) {
              const { data, error } = await supabase.from("page-data").insert([
                {
                  id: 1,
                  pageName: DYNAMIC_URL,
                  viewCount: 1,
                  impressionCount: 1,
                },
              ]);
              localStorage.setItem(`has_viewed_${DYNAMIC_URL}`, "true");
            } else {
              const { data, error } = await supabase.from("page-data").insert([
                {
                  id: Math.max.apply(Math, idList) + 1,
                  pageName: DYNAMIC_URL,
                  viewCount: 1,
                  impressionCount: 1,
                },
              ]);
              localStorage.setItem(`has_viewed_${DYNAMIC_URL}`, "true");
            }
          } else {
            for (var i = 0; i < pageData.length; i++) {
              if (pageData[i].pageName == DYNAMIC_URL) {
                if (hasUpdated == false) {
                  if (hasUpdatedImpressions == false) {
                    var current = new Date();
                    await supabase
                      .from("page-data")
                      .update({
                        impressionCount: pageData[i].impressionCount + 1,
                      })
                      .match({ pageName: DYNAMIC_URL });
                    await supabase
                      .from("page-data")
                      .update({ lastViewed: current })
                      .match({ pageName: DYNAMIC_URL });
                    setHasUpdatedImpressions(true);
                    setImpressionCount(pageData[i].impressionCount + 1);
                    setLastViewed(current);
                  }

                  if (hasUpdatedViews == false) {
                    const hasViewed = await localStorage.getItem(
                      `has_viewed_${DYNAMIC_URL}`
                    );

                    if (hasViewed != "true") {
                      await supabase
                        .from("page-data")
                        .update({ viewCount: pageData[i].viewCount + 1 })
                        .match({ pageName: DYNAMIC_URL });
                      localStorage.setItem(`has_viewed_${DYNAMIC_URL}`, "true");
                      setHasUpdatedViews(true);
                      setViewCount(pageData[i].viewCount + 1);
                    } else {
                      setViewCount(pageData[i].viewCount);
                    }
                  }
                }
                setHasUpdated(true);
              }
            }
          }
        } catch {
          setViewCount("-1");
          setImpressionCount("-1");
          setLastViewed("-1");
        }
      }
    }

    fetchViews();

    async function fetchCommitData() {
      if (hasFetchedCommitData == false) {
        fetch(
          "https://api.github.com/repos/manuanish/manuanish.github.io/branches/main"
        )
          .then((res) => res.json())
          .then((json) => {
            setCommitData(json);
          });

        setHasFetchedCommitData(true);
      }
    }

    fetchCommitData();

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
  });

  const handleRouteChange = () => {
    setIsLoading(true);
  };

  const handleRouteComplete = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    if (checked == false) {
      localStorage.setItem("theme", "dark");
      router.push(router.asPath);
    } else {
      localStorage.setItem("theme", "light");
      router.push(router.asPath);
    }
  };

  const changeState = () => {
    setState(false);
  };

  return (
    <div className="flex">
      <div className="mt-8 grow">
        <div className="overflow-auto whitespace-nowrap">
          <Breadcrumbs>
            <Breadcrumbs.Item
              href="#"
              onClick={(e) => {
                setState(true);
                e.preventDefault();
              }}
            >
              {theme == "dark" ? (
                <span
                  style={{
                    color: "#3291ff",
                    backgroundColor: "rgba(7, 97, 209, 0.25)",
                    padding: 4,
                    paddingRight: 5,
                    borderRadius: 5,
                  }}
                >
                  <HomeFillIcon size={20} />
                  manuanish
                </span>
              ) : (
                <span
                  style={{
                    color: "#0070f3",
                    backgroundColor: "rgba(7, 97, 209, 0.1)",
                    padding: 4,
                    paddingRight: 5,
                    borderRadius: 5,
                  }}
                >
                  <HomeFillIcon size={20} />
                  manuanish
                </span>
              )}
            </Breadcrumbs.Item>
            {props.dir.map((file) => (
              <Breadcrumbs.Item
                href="#"
                onClick={(e) => {
                  setState(true);
                  e.preventDefault();
                }}
                key={file}
              >
                {file}
              </Breadcrumbs.Item>
            ))}
          </Breadcrumbs>
        </div>
      </div>
      <Drawer
        visible={state}
        onClose={() => setState(false)}
        placement="left"
        width="332px"
        style={{overflow: 'auto'}}
      >
        <Code>manuanish.vercel.app</Code>
        <Drawer.Subtitle>Metadata</Drawer.Subtitle>

        <Drawer.Content style={{overflow: 'auto'}}>
          <br />
          <Description
            title="Files"
            content="Explore all public page routes."
          />
          <br />
          <FileTree func={changeState} />
          <br />
          <Divider />
          <br />
          <Description
            title="Statistics"
            content="Information about the current page."
          />
          <br />
          <div className="flex" style={{overflow: 'auto'}}>
            <pre className="w-full">
              {props.dynamic == true ? (
                <Code width="100%">
                  &#123;
                  <br />
                  &nbsp;&nbsp;path: &quot;
                  {router.pathname.substring(
                    0,
                    router.pathname.lastIndexOf("/")
                  ) +
                    "/" +
                    router.query.slug}
                  &quot;,
                  <br />
                  &nbsp;&nbsp;views: &quot;{viewCount}&quot;,
                  <br />
                  &nbsp;&nbsp;impressions: &quot;{impressionCount}&quot;,
                  <br />
                  &nbsp;&nbsp;lastViewed: &quot;{lastViewed.toString()}&quot;
                  <br />
                  &#125;
                </Code>
              ) : (
                <Code width="100%">
                  &#123;
                  <br />
                  &nbsp;&nbsp;path: &quot;{router.pathname}&quot;,
                  <br />
                  &nbsp;&nbsp;views: &quot;{viewCount}&quot;,
                  <br />
                  &nbsp;&nbsp;impressions: &quot;{impressionCount}&quot;,
                  <br />
                  &nbsp;&nbsp;lastViewed: &quot;{lastViewed.toString()}&quot;
                  <br />
                  &#125;
                </Code>
              )}
            </pre>
          </div>
          <br />
          <Divider />
          <br />
          <Description
            title="Theme"
            content="Change the website's color palette."
          />
          <br />
          {isLoading ? (
            <div className="flex gap-2 justify-center w-full items-start">
              <Loading width={"100"} />
            </div>
          ) : (
            <div className="flex gap-2 justify-center w-full items-start">
              <SunIcon />
              <Toggle checked={checked} onClick={handleClick} />
              <MoonIcon />
            </div>
          )}
          <br />
          <Divider />
          <br />
          <Description
            title="Branch"
            content="Current stable version of the website."
          />
          <br />
          {commitData.commit ? (
            <div className="flex items-center">
              <div className="grow">
                <div className="flex items-center">
                  <Avatar src="https://github.com/manuanish.png" />
                  &nbsp;
                  <div className="truncate flex max-w-[150px] whitespace-nowrap">
                    <Text span type="secondary" font="12px">
                      &nbsp;{commitData.commit.commit.message}
                    </Text>
                  </div>
                </div>
              </div>
              <div>
                <GitBranchIcon />{" "}
                <Badge>{commitData.commit.sha.substring(0, 7)}</Badge>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="grow">
                <Avatar src="https://github.com/manuanish.png" />
                <Text span type="secondary" font="14px">
                  &nbsp;null
                </Text>
              </div>
              <div>
                <GitBranchIcon /> <Badge>null</Badge>
              </div>
            </div>
          )}
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
