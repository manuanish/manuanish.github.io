import Image from "next/image";
import Link from "next/link";
import {
  Text,
} from "@geist-ui/core";

export default function Author(props) {
  return (
    <div className="flex gap-1">
      <Text className="text-lg" type="secondary">Written by&nbsp;</Text>
      {props.contributors.map((userName) => (
        <div
          className="cursor-pointer rounded-full border-2 w-[30px] h-[30px] mt-[16px] border-slate-500 hover:border-slate-400"
          key={userName}
        >
          <Link href={`https://github.com/${userName}`} passHref>
            <Image
              alt={userName}
              width="30"
              height="30"
              className="rounded-full"
              src={`https://github.com/${userName}.png`}
            />
          </Link>
        </div>
      ))}
      &nbsp;
      <Text className="text-lg" type="secondary">
        &#8212;&nbsp; {props.readTime} min read
      </Text>
    </div>
  );
}
