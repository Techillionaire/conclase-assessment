import React from "react";
import CategorySection from "../../container/CategorySection";
import HeaderSection from "../../container/HeaderSection";
import HowItWorksSection from "../../container/HowItWorksSection";
import JobsSection from "../../container/JobsSection";
import styled from "styled-components";
import InfoSection from "../../container/InfoSection";
import TestimonialSection from "../../container/TestimonialSection";
import bannerImg from "../../assets/images/womaninsuit.jpg";
import bannerImgMobile from "../../assets/images/womaninsuit-mobile.jpg";

const Homepage = () => {
  return (
    <>
      <HeaderSection />
      <JobsSection />
      <HowItWorksSection />
      <CategorySection />
      <InfoSection />
      <TestimonialSection />
      <BannerWrapper>
        <div>
          <h1>Get a Job you actually like</h1>
          <p>Create an account and start applying</p>
          <button>Get started</button>
        </div>
      </BannerWrapper>
    </>
  );
};

export default Homepage;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 12px;

  margin-bottom: 70px;
  height: 169px;

  border-radius: 30px;
  background-image: url(${bannerImgMobile});
  background-repeat: no-repeat;

  /* background-repeat: no-repeat; */
  align-items: center;

  div {
    width: 55%;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3em;
  }
  p {
    color: #ffffff;
    line-height: 1.3;
    font-size: 12px;
  }
  button {
    border-radius: 30px;
    width: 120px;
    height: 30px;
    border: none;
    color: #ffffff;
    margin-top: 8px;
    background-color: rgba(6, 148, 42, 1);
    font-size: 12px;
  }

  @media (min-width: 576px) {
    height: 367px;
    max-width: 1236px;
    margin: 0 32px;
    margin-bottom: 140px;
    background-image: url(${bannerImg});

    h1 {
      font-size: 48px;
      font-weight: 700;
      color: #ffffff;
      line-height: 72px;
    }
    p {
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
    }

    button {
      border-radius: 30px;
      width: 230px;
      height: 50px;
      border: none;
      color: #ffffff;
      margin-top: 8px;
      background-color: rgba(6, 148, 42, 1);
      font-size: 16px;
    }
  }
`;
