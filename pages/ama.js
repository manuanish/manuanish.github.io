import Header from "@components/Header";
import PageTitle from "@components/PageTitle";
import Question from "@components/Question";
import { Text, Input, Button, Textarea, Divider } from "@geist-ui/core";
import { SyncIcon } from "@primer/octicons-react";
import ReCAPTCHA from "react-google-recaptcha";
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
import * as React from "react";
import { useRouter } from "next/router";

export default function AMA() {
  const router = useRouter();
  const [username, setUsername] = React.useState("username");
  const [hasFetchedUsername, setHadFetchedUsername] = React.useState(false);
  const [formValue, setFormValue] = React.useState("");
  const [textType, setTextType] = React.useState("secondary");
  const [captchaError, setCaptchaError] = React.useState("");
  const [captchaValue, setCaptchaValue] = React.useState(null);
  const [formError, setFormError] = React.useState("");
  const [formBorderError, setFormBorderError] = React.useState("default");
  const [date, setDate] = React.useState("");
  const [theme, setTheme] = React.useState("dark");
  const [hasFetchedResponses, setHadFetchedResponses] = React.useState(false);
  const [responseData, setResponseData] = React.useState();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    async function fetchUsername() {
      if (hasFetchedUsername == false) {
        fetch("https://randomuser.me/api/")
          .then((res) => res.json())
          .then((json) => {
            setUsername(json.results[0].login.username);
          });
        setHadFetchedUsername(true);
      }
    }

    async function fetchResponses() {
      if (hasFetchedResponses == false) {
        const { data, error } = await supabase.from("ama").select();
        setResponseData(data);
        setHadFetchedResponses(true);
      }
    }

    var today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    today = dd + "/" + mm + "/" + yyyy;
    setDate(today);

    fetchUsername();
    fetchResponses();
  });

  const handleButtonClick = async (event) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setUsername(json.results[0].login.username);
      });
  };

  const handleFormChange = async (event) => {
    setFormValue(event.target.value);

    if (formValue.length <= 100) {
      setTextType("secondary");
    } else if (formValue.length >= 101 && formValue.length <= 149) {
      setTextType("warning");
    } else if (formValue.length >= 150) {
      setTextType("error");
    }

    setFormError("");
    setCaptchaError("");
    setFormBorderError("default");
  };

  function onCaptchaChange(value) {
    setCaptchaValue(value);
    setCaptchaError("");
  }

  const handleFormSubmit = async (event) => {
    await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "<@540788581208424458>",
        avatar_url:
          "https://avatars.dicebear.com/api/micah/" + username + ".png",
        username: username,
      }),
    });
    fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:
          formValue +
          " ```captchaValue: " +
          captchaValue +
          ",\nmessageLength: " +
          formValue.length +
          "\n```",
        avatar_url:
          "https://avatars.dicebear.com/api/micah/" + username + ".png",
        username: username,
      }),
    });

    if (formValue.length <= 0) {
      setFormError("This field cannot be empty!");
      setFormBorderError("error");
    } else {
      if (captchaValue == null) {
        setCaptchaError("Please complete the ReCAPTCHA!");
      } else {
        if (formValue.length >= 150) {
          setFormError("Your message is too long!");
          setFormBorderError("error");
        } else {
          const now = new Date();
          const { data, error } = await supabase.from("ama").insert([
            {
              content: formValue,
              username: username,
              date: date,
              answerVisible: false,
              answerDate: "",
              answerContent: "",
              timeStamp: now,
            },
          ]);

          setFormValue("");
          window.location.reload();
        }
      }
    }
  };

  return (
    <div>
      <PageTitle title="manuanish | Ask me anything!" />
      <Header dir={["ama"]} />
      <br />
      <br />
      <Text h4 style={{ padding: 0, margin: 0 }}>
        Ask me anything!
      </Text>
      <Text style={{ padding: 0, margin: 0 }} type="secondary">
        I&apos;ll try to respond to your questions as soon as I can. Thanks!
      </Text>
      <br />
      <div className="flex items-center gap-2">
        Username:
        <Input readOnly initialValue={username} />
        <Button
          auto
          type="success"
          scale={2 / 3}
          onClick={handleButtonClick}
          style={{ display: "flex", alignItems: "center" }}
          icon={<SyncIcon size={16} />}
        />
      </div>
      <br />
      <Textarea
        type={formBorderError}
        placeholder="Ask away!"
        width="100%"
        onChange={handleFormChange}
        value={formValue}
      />
      <div className="flex items-center">
        <div className="grow">
          <Text font="12px" type="error">
            {formError}
          </Text>
        </div>
        <div>
          <Text font="12px" type={textType}>
            {formValue.length}/150
          </Text>
        </div>
      </div>
      <Text h5>Preview</Text>
      <Question
        content={formValue}
        username={username}
        date={date}
        type="question"
        answerVisible={false}
      />
      <br />
      {theme == "dark" ? (
        <ReCAPTCHA
          sitekey="6LfdxqQgAAAAADafoUVGENbiMZEEfmQucMxLZfo1"
          onChange={onCaptchaChange}
          theme="dark"
        />
      ) : (
        <ReCAPTCHA
          sitekey="6LfdxqQgAAAAADafoUVGENbiMZEEfmQucMxLZfo1"
          onChange={onCaptchaChange}
        />
      )}
      <Text style={{ margin: 0, padding: 0 }} font="12px" type="error">
        {captchaError}
      </Text>
      <br />
      <Button type="success" onClick={handleFormSubmit}>
        Submit
      </Button>
      <br />
      <br />
      <Divider />
      <br />
      <Text h3>Questions</Text>
      {responseData ? (
        responseData.map((resp) => (
          <Question
            key={resp.id}
            content={resp.content}
            username={resp.username}
            date={resp.date}
            answerVisible={resp.answerVisible}
            answerDate={resp.answerDate}
            answerContent={resp.answerContent}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
