export const calculateDilution = (c1: number, v1: number, c2: number): number => {
  // c1 = ursprunglig koncentration
  // v1 = ursprunglig volym
  // c2 = slutlig koncentration
  // Funktionen returnerar den slutliga volymen (v2)

  if (c1 <= 0 || v1 <= 0 || c2 <= 0) {
    throw new Error("Alla värden måste vara större än 0");
  }

  if (c2 > c1) {
    throw new Error("Slutkoncentrationen kan inte vara högre än startkoncentrationen");
  }

  const v2: number = (c1 * v1) / c2;

  return v2;
}