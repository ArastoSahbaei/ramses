import { useState } from "react";

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
    <div>
      <label>
        Ursprunglig koncentration:
        <input
          type="number"
          value={c1}
          onChange={(e) => setC1(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Ursprunglig volym:
        <input
          type="number"
          value={v1}
          onChange={(e) => setV1(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Slutlig koncentration:
        <input
          type="number"
          value={c2}
          onChange={(e) => setC2(parseFloat(e.target.value))}
        />
      </label>
      <button onClick={calculateDilution}>Beräkna</button>
      {result !== null && <div>Slutlig volym: {result}</div>}
    </div>
  );
};

export default DilutionCalculator;
