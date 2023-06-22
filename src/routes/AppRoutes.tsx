import { HashRouter, Route, Routes, Outlet } from "react-router-dom";
import { ContactView, DilutionCalculator } from "../Views";
import Path from "./Path";

export const AppRoutes = ({ children }: { children: React.ReactNode }) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<DilutionCalculator />} />
          <Route path={Path.contactView} element={<ContactView />} />
        </Route>
      </Routes>
      {children}
    </HashRouter>
  );
};
