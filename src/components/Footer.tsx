import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Path from "../routes/Path";
import { footerHeight } from "../shared/constants";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <EmojiWrapper>
        <span role="img" aria-label="Glitter">
          ✨
        </span>
        <span role="img" aria-label="Jordglob">
          🌍
        </span>
        <span role="img" aria-label="Hjärta">
          ❤️
        </span>
      </EmojiWrapper>
      <Text>
        Skapad för att underlätta vårdpersonalens vardag och aktivt bidra till
        att forma ett samhälle präglat av överlägsen hälsa och välbefinnande
      </Text>
      <ContactText>
        Har du förslag på hur vi kan förbättra vår hemsida eller önskar du komma
        i kontakt med oss?
        <ContactLink onClick={() => navigate(Path.contactView)}>
          Klicka här.
        </ContactLink>
      </ContactText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.4);
  height: ${footerHeight}px;
`;

const Text = styled.p`
  font-size: 22px;
  color: #333333;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EmojiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 28px;
    margin: 0px 5px 10px 5px;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  color: #666666;
  font-family: Nunito !important;
  text-align: center;
`;

const ContactLink = styled.span`
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
  font-family: Nunito !important;
  &:hover {
    color: #000000;
  }
`;
