import React, { useState } from "react";
export default function SpalinyAut() {
  const [kmRoku, setKmRoku] = useState(10000);
  const [litryNa100km, setLitryNa100km] = useState(7);
  const [iloscAut, setIloscAut] = useState(1);
  const [suwak, setSuwak] = useState(50);
  const [wynikdzule, setWynikDzule] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let wartosc_litra_dzule = 29520000;
    let odleglosc_calkowita = iloscAut * kmRoku;
    let zuzyte_paliwo = odleglosc_calkowita * (litryNa100km / 100);
    let energia = zuzyte_paliwo * wartosc_litra_dzule;
    let energia_skuteczna_dzule = energia * (suwak / 100);

    setWynikDzule(energia_skuteczna_dzule);
  };

  return (
    <div className="m-5 bg-[#1f1f1f] p-5 rounded-2xl border-1">
      <h1 className="text-2xl text-white font-bold">Spalanie aut</h1>
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
              <p className="text-white mt-2">{suwak}%</p>
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
        <div className="pl-4 cursor-default">
          <h2 className="p-2">Wyniki obliczeń:</h2>
          <p>{wynikdzule.toFixed(2)} dżuli</p>
          <p>{(wynikdzule / 1000).toFixed(2)} kilodżuli (kJ)</p>
          <p>{(wynikdzule / 1000000).toFixed(2)} megadżuli</p>
          <h2>Albo inaczej:</h2>
          <div className="relative inline-block group">
            <p>{(wynikdzule / 4184).toFixed(2)} kilokalorie (kcal)</p>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-800 text-white text-center text-sm rounded py-2 px-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              To odpowiada około:
              <ul className="mt-1 list-disc list-inside text-left">
                <li>{(wynikdzule / 4184 / 95).toFixed(1)} 🍎 jabłek</li>
                <li>{(wynikdzule / 4184 / 80).toFixed(1)} 🍞 kromek chleba</li>
                <li>{(wynikdzule / 4184 / 250).toFixed(1)} 🍫 batonów czekoladowych</li>
                <li>{(wynikdzule / 4184 / 285).toFixed(1)} 🍕 kawałków pizzy</li>
                <li>{(wynikdzule / 4184 / 800).toFixed(2)} 🌯 kebabów</li>
                <li>{(wynikdzule / 4184 / 300).toFixed(1)} 🍔 cheeseburgerów</li>
                <li>{(wynikdzule / 4184 / 200).toFixed(1)} 🍗 nóżek z kurczaka</li>
              </ul>
            </div>
          </div>
          <p>{(wynikdzule / 3600).toFixed(2)} watogodziny (Wh)</p>
          <p>{(wynikdzule / 3_600_000).toFixed(2)} kilowatogodziny (kWh)</p>
          <p>
            {(wynikdzule / 420000).toFixed(2)} litrów zagotowanej wody (od 20°C
            do 100°C)
          </p>
        </div>
      </div>
    </div>
  );
}
