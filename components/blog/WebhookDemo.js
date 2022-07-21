import {
  Card,
  Input,
  Description,
  Text,
  Divider,
  Image,
  Button,
} from "@geist-ui/core";
import * as React from "react";

export default function WebhookDemo() {
  const [webhookURL, setWebhookURL] = React.useState("");
  const [avatarURL, setAvatarURL] = React.useState(
    "https://singlecolorimage.com/get/4f545c/400x400"
  );
  const [messageContent, setMessageContent] = React.useState("");
  const [usernameContent, setUsernameContent] = React.useState("");
  const [time, setTime] = React.useState("Today at");

  React.useState(() => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime("Today at " + strTime);
  });

  const handleWebhookChange = (event) => {
    setWebhookURL(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessageContent(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsernameContent(event.target.value);
  };
  const handleAvatarChange = (event) => {
    setAvatarURL(event.target.value);
    if (event.target.value == "") {
      setAvatarURL("https://singlecolorimage.com/get/4f545c/400x400");
    }
  };

  const handleFormSubmit = (event) => {
    try {
      fetch(webhookURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: messageContent,
          avatar_url: avatarURL,
          username: usernameContent,
        }),
      });
    } catch {
      alert("invalid URl");
    }
  };

  return (
    <div>
      <div className="flex gap-5 justify-center flex-wrap">
        <Input
          value={webhookURL}
          onChange={handleWebhookChange}
          placeholder="Webhook URL"
        />
        <Input
          value={messageContent}
          onChange={handleMessageChange}
          placeholder="Message"
        />
        <Input
          value={usernameContent}
          onChange={handleUsernameChange}
          placeholder="Username (optional)"
        />
        <Input
          onChange={handleAvatarChange}
          placeholder="Avatar URL (optional)"
        />
      </div>
      <br />
      <Divider>
        <Text type="secondary">Preview</Text>
      </Divider>
      <br />
      <div className="flex-col w-full h-[96px] bg-[#36393f] rounded-md">
        <div className="flex-col w-full h-[24px]"></div>
        <div className="flex items-center w-full h-[48px] pl-[24px]">
          <div className="pr-[16px]">
            <Image
              src={avatarURL}
              width="40px"
              height="40px"
              style={{ border: "none", borderRadius: "100%" }}
            />
          </div>
          <div className="flex flex-col h-[48px] grow">
            <div className="w-fit flex items-center">
              <span
                className="top-0"
                style={{ fonstSize: "16px", color: "#FFFFFF", fontWeight: 600 }}
              >
                {usernameContent}
              </span>
              &nbsp;
              <span
                style={{
                  fontSize: "0.625rem",
                  backgroundColor: "#5865F2",
                  color: "white",
                  padding: "0.25rem",
                  paddingTop: "0.1rem",
                  paddingBottom: "0.1rem",
                  borderRadius: "5px",
                }}
              >
                BOT
              </span>
              &nbsp;&nbsp;
              <span
                style={{ fontSize: "12px", color: "#a3a6aa", fontWeight: 400 }}
              >
                {time}
              </span>
            </div>
            <div className="grow text-[#dcddde]">{messageContent}</div>
          </div>
        </div>
        <div className="flex-col w-full h-[24px]"></div>
      </div>
      <br />
      <div>
        <Button type="success" ghost onClick={handleFormSubmit}>
          Send!
        </Button>
      </div>
    </div>
  );
}
