import React from "react";
import styled from "styled-components";

const categoryCard = ({ logo, name, count }) => {
  return (
    <Wrapper>
      <div>
        {logo}
        <p className="title">{name}</p>
        <p className="job_count">{`( ${count} new jobs )`}</p>
      </div>
    </Wrapper>
  );
};

export default categoryCard;

const Wrapper = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  padding: 4px;

  display: grid;
  place-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    text-align: center;
    padding: 8px 0;
  }
  .job_count {
    padding-bottom: 0;
    margin: 2px 0;
    text-align: center;
    font-size: 10px;
    line-height: 12px;

    font-weight: 500;
    color: #9b9b9b;
  }

  @media (min-width: 576px) {
    width: 296px;
    height: 275px;

    svg {
      width: 80px;
      height: 80px;
    }
    .title {
      font-size: 21px;
      margin: 16px 0;
    }
    .job_count {
      margin: 0;
      font-size: 14px;
    }
  }
`;
