import styled from "styled-components";

export const PrimaryButton = ({ text, width, height }) => {
  return <Primary>{text}</Primary>;
};

const Primary = styled.button`
  background-color: rgba(6, 148, 42, 0.2);
  border-radius: 50px;
  width: 160px;
  height: 45px;
  border: none;
`;
