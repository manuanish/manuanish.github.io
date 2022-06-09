import { Text } from "@geist-ui/core";

export default function BlogTitle(props) {
  return (
    <Text h1 className="lg:text-5xl md:text-4xl text-3xl">
      {props.children}
    </Text>
  );
}
