import React from "react";
import { Card } from "@/components/ui/card";

export default function Pomoc() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Pomoč - Podpisna mapa</h1>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">🧭 Navigacija po vmesniku</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Seznam dokumentov s statusi in pacienti na levi strani</li>
          <li>Podrobnosti in metapodatki izbranega dokumenta na desni strani</li>
          <li>Polje za opombe in komentar zdravnika pri zavrnitvi</li>
        </ul>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">✍️ Podpisovanje</h2>
        <p className="text-sm mb-2">
          Uporabnik lahko dokumente podpiše na dva načina:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>Navadni podpis</strong> - klik na "Podpiši"</li>
          <li><strong>Digitalni podpis</strong> (ProxSign) - klik na "Podpiši digitalno"</li>
        </ul>
        <p className="text-sm mt-2">
          Za digitalni podpis mora biti nameščena komponenta SETCCE ProxSign.
        </p>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">🚫 Zavrni dokument</h2>
        <p className="text-sm mb-2">
          Ob zavrnitvi se prikaže okno za vnos razloga, ki je nato prikazan kot komentar zdravnika.
        </p>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">📂 Dodatne funkcije</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Filtriranje po imenu in statusu</li>
          <li>Masovni podpis več dokumentov</li>
          <li>Nalaganje lokalnih PDF dokumentov</li>
          <li>Samodejno preklapljanje med mobilnim in namiznim pogledom</li>
          <li>Ročno preklapljanje z gumbom</li>
        </ul>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">ℹ️ Nasveti</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Pred podpisom preverite, da je dokument v PDF/A formatu</li>
          <li>Če se ProxSign ne odziva, preverite dovoljenja in namestitev</li>
          <li>Komentar zdravnika je viden samo, če je bil dokument zavrnjen</li>
        </ul>
      </Card>
    </div>
  );
}
