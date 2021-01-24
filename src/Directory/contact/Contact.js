import React from "react";
import { Container, ContactWrapper } from "./Contact.styled";

export function Contact() {
  return (
    <Container>
      <ContactWrapper>
        <h3 className="text">E-mail: bhangjiwon@pm.me</h3>
        <p className="text">
          <i>Please feel free to contact me.</i>
        </p>
      </ContactWrapper>
    </Container>
  );
}
