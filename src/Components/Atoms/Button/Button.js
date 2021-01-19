import React from "react";
import {
  Container,
  Default,
  ModalButton,
  LanguageButton,
} from "./Button.styled";

export function Button({
  buttonName,
  type,
  inputStyle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isShown,
}) {
  // types are listed below.

  let buttonType = (type) => {
    // returns a particular button type to be rendered.
    if (type === "modal") {
      return (
        <ModalButton
          inputBackgroundColor={inputStyle.backgroundColor}
          inputColor={inputStyle.color}
          inputBorderWidth={inputStyle.borderWidth}
          onClick={onClick}
        >
          {buttonName}
        </ModalButton>
      );
    }
    if (type === "language") {
      return (
        <LanguageButton
          isShown={isShown}
          buttonName={buttonName}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={buttonName}
        >
          {buttonName}
        </LanguageButton>
      );
    } else {
      return <Default>{buttonName}</Default>;
    }
  };

  return <Container>{buttonType(type)}</Container>;
}

// types of buttons style index below:
