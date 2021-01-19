import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const ScrollContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -5%);
  top: 87%;
  left: 50%;
`;

export const Oval = styled.div`
  display: flex;
  height: 38px;
  width: 24px;
  border-radius: 24px;
  background-color: transparent;
  border-right: 2px white solid;
  border-left: 2px white solid;
  border-top: 2px white solid;
  border-bottom: 2px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollFadeOut = keyframes`
  from {opacity: 1; bottom: 5px;}
  to { opacity: 0; bottom: 0px;}
`;

export const ScrollLine = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 2px;
  background-color: white;
  animation-name: ${ScrollFadeOut};
  animation-play-state: running;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
`;
