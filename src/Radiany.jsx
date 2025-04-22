import { useState } from "react";

export default function Radiany() {
  const [value, setValue] = useState("");
  const [mode, setMode] = useState("deg");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const toggleMode = () => {
    setValue("");
    setMode(mode === "deg" ? "rad" : "deg");
  };

  const convertValue = () => {
    const number = parseFloat(value);
    if (isNaN(number)) return "";
    return mode === "deg"
      ? ((number * Math.PI) / 180).toFixed(4) + " rad"
      : ((number * 180) / Math.PI).toFixed(2) + "°";
  };

  return (
    <div className="m-5 bg-[#1f1f1f] p-5 rounded-2xl border-1">
      <h1 className="text-2xl text-white font-bold mb-4">
        Radiany {"<-->"} Stopnie
      </h1>
      <div className="mb-4">
        <label className="block text-white mb-1">
          Podaj kąt w {mode === "deg" ? "stopniach" : "radianach"}:
        </label>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#333] text-white"
          placeholder={`Np. ${mode === "deg" ? "180" : "3.14"}`}
        />
      </div>
      <div className="mb-4">
        <button
          onClick={toggleMode}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Zmień na {mode === "deg" ? "radiany" : "stopnie"}
        </button>
        <p className="text-white">Wynik: {convertValue()}</p>
      </div>
    </div>
  );
}
