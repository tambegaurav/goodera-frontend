import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  width: 70%;
  height: 100px;
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin-top: 20px;
  border-radius: 16px;

  & .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    img {
      width: 25px;
      height: 25px;
    }
  }

  & input {
    outline: none;
    border: none;
    width: 80%;
    padding: 0px;
    font-size: 16px;
  }

  & button {
    outline: none;
    border: 2px solid #f07987;
    background-color: #f07987;
    color: #ffffff;
    padding: 10px 10px;
    font-weight: 700;
    border-radius: 8px;
    right: 20px;
    width: 100%;
    max-width: 200px;
    cursor: pointer;
    font-size: 15px;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div className="flex">
        <img src="/images/Search.png" alt="" />
        <input type="text" placeholder="Job Title or keyword" />
      </div>
      <div className="flex">
        <img src="/images/Map.png" alt="" />
        <input type="text" placeholder="Search Location" />
        <img src="/images/Dropdown.png" alt="" />
      </div>

      <button>Search</button>
    </SearchBarContainer>
  );
};

export default SearchBar;
