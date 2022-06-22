import { Tag } from "@geist-ui/core";

export default function Tags(props) {
  return (
    <div className="flex gap-2">
      {props.tags.map((tag) => (
        tag == "none" ? <div></div> :
        <Tag type="success" invert key={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}
