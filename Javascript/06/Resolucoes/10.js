function jogarNaMega() {
  const array = [... new Set(Array.from({length: 6}, () => Math.round(Math.random() * 60)))];
  return array.length === 6? array : jogarNaMega();
};

console.log(jogarNaMega());