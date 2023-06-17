import React from "react";
import styled from "styled-components";
import DilutionCalculator from "./components/DilutionCalculator";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this value based on your desired height */
`;

export const App = () => {
  return (
    <CenteredDiv>
      <DilutionCalculator />
    </CenteredDiv>
  );
};
