import React from "react";
import styled from "styled-components";
import Card from "../../Components/Card";
import NavBar from "../../Components/NavBar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 70%;
  gap: 50px;
  margin: 100px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const HomePage = () => {
  return (
    <div>
      <NavBar />

      <Container>
        {new Array(15).fill(1).map((el, idx) => (
          <Card key={idx} />
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
