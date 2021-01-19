import React, { useState } from "react";
import { Container } from "./HamburgerMenu.styled";

// Atoms & Molecules
import SideMenu from "../../Molecules/Side-Menu";
import Grouping from "../../Atoms/Grouping";
import ShelfButton from "../../Molecules/Shelf-button";

// Tailored Components
import ShelfContainer from "./Components/ShelfContainer";

// Styles
import {
  BigButtonsContainer,
  BigButtonContainer,
  SmallButtonsContainer,
  BigButtonContainerA,
  InnerSmallButtonsContainerA,
  InnerSmallButtonContainer,
} from "./Styles";

// styled-components
import { Link, LinkContainer } from "./HamburgerMenu.styled";

export function HamburgerMenu({ close, isMenuOpen }) {
  const [rowSelection, setRowSelection] = useState("");

  function selectRow(row) {
    if (rowSelection === row) {
      setRowSelection("");
    } else setRowSelection(row);
  }

  return (
    <SideMenu close={close} isMenuOpen={isMenuOpen} type="mainMenu">
      <Grouping inputStyle={BigButtonsContainer}>
        <Grouping
          onClick={() => selectRow("row1")}
          inputStyle={BigButtonContainer}
        >
          <LinkContainer>
            <Link size={"54px"}>About</Link>
          </LinkContainer>
          <ShelfButton rowIs={"row1"} isSelection={rowSelection} />
        </Grouping>
        <Grouping
          onClick={() => selectRow("row2")}
          inputStyle={BigButtonContainer}
        >
          <LinkContainer>
            <Link size={"54px"}>Work</Link>
          </LinkContainer>
          <ShelfButton rowIs={"row2"} isSelection={rowSelection} />
        </Grouping>
        <Grouping
          onClick={() => selectRow("row3")}
          inputStyle={BigButtonContainer}
        >
          <LinkContainer>
            <Link size={"54px"}>News</Link>
          </LinkContainer>
          <ShelfButton rowIs={"row3"} isSelection={rowSelection} />
        </Grouping>
      </Grouping>
      <Grouping inputStyle={SmallButtonsContainer}>
        <ShelfContainer
          rowIs={"row1"}
          isSelection={rowSelection}
          innerLinks={["Company", "", "", ""]}
        />
        <ShelfContainer
          rowIs={"row2"}
          isSelection={rowSelection}
          innerLinks={["R&D", "Press", "Cooperation", "Partners"]}
        />
        <ShelfContainer
          rowIs={"row3"}
          isSelection={rowSelection}
          innerLinks={["Event", "Press", "", ""]}
        />
      </Grouping>
    </SideMenu>
  );
}
