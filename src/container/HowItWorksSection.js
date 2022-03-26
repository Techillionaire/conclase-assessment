import React from "react";
import GroupImageWebp from "../assets/images/groupimagess.webp";
import { ReactComponent as Check } from "../assets/icons/check.svg";
import styled from "styled-components";

const HowItWorksSection = () => {
  return (
    <Section>
      <div className="image-wrapper">
        <img src={GroupImageWebp} />
      </div>
      <div className="details">
        <h1 className="title">How it works</h1>
        <p>
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>

        <div className="subtitle">
          <Check /> <h1>Search Jobs</h1>
        </div>
        <p>
          We have jobs in the most popular industries and with top companies.
          Plus, you can create alerts so you never miss a job opportunity.
        </p>
        <div className="subtitle">
          <Check /> <h1>Create a Profile and Get Noticed</h1>
        </div>
        <p>
          Create a profile to showcase your skills and experience so recruiters
          can find you. Upload your CV so you can apply for jobs quickly and
          easily.
        </p>
        <div className="subtitle">
          <Check /> <h1>Apply for Jobs</h1>
        </div>
        <p>
          Find the training you need to improve your skills, or visit our Career
          Center for tips and advice to build your career.
        </p>
      </div>
    </Section>
  );
};

export default HowItWorksSection;

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  .image-wrapper {
    margin-top: 32px;
  }

  .details {
    max-width: 480px;
  }

  img {
    width: 300px;
    height: 300px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 22px;
  }
  .subtitle {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    svg {
      width: 34px;
      height: 34px;
    }
    h1 {
      font-size: 16px;
      font-weight: 500;
      padding-left: 8px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.5em;
    margin-bottom: 18px;
  }

  @media (min-width: 576px) {
    flex-direction: row;

    img {
      width: 600px;
      height: 800px;
    }

    .title {
      font-size: 32px;
      margin-bottom: 50px;
    }
    .subtitle {
      h1 {
        font-size: 24px;
        padding-left: 16px;
      }
    }

    p {
      margin-bottom: 32px;
      font-size: 16px;
    }
  }
`;
