import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jadual from "../data";

export default function Jadual() {
  const { hari } = useParams();
  const navigate = useNavigate();
  const data = jadual[hari] || [];

  const [checked, setChecked] = useState({});

  const toggle = (key) => {
    setChecked({
      ...checked,
      [key]: !checked[key]
    });
  };

  return (
    <div className="container">
      <h2>📅 Jadual Hari {hari}</h2>

      {data.map((item, i) => (
        <div key={i} className="card">
          <h3>{item.subjek}</h3>

          {item.buku.map((b, j) => {
            const key = `${i}-${j}`;
            return (
              <div key={key}>
                <input
                  type="checkbox"
                  checked={checked[key] || false}
                  onChange={() => toggle(key)}
                />
                {b}
              </div>
            );
          })}
        </div>
      ))}

      <button
        className="done"
        onClick={() => alert("Semua buku sudah siap! 🎉")}
      >
        ✅ Sudah Siap
      </button>

      <button onClick={() => navigate("/")}>⬅ Kembali</button>
    </div>
  );
}
