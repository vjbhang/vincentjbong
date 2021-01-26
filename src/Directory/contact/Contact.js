import React from "react";
import { Container, ContactWrapper } from "./Contact.styled";
import { useMediaQuery } from "react-responsive";

export function Contact() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <Container>
      <ContactWrapper isMobile={isTabletOrMobileDevice}>
        <h3 className="text">E-mail: bhangjiwon@pm.me</h3>
        <h3 className="text"><a href="https://github.com/vjbhang">https://github.com/vjbhang</a></h3>
        <p className="text">
          <i>Please feel free to contact me.</i>
        </p>
      </ContactWrapper>
    </Container>
  );
}
