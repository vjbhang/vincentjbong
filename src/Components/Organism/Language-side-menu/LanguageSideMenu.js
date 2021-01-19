import React from "react";

// Atoms & Molecules
import SideMenu from "../../Molecules/Side-Menu";
import ListOfButtons from "../../Molecules/List-of-Buttons";

export function LanguageSideMenu({ isMenuOpen, close }) {
  let languages = [
    "한국어",
    "English",
    "中国",
    "にほんご",
    "Español",
    "Português",
    "Italiano",
    "Français",
    "Deutsch",
    "русский",
    "Türk",
    "العربية",
  ];

  const LanguageButtons = ListOfButtons(languages);

  return (
    <SideMenu isMenuOpen={isMenuOpen} close={close} type="languageMenu">
      {LanguageButtons}
    </SideMenu>
  );
}
