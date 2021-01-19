import styled from "styled-components";

export const Container = styled.div``;

export const Link = styled.h2`
  font-size: ${(props) => props.size || "1.5em"};
  color: white;
  text-align: center;
  margin-top: ${(props) => props.marginTop};
`;

export const LinkContainer = styled.div`
  display: flex;
  position: relative;
`;
