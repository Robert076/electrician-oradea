"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState(""); // 👈 nou
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, description }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(`✅ Postare creată: ${data.slug}`);
      setTitle("");
      setSummary("");
      setDescription("");
    } else {
      const err = await res.json();
      setMessage(`❌ Eroare: ${err.error}`);
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: "4rem auto" }}>
      <h1>Creare postare nouă</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="text"
          placeholder="Rezumat scurt (apare pe prima pagină)"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
        <textarea
          placeholder="Descriere completă"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            height: 100,
            marginBottom: "1rem",
          }}
        />
        <button type="submit">Creează</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}
