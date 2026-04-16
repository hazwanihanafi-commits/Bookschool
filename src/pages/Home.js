import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const hariList = ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat"];

  return (
    <div className="container">
      <h1>📚 APP JADUAL PINTAR</h1>
      <p>Tekan hari untuk lihat buku</p>

      {hariList.map((hari) => (
        <button
          key={hari}
          className="btn"
          onClick={() => navigate(`/jadual/${hari}`)}
        >
          {hari}
        </button>
      ))}
    </div>
  );
}
