import React, { useState } from "react";
import { Container } from "./Dimmer.styled";
import { DimmedContainerStyle, UndimmedContainerStyle } from "./Styles";

// Atoms & Molecules
import Grouping from "../../Atoms/Grouping";

export function Dimmer({ toggle }) {
  if (toggle) {
    return <Grouping inputStyle={DimmedContainerStyle} />;
  } else return <Grouping inputStyle={UndimmedContainerStyle} />;
}
