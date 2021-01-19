import React, { useState } from "react";
import { Container } from "./ListOfButtons.styled";

// Atoms & Molecules
import Divider from "../../Atoms/Divider";
import Button from "../../Atoms/Button";

export function ListOfButtons(labels) {
  // labels is array of strings
  const [isShown, setIsShown] = useState(null); // The current hovered language

  let ListOfButtons = labels.map((label, index) => {
    if (index + 1 === labels.length) {
      return (
        <Divider key={`${label}-${index}`} noBorder={true}>
          <Button
            isShown={isShown}
            buttonName={label}
            type="language"
            onMouseEnter={() => setIsShown(`${label}`)}
            onMouseLeave={() => setIsShown(null)}
          />
        </Divider>
      );
    } else {
      return (
        <Divider key={`${label}-${index}`}>
          <Button
            isShown={isShown}
            buttonName={label}
            type="language"
            onMouseEnter={() => setIsShown(`${label}`)}
            onMouseLeave={() => setIsShown(null)}
          />
        </Divider>
      );
    }
  });

  return ListOfButtons;
}
