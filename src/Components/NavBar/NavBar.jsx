import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: rgb(94, 122, 223);
  background: linear-gradient(
    90deg,
    rgba(94, 122, 223, 1) 22%,
    rgba(94, 169, 223, 1) 100%
  );
`;

const NavBarWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100px;
  margin: auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  & .left-links,
  .right-links {
    display: flex;
    flex-direction: row;
    gap: 30px;
    color: #ffffff;
    cursor: pointer;
  }

  & .active {
    border-bottom: 2px solid #fff;
    border-bottom-width: 2px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 70%;
  margin: auto;
  color: #ffffff;

  & h1 {
    font-weight: 700;
    font-size: 38px;
  }
`;

const SearchBar = styled.input``;

const NavBar = () => {
  return (
    <MainWrapper>
      <NavBarWrapper>
        <div className="left-links">
          <img src="/images/Logo.png" className="logo" alt="" />

          <h3 className="active">Find Jobs</h3>
          <h3>Upskill Yourself</h3>
        </div>

        <div className="right-links">
          <h3>Post A Job</h3>
          <h3>Sign in</h3>
        </div>
      </NavBarWrapper>
      <Title>
        <h1>Find Your Dream Job</h1>
        <p>Browse through thousands of full-time and part-time jobs near you</p>
      </Title>
      {/* <SearchBar></SearchBar> */}
    </MainWrapper>
  );
};

export default NavBar;
