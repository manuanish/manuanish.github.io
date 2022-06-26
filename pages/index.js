import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Twemoji from "@components/Twemoji";
import Header from "@components/Header";
import * as React from "react";
import { useRouter } from "next/router";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import {
  useTheme,
  Card,
  Link,
  Text,
  Divider,
  Code,
  Snippet,
  Collapse,
  Toggle,
  Badge,
  Button,
  useToasts,
} from "@geist-ui/core";
import {
  CommentDiscussionIcon,
  HeartFillIcon,
  CodeIcon,
  SunIcon,
  MoonIcon,
} from "@primer/octicons-react";
import { AiFillPushpin } from "react-icons/ai";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import Confetti from "react-confetti";
import Tags from "@components/Tags";
import BlogPost from "@components/BlogPost";
import { getPostSlugs, getAllPostData } from "@lib/parseMDX";

export default function Home({ postData, postSlugs }) {
  const router = useRouter();
  const { setToast } = useToasts();
  const { palette } = useTheme();
  const [theme, setTheme] = React.useState("dark");
  const [construction1, setConstruction1] = React.useState("group visible");
  const [construction2, setConstruction2] = React.useState("group hidden");
  const [runConfetti, setRunConfetti] = React.useState(false);
  const [hasRun, setHasRun] = React.useState(false);
  const [timesHovered, setTimesHovered] = React.useState(1);

  var dataList = [];
  for (var j = 0; j < postSlugs.length; j++)
    dataList.push({ slug: postSlugs[j], data: postData[j] });

  dataList.sort(function (a, b) {
    var aa = a.data.date.split("/").reverse().join(),
      bb = b.data.date.split("/").reverse().join();
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  for (var k = 0; k < postSlugs.length; k++) {
    postSlugs[k] = dataList[k].slug;
    postData[k] = dataList[k].data;
  }

  postData = postData.reverse();
  postSlugs = postSlugs.reverse();

  postSlugs = postSlugs.slice(0, 2);
  dataList = dataList.slice(0, 2);

  React.useEffect(() => {
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
  const handleConstructionClick = () => {
    setConstruction1("hidden");
    setConstruction2("visible");
    setRunConfetti(true);
    if (hasRun == false) {
      setToast({
        text: (
          <div>
            You fixed it! <Twemoji emoji="🎉" />
          </div>
        ),
        delay: 4000,
      });
      setHasRun(true);
    }
  };

  const handleHandHover = () => {
    setTimesHovered(timesHovered + 1);
    if (timesHovered % 4 == 0) {
      setToast({
        text: (
          <div>
            Hello there! <Twemoji emoji="👋" />
          </div>
        ),
        delay: 4000,
      });
    }
  };

  const handleHandClick = () => {
    setTimesHovered(timesHovered + 1);
    if (timesHovered % 4 == 0) {
      setToast({
        text: (
          <div>
            Hello there! <Twemoji emoji="👋" />
          </div>
        ),
        delay: 4000,
      });
    }
  };

  return (
    <div>
      <Head>
        <title>manuanish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header dir={["index"]} />
        <div className="flex-row md:flex lg:flex gap-20 mt-10">
          <div className="w-full">
            <div className="mt-20">
              <div className="flex gap-3">
                <motion.div
                  className="text-5xl font-extrabold"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Hello!
                </motion.div>
                <motion.div
                  className="text-5xl font-extrabold"
                  initial={{ opacity: 0, y: -5, rotate: 20 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.75,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <motion.div
                    onMouseEnter={handleHandHover}
                    onClick={handleHandClick}
                    whileHover={{ opacity: 1, y: 0, rotate: 10 }}
                    whileTap={{ opacity: 1, y: 0, rotate: 10 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 250,
                    }}
                  >
                    <Twemoji emoji="👋" />
                  </motion.div>
                </motion.div>
              </div>
              <br />
              <motion.div
                className="text-xl font-normal"
                style={{ color: palette.accents_5 }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.25,
                }}
              >
                Welcome to my <Code>website</Code>
              </motion.div>
            </div>
            <div className="mt-20">
              <div className="gap-3">
                <motion.div
                  className="text-3xl font-bold relative w-full float-left"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  This site is under&nbsp;
                  <div
                    className="w-fit pr-8 duration-500"
                    onClick={() => {
                      handleConstructionClick();
                    }}
                  >
                    <div className={`relative w-fit flex ${construction1}`}>
                      <span className="transform -rotate-12 group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        c
                      </span>
                      <span className="transform -rotate-6 translate-x-1 translate-y-1 group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        o
                      </span>
                      <span className="translate-y-[-3px] translate-x-1 group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        n
                      </span>
                      <span className="transform translate-x-1 -rotate-[5deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        s
                      </span>
                      <span className="transform translate-x-2 -rotate-[10deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        t
                      </span>
                      <span className="transform translate-x-3 -rotate-[-6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        r
                      </span>
                      <span className="transform translate-x-3 -rotate-[6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        u
                      </span>
                      <span className="transform translate-x-4 translate-y-1 -rotate-[-6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        c
                      </span>
                      <span className="transform translate-x-5 -rotate-[6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        t
                      </span>
                      <span className="transform translate-x-5 translate-y-[-1px] -rotate-[-6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        i
                      </span>
                      <span className="transform translate-x-7 -rotate-[-6deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        o
                      </span>
                      <span className="transform translate-x-7 -rotate-[7deg] group-hover:-rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        n
                      </span>
                    </div>
                    <div className={`relative w-fit flex ${construction2}`}>
                      <span className="transform -rotate-12 -rotate-0 translate-x-0 translate-y-0 duration-500">
                        c
                      </span>
                      <span className="transform -rotate-6 translate-x-1 translate-y-1 -rotate-0 translate-x-0 translate-y-0 duration-500">
                        o
                      </span>
                      <span className="translate-y-[-3px] translate-x-1 -rotate-0 translate-x-0 translate-y-0 duration-500">
                        n
                      </span>
                      <span className="transform translate-x-1 -rotate-[5deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        s
                      </span>
                      <span className="transform translate-x-2 -rotate-[10deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        t
                      </span>
                      <span className="transform translate-x-3 -rotate-[-6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        r
                      </span>
                      <span className="transform translate-x-3 -rotate-[6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        u
                      </span>
                      <span className="transform translate-x-4 translate-y-1 -rotate-[-6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        c
                      </span>
                      <span className="transform translate-x-5 -rotate-[6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        t
                      </span>
                      <span className="transform translate-x-5 translate-y-[-1px] -rotate-[-6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        i
                      </span>
                      <span className="transform translate-x-7 -rotate-[-6deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        o
                      </span>
                      <span className="transform translate-x-7 -rotate-[7deg] -rotate-0 translate-x-0 translate-y-0 duration-500">
                        n
                      </span>
                    </div>
                    <Confetti
                      width={330}
                      numberOfPieces={50}
                      initialVelocityY={20}
                      confettiSource={{
                        w: 10,
                        h: 10,
                        x: 100,
                        y: 50,
                      }}
                      run={runConfetti}
                      colors={["#3291ff"]}
                      recycle={false}
                    />
                  </div>
                </motion.div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <motion.div
                className="text-xl font-normal"
                style={{ color: palette.accents_5 }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 3.5,
                }}
              >
                <Twemoji emoji="🥱" /> While you wait, feel free to take a look
                at the following links!
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <motion.div
              className="mt-20 w-full"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 4.5,
              }}
            >
              <Card width="100%">
                <Card.Content>
                  <Text h3 my={0} className="flex">
                    <Twemoji emoji="📮" />
                    &nbsp;&nbsp;Contact
                  </Text>
                </Card.Content>
                <Divider h="1px" my={0} />
                <Card.Content>
                  <Text style={{ color: palette.accents_5 }}>
                    As a means of communication.
                  </Text>
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 5,
                    }}
                  >
                    <FaTwitter size={24} />
                    &nbsp;&nbsp;
                    <Link
                      href="https://twitter.com/manusanish"
                      block
                      target="_blank"
                    >
                      manusanish
                    </Link>
                    <div className="hidden">
                      <Badge.Anchor>
                        <Badge scale={0.5} type="error">
                          1
                        </Badge>
                        &nbsp;
                      </Badge.Anchor>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex mt-3"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 5.25,
                    }}
                  >
                    <FaInstagram size={24} />
                    &nbsp;&nbsp;
                    <Link
                      href="https://instagram.com/manusanish"
                      block
                      target="_blank"
                    >
                      manusanish
                    </Link>{" "}
                    <div className="hidden">
                      <Badge.Anchor>
                        <Badge scale={0.5} type="error">
                          1
                        </Badge>
                        &nbsp;
                      </Badge.Anchor>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex mt-3"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 5.5,
                    }}
                  >
                    <FaGithub size={24} />
                    &nbsp;&nbsp;
                    <Link
                      href="https://github.com/manuanish"
                      block
                      target="_blank"
                    >
                      manuanish
                      <div className="hidden">
                        <Badge.Anchor>
                          <Badge scale={0.5} type="error">
                            1
                          </Badge>
                          &nbsp;
                        </Badge.Anchor>
                      </div>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="flex mt-3"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 5.75,
                    }}
                  >
                    <FaTwitch size={24} />
                    &nbsp;&nbsp;
                    <Link href="https://twitch.tv/iHxpMC" block target="_blank">
                      iHxpMC
                      <div className="hidden">
                        <Badge.Anchor>
                          <Badge scale={0.5} type="error">
                            1
                          </Badge>
                          &nbsp;
                        </Badge.Anchor>
                      </div>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="flex mt-3"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 6,
                    }}
                  >
                    <FaDiscord size={24} />
                    &nbsp;&nbsp;
                    <Link
                      href=""
                      block
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      iHxp#6160
                      <div className="hidden">
                        <Badge.Anchor>
                          <Badge scale={0.5} type="error">
                            1
                          </Badge>
                          &nbsp;
                        </Badge.Anchor>
                      </div>
                    </Link>
                  </motion.div>
                </Card.Content>
              </Card>
            </motion.div>
          </div>
        </div>
        <GeistProvider>
          <div className="flex justify-center">
            <motion.div
              className="mt-20 w-[600px]"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 6.5,
              }}
            >
              <div className="border-0 border-l-4 pl-6">
                <Text h4 i>
                  &quot;Der Mensch kann tun was er will; er kann aber nicht
                  wollen was er will.&quot;{" "}
                </Text>
                <Text i type="secondary">
                  Man can do what he wills but he cannot will what he wills.
                </Text>
                <br />
                <br />
                <Text i b>
                  ― Arthur Schopenhauer, Essays and Aphorisms
                </Text>
              </div>
            </motion.div>
          </div>
        </GeistProvider>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text h2 className="mt-20">
            {" "}
            <Twemoji emoji="📂" /> Projects
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text
            h4
            style={{ color: palette.accents_5 }}
            className="max-w-[600px]"
          >
            /ˈpräˌjekts/ an individual or collaborative enterprise that is
            carefully planned to achieve a particular aim.
          </Text>
        </motion.div>

        <div className="flex space-evenly justify-center mt-10 gap-5 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-[300px] grow"
          >
            <Card width="100%">
              <Text h4 my={0} className="flex">
                <AiFillPushpin
                  size={26}
                  style={{ color: palette.successLight }}
                />
                &nbsp;LXXIII
              </Text>
              <Text>
                A puzzle similar to Cicada 3301 but <i>much</i> easier.
              </Text>
              <Card.Footer>
                <Link
                  block
                  icon
                  target="_blank"
                  href="https://lxxiii-old.vercel.app"
                >
                  Check it out!
                </Link>
              </Card.Footer>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-[300px] grow"
          >
            <Card width="100%">
              <Text h4 my={0}>
                Bon5R
              </Text>
              <Text>
                🔥 Bon5R — Create static, blog-aware websites with pure MDX.
              </Text>
              <Card.Footer>
                <Link block icon target="_blank" href="https://bon5r.com">
                  Check it out!
                </Link>
              </Card.Footer>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-[300px] grow"
          >
            <Card width="100%">
              <Text h4 my={0}>
                CMU-PGP
              </Text>
              <Text>literally just a command line wrapper for gnupg</Text>
              <Card.Footer>
                <Link
                  block
                  icon
                  target="_blank"
                  href="https://cmupgp.vercel.app"
                >
                  Check it out!
                </Link>
              </Card.Footer>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-[300px] grow"
          >
            <Card width="100%">
              <Text h4 my={0}>
                socket-chat
              </Text>
              <Text>A chat room designed for low internet areas.</Text>
              <Card.Footer>
                <Link
                  block
                  icon
                  target="_blank"
                  href="https://github.com/manuanish/socket-chat"
                >
                  Check it out!
                </Link>
              </Card.Footer>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text h2 className="mt-20">
            <Twemoji emoji="📖" /> Blog
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text
            h4
            style={{ color: palette.accents_5 }}
            className="max-w-[600px]"
          >
            /bläɡ/ a regularly updated website or web page, typically one run by
            an individual or small group, that is written in an informal or
            conversational style.
          </Text>
        </motion.div>
        <div className="relative">
          {postSlugs.map((slug) => (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5"
              key={slug}
            >
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
            </motion.div>
          ))}
          {theme == "light" ? (
            <motion.div
              className="flex justify-center w-full h-full"
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`w-full p-20 absolute bottom-0 bg-gradient-to-b from-transparent to-white`}
              >
                <div className="flex justify-center">
                  <Link href="/blog/" target="_blank">
                    <Button type="success" ghost>
                      View all
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="flex justify-center w-full h-full"
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`w-full p-20 absolute bottom-0 bg-gradient-to-b from-transparent to-black`}
              >
                <div className="flex justify-center">
                  <Link href="/blog/" target="_blank">
                    <Button type="success" ghost>
                      View all
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text h3 className="mt-20">
            <Twemoji emoji="🔐" /> My digital signature
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text
            h5
            style={{ color: palette.accents_5 }}
            className="max-w-[600px]"
          >
            For all you linux nerds out there.
          </Text>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Snippet
            symbol=""
            text={"1D6AA03AFB0BFB9A38D9D0BC5EE05F6C1C82CE5F"}
            width="auto"
          />
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Collapse.Group>
            <Collapse
              title={
                <div>
                  <Twemoji emoji="✅" />
                  &nbsp;Steps to verify
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                How do I verify a message with a signature? The instructions are
                given below.
                <br />
                <br />
                <br />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Text h4>1. Add my key to your keyring</Text>
                My{" "}
                <Link color underline href="/pubkey" target="blank">
                  public key
                </Link>
                , is available on the{" "}
                <Link
                  color
                  underline
                  href="https://pgp.mit.edu/"
                  target="blank"
                >
                  MIT key servers
                </Link>
                . To add this to your keychain, run the following command in
                your terminal:
                <br />
                <br />
                <Snippet>
                  gpg --keyserver pgp.mit.edu --recv-keys
                  0x1D6AA03AFB0BFB9A38D9D0BC5EE05F6C1C82CE5F
                </Snippet>
                <br />
                <br />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Text h4>2. Verify a message/document</Text>
                To verify a document (e.g <Code>example.txt</Code>) run the
                following command in your terminal.:
                <br />
                <br />
                <Snippet>gpg --verify example.txt</Snippet>
              </motion.div>
            </Collapse>
          </Collapse.Group>
        </motion.div>
        <motion.div
          className="mt-[100px] flex justify-center align-center"
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>
            <CodeIcon size={16} />
          </span>
          <span style={{ color: palette.accents_5 }}>&nbsp;with &nbsp;</span>
          <span style={{ color: palette.magenta }}>
            <HeartFillIcon size={16} />
          </span>
          <span style={{ color: palette.accents_5 }}>&nbsp; by @manuanish</span>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const postData = await getAllPostData();
  const postSlugs = await getPostSlugs();

  return {
    props: {
      postData,
      postSlugs,
    },
  };
}
