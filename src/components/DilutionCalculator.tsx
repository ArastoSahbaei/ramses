import React, { useState } from "react";
import styled from "styled-components";

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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  color: #007bff;
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
  border: 2px solid #007bff;
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
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 30px;
  font-size: 24px;
  color: #007bff;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  text-align: center;
`;

interface DilutionProps {}

const DilutionCalculator: React.FC<DilutionProps> = () => {
  const [X, setX] = useState<number>(0);
  const [Y, setY] = useState<number>(0);
  const [Z, setZ] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const calculateDilution = () => {
    if (X <= 0 || Y <= 0 || Z <= 0) {
      alert("Alla värden måste vara större än 0");
      return;
    }

    const spaddedVolume: number = (X * Z) / Y;
    setResult(
      `Du kommer att behöva späda ut ${X} ml av ditt läkemedel med ${spaddedVolume.toFixed(
        2
      )} ml natriumklorid för att få en önskad styrka av ${Z} mg av ditt läkemedel.`
    );
  };

  return (
    <Container>
      <Title>Dilution Calculator</Title>
      <Field>
        <Label>Ange okänt läkemedel (X ml):</Label>
        <Input
          type="number"
          value={X}
          onChange={(e) => setX(parseFloat(e.target.value))}
        />
      </Field>
      <Field>
        <Label>Ange styrka av okänt läkemedel (Y mg):</Label>
        <Input
          type="number"
          value={Y}
          onChange={(e) => setY(parseFloat(e.target.value))}
        />
      </Field>
      <Field>
        <Label>Ange önskad läkemedelsstyrka (Z):</Label>
        <Input
          type="number"
          value={Z}
          onChange={(e) => setZ(parseFloat(e.target.value))}
        />
      </Field>
      <Button onClick={calculateDilution}>Beräkna</Button>
      {result && <Result>{result}</Result>}
    </Container>
  );
};

export default DilutionCalculator;
