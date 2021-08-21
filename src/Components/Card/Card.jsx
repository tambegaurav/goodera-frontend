import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  border-radius: 16px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  place-items: center;

  & .left {
    background-color: #c4c4c4;
    height: 80%;
    width: 80%;
    border-radius: 16px;
  }

  & .right {
    padding: 10px;
    position: relative;
    display: flex;
    width: auto;
    flex-direction: column;
    gap: 5px;

    h4 {
      font-weight: 500;
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

    .btn {
      background-color: transparent;
      outline: none;
      border: 2px solid #f07987;
      color: #f07987;
      padding: 5px 10px;
      font-weight: 500;
      border-radius: 8px;
      right: 20px;
      width: 50%;
      align-self: flex-end;
    }
  }
`;

const Card = () => {
  return (
    <CardWrapper>
      <div className="left"></div>
      <div className="right">
        <h4>Executive Producer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn">View Details</button>
      </div>
    </CardWrapper>
  );
};

export default Card;
