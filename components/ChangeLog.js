import { motion } from "framer-motion";
import { Text, Code } from "@geist-ui/core";
import Twemoji from "@components/Twemoji";
import Checkbox from "@components/Checkbox";

export default function ChangeLog() {
  return (
    <div className="mt-20 mb-20">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Text h3>Roadmap</Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <div className="grow w-full"></div>
        <div className="grow w-full flex mr-[20px]">
          <div className="flex items-center max-w-[300px]">
            <Checkbox checked />
            &nbsp;&nbsp;
            <Text type="secondary">
              Make<Code>/blog</Code> dynamic!
            </Text>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="h-[40px] w-[5px] bg-[#eaeaea] rounded-full"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center flex-reverse items-center"
      >
        <div className="grow w-full flex ml-[20px]">
          <div className="">
            <Checkbox checked />
            &nbsp;&nbsp;
            <Text type="secondary">
              Make<Code>/blog</Code> dynamic!
            </Text>
          </div>
        </div>
        <div className="grow w-full"></div>
      </motion.div>
    </div>
  );
}
