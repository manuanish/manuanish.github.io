import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Twemoji from "@components/Twemoji";
import {
  useTheme,
  Card,
  Link,
  Text,
  Divider,
  Code,
  Snippet,
  Collapse,
} from "@geist-ui/core";
import {
  CommentDiscussionIcon,
  HeartFillIcon,
  CodeIcon,
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

export default function Home() {
  const { palette } = useTheme();
  return (
    <div className="md:p-20 lg:p-20 p-5">
      <Head>
        <title>manuanish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex-row md:flex lg:flex gap-20">
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
                  <Twemoji emoji="👋" />
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
                  <div className="relative w-fit flex ">
                    <span className="transform -rotate-12">c</span>
                    <span className="transform -rotate-6 translate-x-1 translate-y-1">
                      o
                    </span>
                    <span className="translate-y-[-3px] translate-x-1">n</span>
                    <span className="transform translate-x-1 -rotate-[5deg]">
                      s
                    </span>
                    <span className="transform translate-x-2 -rotate-[10deg]">
                      t
                    </span>
                    <span className="transform translate-x-3 -rotate-[-6deg]">
                      r
                    </span>
                    <span className="transform translate-x-3 -rotate-[6deg]">
                      u
                    </span>
                    <span className="transform translate-x-4 translate-y-1 -rotate-[-6deg]">
                      c
                    </span>
                    <span className="transform translate-x-5 -rotate-[6deg]">
                      t
                    </span>
                    <span className="transform translate-x-5 translate-y-[-1px] -rotate-[-6deg]">
                      i
                    </span>
                    <span className="transform translate-x-7 -rotate-[-6deg]">
                      o
                    </span>
                    <span className="transform translate-x-7 -rotate-[7deg]">
                      n
                    </span>
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
                <Text h3 my={0}>
                  <CommentDiscussionIcon size={28} />
                  &nbsp;&nbsp;Contact
                </Text>
              </Card.Content>
              <Divider h="1px" my={0} />
              <Card.Content>
                <Text style={{ color: palette.accents_5 }}>
                  If you ever need me.
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
                  </Link>
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
                  <Link href="" block>
                    iHxp#6160
                  </Link>
                </motion.div>
              </Card.Content>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 7,
          }}
        >
          <Text h2 className="mt-20">
            {" "}
            Projects
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 7.5,
          }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 8.5,
            }}
            className="max-w-[300px]"
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
                  href="https://lxxiii.vercel.app"
                >
                  Check it out!
                </Link>
              </Card.Footer>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 8.75,
            }}
            className="max-w-[300px]"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 9,
            }}
            className="max-w-[300px]"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 9.25,
            }}
            className="max-w-[300px]"
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
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text h3 className="mt-20">
            My digital signature
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Snippet
            symbol=""
            text={"1D6AA03AFB0BFB9A38D9D0BC5EE05F6C1C82CE5F"}
            width="250px"
          />
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Collapse.Group>
            <Collapse title="Steps to verify">
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
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
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <Text h4>1. Add my key to your keyring</Text>
                My{" "}
                <Link
                  color
                  underline
                  href="https://en.wikipedia.org/wiki/Public-key_cryptography"
                  target="blank"
                >
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
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <Text h4>2. Verify a message/document</Text>
                To verify a document (e.g <Code>example.txt</Code>) run the
                following command
                <br />
                <br />
                <Snippet>gpg --verify example.txt</Snippet>
              </motion.div>
            </Collapse>
          </Collapse.Group>
        </motion.div>
        <motion.div
          className="mt-[100px] flex justify-center align-center"
          style={{ color: palette.accents_5 }}
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: "white" }}>
            <CodeIcon size={16} />
          </span>
          &nbsp;with &nbsp;
          <span style={{ color: palette.magenta }}>
            <HeartFillIcon size={16} />
          </span>
          &nbsp; by @manuanish
        </motion.div>
      </div>
    </div>
  );
}
