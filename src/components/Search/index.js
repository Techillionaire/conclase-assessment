import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/geolocation.svg";

const SearchBar = () => {
  return (
    <Form>
      <input type={"text"} placeholder={"Enter keywords, skill, interest"} />
      <div className="search__location">
        <LocationIcon />
        <p>Location</p>
      </div>
      <div className="search__btn">
        <SearchIcon />
      </div>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  width: 100%;
  height: 45px;
  border-radius: 30px;
  border: 1px solid #e5e5e5;
  /* box-shadow: 0 10 30 0 rgba(6, 148, 42, 0.04); */
  display: flex;
  font-family: "Graphik", Arial, Helvetica, sans-serif;

  @media (min-width: 576px) {
    width: 532px;
    height: 48px;
  }

  input {
    width: 60%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-left: 16px;
    border: none;

    &::placeholder {
      font-size: 12px;
      color: #9b9b9b;
    }
    &:active,
    :focus {
      outline: none;
    }

    @media (min-width: 576px) {
      width: 55%;
      padding-left: 24px;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  .search__location {
    width: 30%;
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-left: solid 1px #e5e5e5;

    p {
      font-size: 12px;
      color: #c4c4c4;
      padding-left: 8px;
    }

    @media (min-width: 576px) {
      padding-left: 24px;

      p {
        font-size: 14px;
        padding-left: 16px;
      }
    }
  }

  .search__btn {
    width: 15%;
    background-color: #06942a;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    display: grid;
    place-items: center;

    &:focus,
    :active {
      background-color: #035317;
    }
  }
`;
