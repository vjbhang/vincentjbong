import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Default = styled.button`
  border-radius: 32px;
  border-width: 1px;
  border-color: #d1d1d1;
  background-color: rgba(0, 0, 0, 0);
  color: #0c0f5b;
  font-weight: bold;
  outline: none;
  padding: 8px 12px;
  border-style: solid;
`;

export const ModalButton = styled.button`
  border-radius: 32px;
  background-color: ${(props) => props.inputBackgroundColor || "#0C0F5B"};
  color: ${(props) => props.inputColor || "white"};
  width: 100%;
  height: 65%;
  border-width: ${(props) => props.inputBorderWidth || "0px"};
  font-size: 1.2em;
  outline: none;
  font-weight: bold;
`;

export const LanguageButton = styled(Default)`
  border: none;
  color: rgb(13, 16, 91);
  color: ${(props) =>
    props.isShown === null
      ? "rgb(13,16,91)"
      : props.isShown !== props.buttonName
      ? "rgb(149,150,172)"
      : "rgb(13,16,91)"};
  height: 100%;
  width: 100%;
  padding: 2px 12px;
`;
