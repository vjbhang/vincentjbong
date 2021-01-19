import React from "react";

// Atoms & Molecules
import Grouping from "../../Atoms/Grouping";
import { Close } from "../../Atoms/Icons";

//Styles
import {
  DefaultContainerStyle,
  LanguageMenuContainerStyle,
  MainMenuContainerStyle,
  InnerContainerStyle,
  CloseIconContainerStyle,
} from "./Styles";

export function SideMenu({ isMenuOpen, close, children, type }) {
  function ContainerStyleType() {
    if (type === "languageMenu") {
      return LanguageMenuContainerStyle;
    }
    if (type === "mainMenu") {
      return MainMenuContainerStyle;
    } else return DefaultContainerStyle;
  }

  function CloseIconVisibility() {
    if (type === "mainMenu") {
      return null;
    } else {
      return (
        <Close
          onClick={close}
          size="2.5em"
          title="Close"
          style={CloseIconContainerStyle}
        />
      );
    }
  }

  if (isMenuOpen) {
    return (
      <Grouping expanded inputStyle={ContainerStyleType()}>
        {CloseIconVisibility()}
        <Grouping inputStyle={InnerContainerStyle}>{children}</Grouping>
      </Grouping>
    );
  } else
    return (
      <Grouping inputStyle={ContainerStyleType()}>
        {CloseIconVisibility()}
        <Grouping inputStyle={InnerContainerStyle}>{children}</Grouping>
      </Grouping>
    );
}
