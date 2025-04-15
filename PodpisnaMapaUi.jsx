import './styles.css';

import React from "react";
import { Card } from "@/components/ui/card";

import { useNavigate } from "react-router-dom";

export default function Pomoc() {
  const navigate = useNavigate();
  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto bg-white shadow-sm rounded-2xl">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="text-3xl font-bold text-sky-700">📘 Pomoč – Podpisna mapa</h1>
        <button
          onClick={() => navigate("/")}
          className="text-sm px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow"
        >
          ⬅ Nazaj na podpisno mapo
        </button>
      </div>

      <Card className="p-6 rounded-xl shadow-sm bg-sky-50">
        <h2 className="text-xl font-semibold mb-3 text-sky-800">🧭 Navigacija po vmesniku</h2>
        <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
          <li>Seznam dokumentov s statusi in pacienti na levi strani</li>
          <li>Podrobnosti in metapodatki izbranega dokumenta na desni strani</li>
          <li>Polje za opombe in komentar zdravnika pri zavrnitvi</li>
        </ul>
      </Card>

      <Card className="p-6 rounded-xl shadow-sm bg-green-50">
        <h2 className="text-xl font-semibold mb-3 text-green-800">✍️ Podpisovanje</h2>
        <p className="text-base mb-2">
          Uporabnik lahko dokumente podpiše na dva načina:
        </p>
        <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
          <li><strong>Navadni podpis</strong> – klik na "Podpiši"</li>
          <li><strong>Digitalni podpis</strong> (ProxSign) – klik na "Podpiši digitalno"</li>
        </ul>
        <p className="text-sm mt-3 italic text-slate-500">
          Za digitalni podpis mora biti nameščena komponenta SETCCE ProxSign.
        </p>
      </Card>

      <Card className="p-6 rounded-xl shadow-sm bg-red-50">
        <h2 className="text-xl font-semibold mb-3 text-red-800">🚫 Zavrni dokument</h2>
        <p className="text-base text-slate-700">
          Ob zavrnitvi se prikaže okno za vnos razloga, ki je nato prikazan kot komentar zdravnika pod dokumentom.
        </p>
      </Card>

      <Card className="p-6 rounded-xl shadow-sm bg-indigo-50">
        <h2 className="text-xl font-semibold mb-3 text-indigo-800">📂 Dodatne funkcije</h2>
        <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
          <li>Filtriranje po imenu in statusu</li>
          <li>Masovni podpis več dokumentov</li>
          <li>Nalaganje lokalnih PDF dokumentov</li>
          <li>Samodejno preklapljanje med mobilnim in namiznim pogledom</li>
          <li>Ročno preklapljanje z gumbom</li>
        </ul>
      </Card>

      <Card className="p-6 rounded-xl shadow-sm bg-yellow-50">
        <h2 className="text-xl font-semibold mb-3 text-yellow-800">ℹ️ Nasveti</h2>
        <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
          <li>Pred podpisom preverite, da je dokument v PDF/A formatu</li>
          <li>Če se ProxSign ne odziva, preverite dovoljenja in namestitev</li>
          <li>Komentar zdravnika je viden samo, če je bil dokument zavrnjen</li>
        </ul>
      </Card>
    </div>
  );
}
