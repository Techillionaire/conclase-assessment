import React from "react";
import styled from "styled-components";
import image from "../assets/images/man3.webp";
import quote from "../assets/icons/quote.svg";

const TestimonialSection = () => {
  return (
    <Section>
      <h1>what are our customers saying</h1>
      <div className="customer">
        <img src={image} />

        <div className="details">
          <p className="comment">
            The platform is really convenient to reach out to companies & I have
            managed to secure 2 interviews already! I can also track my
            application status instead of wondering whether the company has seen
            or shortlisted me
          </p>
          <p className="name">Irma Black</p>
          <p className="position">HR Manager at MasterCard</p>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;

const Section = styled.section`
  h1 {
    max-width: 470px;
    font-size: 24px;
    text-align: center;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 24px;
  }

  img {
    margin-bottom: 16px;
    width: 200px;
    height: 200px;
  }
  p {
    margin-bottom: 16px;
    text-align: center;
  }
  .customer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .details {
    margin-left: 0;
    padding-top: 38px;

    position: relative;
    &::after {
      content: url(${quote});
      position: absolute;
      top: -1px;
    }
  }

  .comment {
    font-size: 14px;
    line-height: 28px;
  }
  .name {
    font-size: 16px;
    font-weight: 500;
  }
  .position {
    font-size: 16px;
    color: #9b9b9b;
  }

  @media (min-width: 860px) {
    img {
      margin-bottom: 0;
      width: 346px;
      height: 360px;
    }

    h1 {
      text-align: left;

      max-width: 470px;
      font-size: 32px;
      line-height: 54px;
      font-weight: 700;
      margin-bottom: 32px;
    }
    p {
      margin-bottom: 24px;
    }
    .customer {
      align-items: center;
      flex-direction: row;
    }
    .details {
      max-width: 660px;
      margin-left: 52px;
      padding-top: 38px;
    }

    .comment {
      font-size: 16px;
    }
    .name {
      font-size: 21px;
    }
    .position {
      font-size: 18px;
    }
  }
`;
