import { CheckCircleIcon, CheckCircleFillIcon } from "@primer/octicons-react";
import * as React from "react";

export default function Checkbox(props) {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

  return (
    <div>
      {props.checked ? (
        <CheckCircleFillIcon size={20} className="text-[#3291ff]" />
      ) : (
        <CheckCircleIcon
          size={20}
          className={`${theme == "dark" ? "text-[#444444]" : "text-[#999999]"}`}
        />
      )}
    </div>
  );
}
