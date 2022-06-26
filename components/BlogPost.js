import { Card, Link, Text } from "@geist-ui/core";
import Tags from "@components/Tags";

export default function BlogPost(props) {
  return (
    <Card width="100%">
      <div className="flex justify-start">
        <Tags
          radius
          scale={0.5}
          tags={[
            props.tag1,
            props.tag2,
            props.tag3,
            props.tag4,
            props.tag5,
            props.tag6,
            props.tag7,
          ]}
        />
      </div>
      <div className="mt-2"></div>
      <Text h4 my={0} className="flex">
        {props.title}
      </Text>
      <Text my={0} className="flex" type="secondary" font="12px">
        Posted at: {props.date}
      </Text>
      <Text>{props.description}</Text>
      <Card.Footer>
        <Link block icon target="_blank" href={`/blog/${props.href}`}>
          Read more!
        </Link>
      </Card.Footer>
    </Card>
  );
}
