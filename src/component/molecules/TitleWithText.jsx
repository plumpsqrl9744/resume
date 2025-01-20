import React from "react";
import Title from "../atom/Title";
import Text from "../atom/Text";

export default function TitleWithText({ title, content, href }) {
  return (
    <>
      <Title margin={"10px"}>{title}</Title>
      <Text size="2xl" href={href}>
        {content}
      </Text>
    </>
  );
}
