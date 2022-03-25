import React from "react";
import styled from "styled-components";
import mImage from "../../assets/images/man3.jpg";

// TODO: fix component

const Image = ({ image }) => {
  return (
    <PictureWrapper>
      <source srcSet={mImage} />
      <img src={mImage} />
    </PictureWrapper>
  );
};

export default Image;

const PictureWrapper = styled.picture`
  /* overflow: hidden; */
  background-color: red;
  width: auto;

  img {
    width: ${(props) => (props.width ? props.width : "326px")};
    height: ${(props) => (props.height ? props.height : "346px")};
    border-radius: 30px;

    &::before {
      content: " hsk";
      width: 100%;
      height: 100%;
      background-color: black;
      margin-top: 50px;
    }
  }
`;
