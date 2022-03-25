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
      <img src={Paystack} />
      <img src={Google} />
      <img src={Kpmg} />
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
  /* flex-direction: column; */
  align-items: center;
  height: 650px;
  /* justify-content: space-between; */
  width: 100%;
  background: url(${BackgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;

  .details {
    /* padding-top: 32px; */
    width: 100%;
    p {
      font-size: 16px;
      line-height: 32px;
      width: 100%;
      max-width: 620px;
      /* margin-bottom: 40px; */
    }
    h1 {
      margin-top: -32px;
      font-size: 32px;
      /* line-height: px; */
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

  @media (min-width: 576px) {
    padding: 0 32px;
    margin-bottom: 140px;
    display: flex;
    align-items: center;
    height: 700px;
    justify-content: space-between;
    width: 100%;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;

    .details {
      width: 60%;
      p {
        width: 100%;
        max-width: 620px;
        line-height: 32px;
        /* margin-bottom: 40px; */
      }
      h1 {
        margin-top: 0;

        font-size: 48px;
        line-height: 55px;
        font-weight: 700;
        margin-bottom: 32px;

        span {
          color: #06942a;
        }
      }

      .logo_section {
        margin-top: 32px;

        p {
          font-weight: 500;
          margin-bottom: 24px;
        }
      }
    }
    .image-container {
      width: 40%;
      display: grid;
      place-items: center;
    }
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: baseline;

  /* width: 100%; */
  margin: auto 0;

  img {
    height: 32px;
    margin-right: 24px;
    opacity: 0.5;

    webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  @media (min-width: 576px) {
    display: flex;
    align-items: baseline;

    /* width: 100%; */
    margin: auto 0;

    img {
      height: 33px;
      margin-right: 24px;
    }
  }
`;
