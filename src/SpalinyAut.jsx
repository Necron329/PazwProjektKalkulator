import React, { useState } from "react";
export default function SpalinyAut() {
  const [kmRoku, setKmRoku] = useState(10000);
  const [litryNa100km, setLitryNa100km] = useState(7);
  const [iloscAut, setIloscAut] = useState(1);
  const [suwak, setSuwak] = useState(50);
  const [wynik, setWynik] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()

    let wartosc_litra_dzule = 29520000
    let odleglosc_calkowita = iloscAut * kmRoku
    let zuzyte_paliwo = odleglosc_calkowita * (litryNa100km / 100)
    let energia = zuzyte_paliwo * wartosc_litra_dzule
    let energia_skuteczna = energia * (suwak/100)

    setWynik(energia_skuteczna);
  };

  return (
    <div className="m-5 bg-[#1f1f1f] p-5 rounded-2xl border-1">
      <h1 className="text-2xl text-white">Spalanie aut</h1>
      <div className="flex">
        <div>
          <h2 className="p-2">Parametry:</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white" htmlFor="km-roku">
                Kilometry na rok:
              </label>
              <input
                type="number"
                id="km-roku"
                value={kmRoku}
                onChange={(e) => setKmRoku(e.target.value)}
                className="w-full p-2 rounded bg-[#333] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="litry-na-100km">
                Litry na 100 km:
              </label>
              <input
                type="number"
                id="litry-na-100km"
                value={litryNa100km}
                onChange={(e) => setLitryNa100km(e.target.value)}
                className="w-full p-2 rounded bg-[#333] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="ilosc-aut">
                Ilość aut:
              </label>
              <input
                type="number"
                id="ilosc-aut"
                value={iloscAut}
                onChange={(e) => setIloscAut(e.target.value)}
                className="w-full p-2 rounded bg-[#333] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="suwak">
                Wydajność Silnika (0-100)%
              </label>
              <input
                type="range"
                id="suwak"
                min="0"
                max="100"
                value={suwak}
                onChange={(e) => setSuwak(e.target.value)}
                className="w-full bg-[#333] text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Oblicz
              </button>
            </div>
          </form>
        </div>
        <div className="pl-4">
          <h2 className="p-2">Wyniki obliczeń:</h2>
          <p>{wynik} dżuli</p>
        </div>
      </div>
    </div>
  );
}
