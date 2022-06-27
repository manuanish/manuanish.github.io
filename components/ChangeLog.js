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
          <div className="flex items-baseline gap-2 max-w-[300px]">
            <div className="flex-col justify-center items-stretch mt-[18px]">
              <div>
                <Checkbox checked />
              </div>
              <div className="h-fit w-[6px] bg-red-500"></div>
            </div>
            <div className="self-start top-0">
              <Text type="secondary max-w-[300px]">
                Make<Code>/blog</Code> dynamic! and some more stuff I would like
                to add.
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
