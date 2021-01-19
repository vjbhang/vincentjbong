import styled from "styled-components";

export const ShelfButtonContainer = styled.div`
  display: flex;
  margin-left: 5%;
  justify-content: center;
`;

export const ShelfButtonInnerContainer = styled.div`
  position: relative;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 7px;
  width: 16px;
  height: 2px;
  background-color: white;
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 7px;
  width: 2px;
  height: 16px;
  background-color: white;
  transform: ${(props) => (props.rotate ? "rotate(90deg)" : "rotate(0deg)")};
  transition-property: transform;
  transition-duration: 0.05s;
  transition-timing-function: linear;
`;
