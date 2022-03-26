import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/cards/CategoryCard";
import { ReactComponent as OilIcon } from "../assets/icons/oil-gas.svg";
import { ReactComponent as HealthcareIcon } from "../assets/icons/healthcare.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as AccountingIcon } from "../assets/icons/accounting.svg";
import { ReactComponent as ArtIcon } from "../assets/icons/art.svg";
import { ReactComponent as TechIcon } from "../assets/icons/tech.svg";
import { ReactComponent as SecurityIcon } from "../assets/icons/security.svg";
import { ReactComponent as DateIcon } from "../assets/icons/date.svg";

const categories = [
  {
    logo: <OilIcon />,
    name: "Oil and Gas",
    opening: 20,
  },
  {
    logo: <HealthcareIcon />,
    name: "Healthcare",
    opening: 40,
  },

  {
    logo: <EducationIcon />,
    name: "Education",
    opening: 10,
  },
  {
    logo: <AccountingIcon />,
    name: "Accounting",
    opening: 28,
  },
  {
    logo: <ArtIcon />,
    name: "Design, Art and Multimedia",
    opening: 9,
  },
  {
    logo: <TechIcon />,
    name: "Technology",
    opening: 190,
  },
  {
    logo: <SecurityIcon />,
    name: "Security",
    opening: 33,
  },
  {
    logo: <DateIcon />,
    name: "Data Analyst",
    opening: 14,
  },
];

const CategorySection = () => {
  return (
    <Section>
      <h1>Popular Categories</h1>
      <CardWrapper>
        {categories.map((cat, i) => (
          <CategoryCard
            logo={cat.logo}
            name={cat.name}
            count={cat.opening}
            key={i}
          />
        ))}
      </CardWrapper>
    </Section>
  );
};

export default CategorySection;

const Section = styled.section`
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 32px;
      margin-bottom: 64px;
    }
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
  margin: 0 auto;

  @media (min-width: 576px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 24px;
  }
`;
