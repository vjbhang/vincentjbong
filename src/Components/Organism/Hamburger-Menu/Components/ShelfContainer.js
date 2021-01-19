import React from "react";

// Atoms
import Grouping from "../../../Atoms/Grouping";

// styles
import {
  BigButtonsContainer,
  SmallButtonsContainer,
  BigButtonContainerA,
  BigButtonContainerB,
  InnerSmallButtonsContainer,
  InnerSmallButtonContainer,
  OpenShelf,
  ClosedShelf,
} from "../Styles";

// styled-components
import { Link } from "../HamburgerMenu.styled";

export function ShelfContainer({ rowIs, isSelection, innerLinks }) {
  const shelves = innerLinks.map((link, index) => {
    return (
      <Grouping key={link + index} inputStyle={InnerSmallButtonContainer}>
        <Link marginTop={"35px"}>{link}</Link>
      </Grouping>
    );
  });

  if (rowIs == isSelection) {
    return (
      <Grouping inputStyle={BigButtonContainerA}>
        <Grouping inputStyle={InnerSmallButtonsContainer}>{shelves}</Grouping>
        <Grouping inputStyle={OpenShelf} />
      </Grouping>
    );
  } else
    return (
      <Grouping inputStyle={BigButtonContainerA}>
        <Grouping inputStyle={InnerSmallButtonsContainer}>{shelves}</Grouping>
        <Grouping inputStyle={ClosedShelf} />
      </Grouping>
    );
}

export default ShelfContainer;
