import React from "react";
import { Container, Border, Content } from "./Divider.styled";

export function Divider({ children, noBorder }) {
  return (
    <Container>
      <Border noBorder={noBorder}>
        <Content>{children}</Content>
      </Border>
    </Container>
  );
}
