import React from "react";
import styled from "styled-components";
import { ReactComponent as HeaderImage } from "../assets/images/headerImage.svg";
import Paystack from "../assets/icons/paystack.png";
import Google from "../assets/icons/google.png";
import Kpmg from "../assets/icons/kpmg.png";
import Background from "../assets/illustrations/background.svg";
import BackgroundMobile from "../assets/icons/bgMobile.svg";
import SearchBar from "../components/Search/index";

const Logos = () => {
  return (
    <LogosWrapper>
      <img src={Paystack} alt="paystack" />
      <img src={Google} alt="google" />
      <img src={Kpmg} alt="kpmg" />
    </LogosWrapper>
  );
};

const HeaderSection = () => {
  return (
    <Section>
      <div className="details">
        <h1>
          Find a <span>job</span> easily
        </h1>
        <p>
          With verified, up-to-date job listings directly from employer
          websites, we create a premium experience for job seekers, employers,
          and data seekers alike.
        </p>

        <SearchBar />
        <div className="logo_section">
          <p>Trusted by:</p>

          <Logos />
        </div>
      </div>
      <div className="image-container">
        <HeaderImage width={500} height={600} />
      </div>
    </Section>
  );
};

export default HeaderSection;

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 650px;
  width: 100%;
  background: url(${BackgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;

  .details {
    width: 100%;
    p {
      font-size: 16px;
      line-height: 32px;
      width: 100%;
      max-width: 620px;
    }
    h1 {
      margin-top: -32px;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;

      span {
        color: #06942a;
      }
    }

    .logo_section {
      margin-top: 64px;

      p {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 24px;
      }
    }
  }
  .image-container {
    display: none;
  }

  @media (min-width: 1070px) {
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;

    .details {
      width: 50%;
    }

    .image-container {
      width: 50%;
      display: grid;
      place-items: end;

      svg {
        width: 450px;
        height: 564px;
      }
    }
  }

  @media (min-width: 1260px) {
    padding: 0 32px;
    margin-bottom: 140px;
    height: 700px;
    justify-content: space-between;
    width: 100%;

    .image-container {
      width: 40%;
      svg {
        height: auto;
        width: auto;
      }
    }

    .details {
      width: 60%;
      p {
        width: 100%;
        max-width: 620px;
        line-height: 32px;
      }
      h1 {
        margin-top: 0;
        font-size: 48px;
        line-height: 55px;
        margin-bottom: 32px;
      }

      .logo_section {
        margin-top: 32px;

        p {
          margin-bottom: 24px;
        }
      }
    }
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: baseline;

  margin: auto 0;

  img {
    max-width: 85px;
    height: 25px;
    aspect-ratio: 17/5;
    margin-right: 24px;
    opacity: 0.5;

    webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  @media (min-width: 576px) {
    img {
      max-width: 108px;
      height: 32px;
      aspect-ratio: 27/8;
      margin-right: 24px;
    }
  }
`;
