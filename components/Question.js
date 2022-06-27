import { Card, User, Text } from "@geist-ui/core";

export default function Question(props) {
  return (
    <div className="mb-5">
      <Card>
        <div className="flex items-center h-full flex-wrap">
          <User
            src={`https://avatars.dicebear.com/api/micah/${props.username}.svg`}
            name={props.username}
          >
            {props.date}
          </User>
          &nbsp;<Text>{props.content}</Text>
        </div>
      </Card>
      {props.answerVisible == "true" ? (
        <div className={`ml-20 mb-10 mt-5`}>
          <Card>
            <div className="flex items-center h-full flex-wrap">
              <User
                src={`https://github.com/manuanish.png`}
                name={"Manu Anish"}
              >
                {props.answerDate}
              </User>
              &nbsp;<Text>{props.answerContent}</Text>
            </div>
          </Card>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
