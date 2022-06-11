import { Heading } from "./Loading.styled";

const Loading = ({ variant }) => {
  let content = "Loading...";

  if (variant === "GPS") {
    content = "Getting your city...";
  }
  return <Heading bgColor="#df185a">{content}</Heading>;
};

export default Loading;
