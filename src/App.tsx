import styled from "styled-components";
import { DilutionCalculator } from "./components/DilutionCalculator";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <CenteredDiv>
        <DilutionCalculator />
        <Footer />
      </CenteredDiv>
    </>
  );
};

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
