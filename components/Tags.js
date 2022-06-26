import { Tag } from "@geist-ui/core";

export default function Tags(props) {
  return (
    <div className="flex gap-2">
      {props.tags.map((tag) =>
        tag == "none" || tag == undefined ? (
          <span></span>
        ) : (
          <Tag scale={props.scale ? props.scale : 1} type="success" invert key={tag} style={{borderRadius: props.radius ? '20px' : ''}}>
            {tag}
          </Tag>
        )
      )}
    </div>
  );
}
