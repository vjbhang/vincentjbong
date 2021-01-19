import React, { useState } from "react";
import {
  ShelfButtonContainer,
  HorizontalLine,
  VerticalLine,
  ShelfButtonInnerContainer,
} from "./ShelfButton.styled";

// Atoms
import Grouping from "../../Atoms/Grouping";

export function ShelfButton({ rowIs, isSelection }) {
  return (
    <ShelfButtonContainer>
      <ShelfButtonInnerContainer>
        <HorizontalLine />
        <VerticalLine rotate={rowIs == isSelection} />
      </ShelfButtonInnerContainer>
    </ShelfButtonContainer>
  );
}
