import React, { useState } from "react";
import styled from "styled-components";
import { footerHeight } from "../../shared/constants";
import { fadeInOpacity } from "../../shared/animations";

export const DilutionCalculator: React.FC = () => {
  const [X, setX] = useState("");
  const [Y, setY] = useState("");
  const [Z, setZ] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleXChange = (e: any) => {
    setX(e.target.value);
  };

  const handleYChange = (e: any) => {
    setY(e.target.value);
  };

  const handleZChange = (e: any) => {
    setZ(e.target.value);
  };

  const calculateDilution = () => {
    const parsedX = parseFloat(X.replace(",", "."));
    const parsedY = parseFloat(Y.replace(",", "."));
    const parsedZ = parseFloat(Z.replace(",", "."));

    if (isNaN(parsedX) || isNaN(parsedY) || isNaN(parsedZ)) {
      alert("Alla värden måste vara numeriska");
      return;
    }

    const totalVolume: number = (parsedX * parsedY) / parsedZ;
    const diluentVolume: number = totalVolume - parsedX;
    setResult(
      `Du kommer att behöva späda ut ${parsedX} ml av ditt läkemedel med ${diluentVolume.toFixed(
        2
      )} ml natriumklorid för att få en önskad styrka av ${parsedZ} mg/ml av ditt läkemedel.`
    );
  };

  const handleDecimalInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    const { key } = event;
    if (key === "." || key === ",") {
      event.preventDefault();
      const input = event.currentTarget;
      const value = input.value;
      const selectionStart = input.selectionStart || 0;
      const selectionEnd = input.selectionEnd || 0;
      input.value =
        value.substring(0, selectionStart) +
        "." +
        value.substring(selectionEnd, value.length);
      input.selectionStart = input.selectionEnd = selectionStart + 1;
      handleChange(event as any);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Dilution Calculator</Title>
        <Field>
          <Label>Volym läkemedel (ml):</Label>
          <Input
            type="text"
            value={X}
            onChange={handleXChange}
            onKeyPress={(e) => handleDecimalInput(e, handleXChange)}
          />
        </Field>
        <Field>
          <Label>Nuvarande koncentration läkemedel (mg/ml):</Label>
          <Input
            type="text"
            value={Y}
            onChange={handleYChange}
            onKeyPress={(e) => handleDecimalInput(e, handleYChange)}
          />
        </Field>
        <Field>
          <Label>Önskad koncentration läkemedelsstyrka (mg/ml):</Label>
          <Input
            type="text"
            value={Z}
            onChange={handleZChange}
            onKeyPress={(e) => handleDecimalInput(e, handleZChange)}
          />
        </Field>
        <Button onClick={calculateDilution}>Beräkna</Button>
        {result && <Result>{result}</Result>}
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
  padding: 50px;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4);
  background-color: #f9f9f9;
  padding: 50px;
`;

const Title = styled.h1`
  color: #00c281;
  text-align: center;
  margin-bottom: 30px;
`;
const Field = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
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
const Result = styled.div`
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
