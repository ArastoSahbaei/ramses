import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #007bff;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #007bff;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

interface DilutionProps {}

const DilutionCalculator: React.FC<DilutionProps> = () => {
  const [c1, setC1] = useState<number>(0);
  const [v1, setV1] = useState<number>(0);
  const [c2, setC2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateDilution = () => {
    if (c1 <= 0 || v1 <= 0 || c2 <= 0) {
      alert("Alla värden måste vara större än 0");
      return;
    }

    if (c2 > c1) {
      alert("Slutkoncentrationen kan inte vara högre än startkoncentrationen");
      return;
    }

    const v2: number = (c1 * v1) / c2;
    setResult(v2);
  };

  return (
    <Container>
      <Title>Dilution Calculator</Title>
      <Field>
        <Label>Ursprunglig koncentration (mg/ml):</Label>
        <Input
          type="number"
          value={c1}
          onChange={(e) => setC1(parseFloat(e.target.value))}
        />
      </Field>
      <Field>
        <Label>Ursprunglig volym (ml):</Label>
        <Input
          type="number"
          value={v1}
          onChange={(e) => setV1(parseFloat(e.target.value))}
        />
      </Field>
      <Field>
        <Label>Slutlig koncentration (mg/ml):</Label>
        <Input
          type="number"
          value={c2}
          onChange={(e) => setC2(parseFloat(e.target.value))}
        />
      </Field>
      <Button onClick={calculateDilution}>Beräkna</Button>
      {result !== null && <Result>Slutlig volym: {result} ml</Result>}
    </Container>
  );
};

export default DilutionCalculator;
