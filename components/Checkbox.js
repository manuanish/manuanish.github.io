import { CheckCircleIcon, CheckCircleFillIcon } from "@primer/octicons-react";

export default function Checkbox(props) {
  return (
    <div>
      {props.checked ? (
        <CheckCircleFillIcon size={20} className="text-[#3291ff]" />
      ) : (
        <CheckCircleIcon size={20} />
      )}
    </div>
  );
}
