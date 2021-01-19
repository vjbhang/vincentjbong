import React from "react";
import { Container } from "./Grouping.styled";

export function Grouping({ inputStyle, children, expanded, onClick }) {
  return (
    <Container
      inputBackgroundColor={inputStyle.backgroundColor}
      inputHeight={inputStyle.height}
      inputWidth={inputStyle.width}
      inputMinWidth={inputStyle.minWidth}
      inputPosition={inputStyle.position}
      inputTop={inputStyle.top}
      inputLeft={inputStyle.left}
      inputRight={inputStyle.right}
      inputMargin={inputStyle.margin}
      inputDisplay={inputStyle.display}
      inputFlexDir={inputStyle.flexDirection}
      inputJustifyContent={inputStyle.justifyContent}
      inputMarginTop={inputStyle.marginTop}
      inputMarginBottom={inputStyle.marginBottom}
      inputBoxShadow={inputStyle.boxShadow}
      inputAnimationType={inputStyle.animationType}
      inputAnimationDuration={inputStyle.animationDuration}
      inputAnimationTiming={inputStyle.animationTiming}
      inputAnimationCount={inputStyle.animationCount}
      inputZIndex={inputStyle.zIndex}
      inputOpacity={inputStyle.opacity}
      inputTransitionProperty={inputStyle.transitionProperty}
      inputTransitionDuration={inputStyle.transitionDuration}
      inputTransitionTiming={inputStyle.transitionTiming}
      inputTransform={inputStyle.transform}
      inputPointerEvents={inputStyle.pointerEvents}
      expanded={expanded}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
