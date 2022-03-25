import React, { useRef } from "react";
import styled from "styled-components";
import JobCard from "../components/cards/JobCard";
import paystackLogo from "../assets/icons/paystack.png";
import googleLogo from "../assets/icons/googlelogo.png";
import flutterLogo from "../assets/icons/flutterwave.png";
import uberLogo from "../assets/icons/uber.png";
import { ReactComponent as Left } from "../assets/icons/left.svg";
import { ReactComponent as Right } from "../assets/icons/right.svg";

const JobsSection = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Section>
      <h1>Recommended Jobs</h1>
      <Container ref={ref}>
        <CardsWrapper>
          <JobCard
            logo={paystackLogo}
            name={"Paystack"}
            position="QA Engineer"
            type={"Full time"}
          />
          <JobCard
            logo={googleLogo}
            name={"Google"}
            position="Product Analyst"
            type={"Part time"}
          />
          <JobCard
            logo={flutterLogo}
            name={"Flutterwave"}
            position="Senior Frontend"
            type={"Full time"}
          />
          <JobCard
            logo={paystackLogo}
            name={"Paystack"}
            position="Backend Developer"
            type={"Full time"}
          />
          <JobCard
            logo={googleLogo}
            name={"Google"}
            position="Human Operations"
            type={"Full time"}
          />
          <JobCard
            logo={googleLogo}
            name={"Google"}
            position="DevSecOps"
            type={"Part time"}
          />
        </CardsWrapper>
      </Container>
      <div className="controls">
        <Left
          className="controls"
          color="#06942A"
          onClick={() => scroll(-100)}
        />{" "}
        <Right className="controls" onClick={() => scroll(100)} />
      </div>
    </Section>
  );
};

export default JobsSection;

const Section = styled.section`
  margin-top: 64px;
  /* height: 500px; */

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .controls {
    display: none;
  }

  @media (min-width: 576px) {
    margin-top: 64px;
    height: 500px;

    h1 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 56px;
    }
    .controls {
      display: flex;
      justify-content: flex-end;
      scroll-behavior: smooth;

      svg {
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;

  width: max-content;
  height: 250px;
  /* scroll-snap-type: x mandatory; */
  scroll-behavior: smooth;

  @media (min-width: 576px) {
    height: 399px;
  }
`;

const Container = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
