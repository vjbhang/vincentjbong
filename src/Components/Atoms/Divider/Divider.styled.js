import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Border = styled.div`
  border-bottom: ${(props) => (props.noBorder ? "none" : "2px solid #C2C2D0")};
  width: 160px;
`;

export const Content = styled.span`
  padding: 0 10px 0 10px;
`;
