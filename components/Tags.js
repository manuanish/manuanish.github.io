import {Tag} from "@geist-ui/core";

export default function Tags(props){
  return(
    <div className="flex gap-2">
      {
        props.tags.map((tag) =>
          <Tag type="success" invert>{tag}</Tag>
        )
      }
    </div>
  );
}
