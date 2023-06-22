import { useState } from "react";
import { footerHeight } from "../../shared/constants";
import styled from "styled-components";
import { fadeInOpacity } from "../../shared/animations";

export const ContactView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Här kan du utföra logik för att skicka formuläret
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Kontakta oss</Title>
        {submitted ? (
          <SuccessMessage>
            Tack för ditt meddelande! Vi återkommer snart.
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>E-post:</Label>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Field>
            <Field>
              <Label>Meddelande:</Label>
              <Textarea
                value={message}
                onChange={handleMessageChange}
                required
              />
            </Field>
            <Button type="submit">Skicka</Button>
          </Form>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${footerHeight}px);
  align-items: center;
  justify-content: center;
  animation: ${fadeInOpacity} 400ms ease-in;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  color: #00c281;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
`;

const Field = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #00c281;
  border-radius: 10px;
  font-size: 18px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #00c281;
  border-radius: 10px;
  font-size: 18px;
  box-sizing: border-box;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  font-size: 20px;
  border-radius: 10px;
  background-color: #00c281;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #00b32d;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 30px;
  font-size: 24px;
  color: #00c281;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  text-align: center;
`;
