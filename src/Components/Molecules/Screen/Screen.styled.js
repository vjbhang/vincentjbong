import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.inputBGColor || "rgba(0, 0, 0, 0)"};
  overflow-x: hidden;
`;
