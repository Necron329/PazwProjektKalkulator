import { useState } from "react";

export default function Radiany() {
  const [degValue, setDegValue] = useState("");
  const [radValue, setRadValue] = useState("");

  const handleDegChange = (e) => {
    const value = e.target.value;
    setDegValue(value);
    if (value === "") {
      setRadValue("");
    } else {
      const radians = (parseFloat(value) * Math.PI) / 180;
      setRadValue(radians.toFixed(4));
    }
  };

  const handleRadChange = (e) => {
    const value = e.target.value;
    setRadValue(value);
    if (value === "") {
      setDegValue("");
    } else {
      const degrees = (parseFloat(value) * 180) / Math.PI;
      setDegValue(degrees.toFixed(2));
    }
  };

  return (
    <div className="m-5 bg-[#1f1f1f] p-5 rounded-2xl border-1">
      <h1 className="text-2xl text-white font-bold mb-4">
        Radiany {"<-->"} Stopnie
      </h1>
      <div className="mb-4">
        <label className="block text-white mb-1">Podaj kąt w stopniach:</label>
        <input
          type="number"
          value={degValue}
          onChange={handleDegChange}
          className="w-full p-2 rounded bg-[#333] text-white"
          placeholder="Np. 180"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Podaj kąt w radianach:</label>
        <input
          type="number"
          value={radValue}
          onChange={handleRadChange}
          className="w-full p-2 rounded bg-[#333] text-white"
          placeholder="Np. 3.14"
        />
      </div>
    </div>
  );
}
