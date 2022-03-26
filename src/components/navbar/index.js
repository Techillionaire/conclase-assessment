import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={AppLogo} className="logo" alt="company logo" />
      </Link>

      <ul>
        <li>Companies</li>
        <li>Candidates</li>
        <Link to={"todos"}>
          <li>Assessment</li>
        </Link>
        <li>Post a Job</li>
        <li>Career Advice</li>
      </ul>

      <AuthWrapper>
        <button>Sign Up</button>
        <button className="pry_btn">Log in</button>
      </AuthWrapper>
      <Link to={"/todos"} className="assessment">
        Assessment
      </Link>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: #ffffff;
  margin-top: 8px;
  width: 100%;
  height: 68px;
  padding: 0 8px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .assessment {
    display: block;
    color: #3f403f;
    padding-right: 32px;
  }

  .logo {
    width: 68px;
    height: 68px;
  }

  ul {
    display: none;
  }

  .pry_btn {
    background-color: rgba(6, 148, 42, 0.2);
    color: #06942a;
    width: 120px;
    height: 45px;
    margin-left: 12px;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    width: 60px;

    height: 45px;
    border-radius: 30px;
    border: none;
    background-color: #ffff;
    cursor: pointer;

    &:hover {
      color: #06942a;
    }
  }

  @media (min-width: 576px) {
    background-color: #ffffff;
    margin-top: 8px;
    width: 100%;
    height: 68px;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 68px;
      height: 68px;
    }
    .assessment {
      display: none;
    }
    ul {
      display: flex;
      list-style: none;
      font-size: 16px;
      font-weight: 400;

      li {
        margin-right: 4px;
        padding: 8px;
        cursor: pointer;

        &:hover {
          color: #06942a;
        }
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .pry_btn {
      background-color: rgba(6, 148, 42, 0.2);
      color: #06942a;
      width: 120px;
      height: 45px;
      margin-left: 12px;
      font-weight: 500;
      font-size: 16px;
    }

    button {
      width: 60px;

      height: 45px;
      border-radius: 30px;
      border: none;
      background-color: #ffff;
      cursor: pointer;

      &:hover {
        color: #06942a;
      }
    }
  }
`;

const AuthWrapper = styled.div`
  display: none;

  @media (min-width: 576px) {
    display: flex;
  }
`;
