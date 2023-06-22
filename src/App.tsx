import { Footer } from "./components/Footer";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { AppRoutes } from "./routes";

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