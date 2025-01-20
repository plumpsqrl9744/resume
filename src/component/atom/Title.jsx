import React from "react";

import Text from "./Text";

export default function Title({ children, margin = "0px" }) {
  return (
    <Text size="3xl" bold={true} isTitle={true} margin={margin}>
      {children}
    </Text>
  );
}
