import { Tag } from "@geist-ui/core";

export default function Tags(props) {
  return (
    <div className="flex gap-2">
      {props.tags.map((tag) =>
        tag == "none" || tag == undefined ? (
          <span></span>
        ) : (
          <Tag type="success" invert key={tag}>
            {tag}
          </Tag>
        )
      )}
    </div>
  );
}
