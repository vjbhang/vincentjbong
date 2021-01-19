import React from "react";

// styled
import { Container, ScrollContainer, Oval, ScrollLine } from "./Icons.styled";

// Icons
import { VscClose } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";

// CSS & Styles
import "./Icons.css";
import styles from "./Styles";

export function Icons() {
  return <Container>Icons</Container>;
}

export function Close({ onClick, size, title, style }) {
  return (
    <VscClose
      onClick={onClick}
      size={size}
      title={title}
      style={style}
      className="cursorHover"
    />
  );
}

export function HamburgerIcon({ onClick, size, title, style }) {
  return (
    <BiMenu
      onClick={onClick}
      size={size}
      title={title}
      style={{ ...styles.centerInsideGrouping, ...style }}
    />
  );
}

export function ScrollIcon({ onClick, size, title, style }) {
  return (
    <ScrollContainer onClick={onClick}>
      <Oval>
        <ScrollLine />
      </Oval>
    </ScrollContainer>
  );
}
