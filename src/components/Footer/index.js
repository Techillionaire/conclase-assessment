import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/logo.png";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";

const Socials = () => {
  return (
    <SocialWrapper>
      <p className="title">Social media</p>
      <div>
        <Instagram />
        <Twitter />
        <Facebook />
        <Linkedin />
      </div>
    </SocialWrapper>
  );
};

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoSection>
        <img src={Logo} width={80} height={80} alt="company logo" />
        <p>
          Getajobng provides a full online service for anyone looking for a new
          job. We're not a recruitment agency, we're a job site.
        </p>
      </InfoSection>
      <ListingWrapper>
        <p className="title">Information</p>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Terms & Condition</p>
      </ListingWrapper>
      <ListingWrapper>
        <p className="title">Job Seekers</p>
        <p>Create Account</p>
        <p>Job list</p>
        <p>FAQ</p>
      </ListingWrapper>
      <ListingWrapper>
        <p className="title">Employers</p>
        <p>Create Account</p>
        <p>Post a Job</p>
        <p>FAQ</p>
      </ListingWrapper>

      <Socials />
    </FooterWrapper>
  );
};

export default Footer;

const ListingWrapper = styled.div`
  margin-bottom: 16px;

  .title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media (min-width: 576px) {
    .title {
      font-size: 18px;
    }
  }
`;

const InfoSection = styled.div`
  max-width: 250px;
  padding-bottom: 32px;
`;

const FooterWrapper = styled.footer`
  display: flex;
  padding: 62px 32px;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const SocialWrapper = styled.div`
  height: 100%;
  .title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 16px;
  }

  svg {
    margin-right: 8px;
  }

  div {
    display: flex;
  }

  @media (min-width: 576px) {
    .title {
      font-size: 18px;
    }
  }
`;
