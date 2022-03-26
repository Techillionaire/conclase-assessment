import React from "react";
import styled from "styled-components";
import paystackLogo from "../../assets/icons/googlelogo.png";
import { ReactComponent as LocationIcon } from "../../assets/icons/geolocation.svg";
import { FlexSpaceBetween } from "../../styles/layout";
import { Paragraph } from "../../styles/typography";

export const Badge = ({ text }) => {
  return <BadgeWrapper>{text}</BadgeWrapper>;
};

const JobCard = ({ position, name, logo, type }) => {
  return (
    <CardWrapper>
      <div className="badge_container">
        <Badge text={type} />
      </div>

      <img src={logo} alt="random text" />

      <p className="position">{position}</p>

      <InfoSection>
        <Title>{name}</Title>

        <FlexSpaceBetween>
          <LocationWrapper>
            <LocationIcon width={13} height={18} />
            <p>Lagos, Nigeria</p>
          </LocationWrapper>

          <button>Apply here</button>
        </FlexSpaceBetween>
      </InfoSection>
    </CardWrapper>
  );
};

export default JobCard;

const BadgeWrapper = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 8px;
  padding: 8px;
  background-color: rgba(244, 245, 249, 1);
  border-radius: 30px;
  color: rgba(155, 155, 155, 1);

  @media (min-width: 576px) {
    font-size: 12px;
    padding: 4px 20px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: fit-content;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin-right: 8px;
  border-radius: 5px;

  .position {
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 8px;
  }

  .badge_container {
    text-align: right;
    margin-bottom: 48px;
    align-self: flex-end;
  }

  img {
    height: 24px;
    margin-bottom: 8px;
  }

  @media (min-width: 576px) {
    width: 318px;
    height: 354px;
    padding: 16px;
    margin-right: 16px;
    border-radius: 5px;

    .position {
      font-size: 18px;
      margin-bottom: 38px;
    }

    img {
      height: 60px;

      text-align: center;
    }
  }
`;

const InfoSection = styled.div`
  border-top: 1px solid #e5e5e5;
  width: 100%;

  button {
    border-radius: 30px;
    font-size: 8px;
    color: #06942a;
    background-color: #ffff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(6, 148, 42, 0.2);
    }
  }

  @media (min-width: 576px) {
    padding: 8px;

    button {
      width: 97px;
      height: 29px;
      border-radius: 30px;
      font-size: 12px;
    }
  }
`;

const Title = styled(Paragraph)`
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 576px) {
    font-size: 16px;

    margin-bottom: 18px;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 8px;
    padding-left: 8px;
  }

  @media (min-width: 576px) {
    p {
      font-size: 12px;
      padding-left: 8px;
    }
  }
`;
