import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  height: ${props => props.isMobile ? "initial" : props.height};
  width: ${props => props.isMobile ? "100%" : "50%"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: ${props => props.isMobile ? "column" : "row"};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: ${props => props.isMobile ? "8px 0px" : "0px 8px"};
  border-radius: 16px;
  width: ${(props) => props.isMobile ? "86%" : props.width || "initial"};
  background-color: ${(props) => props.color || "#2d2d2d"};
  order: ${props => props.isMobile ? props.order === 1 ? 1 : 2 : "initial"};
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
