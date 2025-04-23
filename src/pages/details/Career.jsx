import React from "react";
import { ComintCareer } from "./careers/ComintCareer";
import { BrickstreamCareer } from "./careers/BrickstreamCareer";
import { CareerSection } from "./careers/styles";

export default function Career() {
  return (
    <CareerSection>
      <BrickstreamCareer />
      <ComintCareer />
    </CareerSection>
  );
}
