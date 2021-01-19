import styled, { css, keyframes } from "styled-components";

const slideRight = keyframes`
  0% { left: -15vw;}
  100% { left: 0%;}
`;

const slideLeft = keyframes`
  0% { right: -100vw;}
  100% { right: 0%;}
`;

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.5; }
`;

const animation = (props) =>
  css`
    ${props.inputAnimationType === "languageMenu"
      ? slideRight
      : props.inputAnimationType === "mainMenu"
      ? slideLeft
      : props.inputAnimationType === "fade"
      ? fade
      : "none"}
    ${props.inputAnimationDuration || "none"} 
    ${props.inputAnimationTiming || "none "} 
    ${props.inputAnimationCount || "none"};
  `;

export const Container = styled.div`
  position: ${(props) => props.inputPosition || "absolute"};
  height: ${(props) => props.inputHeight || "10vh"};
  width: ${(props) => props.inputWidth || "10vw"};
  top: ${(props) => props.inputTop || "initial"};
  left: ${(props) => props.inputLeft || "initial"};
  right: ${(props) => props.inputRight || "initial"};
  background-color: ${(props) =>
    props.inputBackgroundColor || "rgba(0, 0, 0, 0)"};
  justify-content: ${(props) => props.inputJustifyContent || "center"};
  align-items: ${(props) => props.inputAlignItems || "center"};
  z-index: ${(props) => props.inputZIndex || 10};
  min-width: ${(props) => props.inputMinWidth || "165px"};
  margin: ${(props) => props.inputMargin || "initial"};
  display: ${(props) => props.inputDisplay || "block"};
  flex-direction: ${(props) => props.inputFlexDir || "none"};
  margin-top: ${(props) => props.inputMarginTop || "0px"};
  margin-bottom: ${(props) => props.inputMarginBottom || "0px"};
  box-shadow: ${(props) => props.inputBoxShadow || "none"};
  opacity: ${(props) => props.inputOpacity || "none"};
  animation: ${animation};
  animation-fill-mode: both;
  transition-property: ${(props) => props.inputTransitionProperty || "none"};
  transition-duration: ${(props) => props.inputTransitionDuration || "none"};
  transition-timing: ${(props) => props.inputTransitionTiming || "none"};
  transform: ${(props) => props.inputTransform || "none"};
  pointer-events: ${(props) => props.inputPointerEvents || "initial"};

  ${(props) =>
    props.expanded &&
    css`
      transform: translate(0%);
    `};
`;
