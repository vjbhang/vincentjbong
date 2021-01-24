import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  height: ${(props) => props.height || "initial"};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 8px;
  border-radius: 16px;
  width: ${(props) => props.width || "initial"};
  background-color: ${(props) => props.color || "#2d2d2d"};
`;

export const Title = styled.h3`
  color: #569cd6;
  text-align: center;
  margin-block-end: 0em;
`;

export const Point = styled.p`
  color: #8cdcda;
  margin-left: 6px;
`;
