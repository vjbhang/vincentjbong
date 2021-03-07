import styled from "styled-components";

export default function ContentSelector({ topicId }) {
  const content = require(`./${topicId}`);

  function contentParagraph(content) {
    if (content) {
      return <Content>{content}</Content>;
    }
  }

  function contentCode(code) {
    if (code) {
      return <Code>{code}</Code>;
    }
  }

  return (
    <Wrapper>
      <Title className="title">{content.title}</Title>
      <Published className="date">Vincent Bong</Published>
      <Published className="date">{`${topicId.slice(0, 9)}`}</Published>
      <Body>
        {contentParagraph(content.body1)}
        {contentParagraph(content.body2)}
        {contentCode(content.code)}
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 5%;
  margin-top: 5%;
  width: 60%;
`;
const Title = styled.h2`
  font-size: 36px;
  margin-block-end: 0.3em;
`;
const Published = styled.p`
  font-size: 14px;
  color: #9e9e9e;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
const Body = styled.div``;
const Content = styled.p`
  padding-bottom: 16px;
`;
const Code = styled.code`
  color: skyblue;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 16px;
  background-color: black;
  border-radius: 8px;
`;
