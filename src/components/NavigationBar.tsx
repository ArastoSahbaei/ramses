import React, { useState } from "react";
import styled, { css } from "styled-components";
import Path from "../routes/Path";
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hem");

  const handleTabClick = (tab: string, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <Wrapper>
      <Tab
        as="div"
        onClick={() => handleTabClick("Hem", Path.initialView)}
        isActive={activeTab === "Hem"}
      >
        HEM
      </Tab>
      <Tab
        as="div"
        onClick={() => handleTabClick("Kontakt", Path.contactView)}
        isActive={activeTab === "Kontakt"}
      >
        KONTAKT
      </Tab>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const activeTabStyles = css`
  color: white;
  border-bottom: white 4px solid;
`;

const Tab = styled.div.attrs((props: any) => ({
  isActive: props.isActive,
}))`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
  letter-spacing: 2px;
  font-family: Roboto !important;

  cursor: pointer;
  transition: color 0.3s ease;

  ${(props) => props.isActive && activeTabStyles};

  &:hover {
    ${activeTabStyles};
  }
`;
