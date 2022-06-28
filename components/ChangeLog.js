import { motion } from "framer-motion";
import { Text, Code } from "@geist-ui/core";
import Twemoji from "@components/Twemoji";
import Checkbox from "@components/Checkbox";
import * as React from "react";
import { PlusCircleIcon } from "@primer/octicons-react";

export default function ChangeLog() {
  const [theme, setTheme] = React.useState("dark");
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

  return (
    <div className="mt-[300px] mb-20">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Text h3>Roadmap</Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`h-[20px] w-[2px] bg-gradient-to-t ${
          theme == "dark"
            ? "from-[#333333] to-[#000000]"
            : "from-[#EAEAEA] to-[#FFFFFF]"
        } ml-[8px]`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="grow w-full"></div>
        <div className="grow w-full flex mr-[20px]">
          <div className="flex items-baseline gap-2 max-w-[300px]">
            <div className="flex-col justify-center items-stretch">
              <div
                className={`h-[18px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
              <div>
                <Checkbox checked />
              </div>
              <div
                className={`h-[20px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
            </div>
            <div className="self-start top-0">
              <Text type="secondary max-w-[300px]">
                Make <Code>/blog</Code> dynamic!
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`h-[20px] w-[2px] ${
          theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
        } ml-[8px]`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="grow w-full"></div>
        <div className="grow w-full flex mr-[20px]">
          <div className="flex items-baseline gap-2 max-w-[300px]">
            <div className="flex-col justify-center items-stretch">
              <div
                className={`h-[18px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
              <div>
                <Checkbox checked />
              </div>
              <div
                className={`h-[50px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
            </div>
            <div className="self-start top-0">
              <Text type="secondary max-w-[300px]">
                Write a blog post about dynamic URLs.
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`h-[20px] w-[2px] ${
          theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
        } ml-[8px]`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="grow w-full"></div>
        <div className="grow w-full flex mr-[20px]">
          <div className="flex items-baseline gap-2 max-w-[300px]">
            <div className="flex-col justify-center items-stretch">
              <div
                className={`h-[18px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
              <div>
                <Checkbox />
              </div>
              <div
                className={`h-[50px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
            </div>
            <div className="self-start top-0">
              <Text type="secondary max-w-[300px]">
                Organize files in <Code>/public/blog</Code> according to post.
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`h-[20px] w-[2px] ${
          theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
        } ml-[8px]`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="grow w-full"></div>
        <div className="grow w-full flex mr-[20px]">
          <div className="flex items-baseline gap-2 max-w-[300px]">
            <div className="flex-col justify-center items-stretch">
              <div
                className={`h-[18px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
              <div>
                <Checkbox />
              </div>
              <div
                className={`h-[18px] w-[2px] ${
                  theme == "dark" ? "bg-[#333333]" : "bg-[#EAEAEA]"
                } ml-[8px]`}
              ></div>
              <div className="h-fit w-[6px]"></div>
            </div>
            <div className="self-start top-0">
              <Text type="secondary max-w-[300px]">
                <Code>/ama</Code> database connections.
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`h-[20px] w-[2px] bg-gradient-to-b ${
          theme == "dark"
            ? "from-[#333333] to-[#000000]"
            : "from-[#EAEAEA] to-[#FFFFFF]"
        } ml-[8px]`}
      ></motion.div>
    </div>
  );
}
