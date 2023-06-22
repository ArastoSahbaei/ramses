import styled from "styled-components";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { AppRoutes } from "./routes";
import { footerHeight } from "./shared/constants";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes>
        <Footer />
      </AppRoutes>
    </>
  );
};