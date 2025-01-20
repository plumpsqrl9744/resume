import React from "react";
import styled from "styled-components";

export default function UndderDot() {
  return <Dot></Dot>;
}

const Dot = styled.div`
  border: 4.5px solid var(--primary-color);
  width: 2.25px;
  height: 2.25px;
  margin-bottom: 10px;
`;
