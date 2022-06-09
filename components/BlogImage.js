import Image from "next/image";
import { Text } from "@geist-ui/core";

export default function BlogImage(props) {
  return (
    <div className="flex justify-center">
      <div className="">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          quality={100}
          placeholder={"blur"}
          blurDataURL
          style={{ borderRadius: 10 }}
        />
        <Text className="mt-5" type="secondary">
          {props.caption}
        </Text>
      </div>
    </div>
  );
}
