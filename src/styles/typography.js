import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => (props.family ? props.family : "Inter")}, sans-serif,
    Helvetica, sans-serif;
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "#3F403F")};
  line-height: 32px;
  margin: 0;
`;

export const Heading = styled.h1`
  font-family: "Inter" sans-serif;
  font-size: ${(props) => (props.size ? props.size : "36px")};
  color: ${(props) => (props.color ? props.color : "#3F403F")};
  font-weight: ${(props) => (props.weight ? props.weight : 700)};
`;
