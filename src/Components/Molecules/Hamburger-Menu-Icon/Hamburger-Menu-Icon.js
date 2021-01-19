import React, { useState } from "react";
import { Container } from "./Hamburger-Menu.styled";

// Atoms & Molecules
import { HamburgerIcon } from "../../Atoms/Icons";
import Grouping from "../../Atoms/Grouping";

export function HamburgerMenuIcon({ onClick }) {
  return (
    <Grouping inputStyle={{ top: "4%", right: "2%", zIndex: 100 }}>
      <HamburgerIcon
        size={64}
        title="HamburgerMenu"
        style={{ color: "white" }}
        onClick={onClick}
      />
    </Grouping>
  );
}
