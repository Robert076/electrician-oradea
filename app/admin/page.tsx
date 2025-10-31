"use client";

import Button from "@/components/button/page";
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
    <div
      style={{
        width: "100vw",
        margin: "4rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "50px",
        background: "white",
      }}
    >
      <h1>Creare postare nouă</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "400px",
            marginTop: "20px",
            borderRadius: "var(--border-radius)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            padding: "10px 20px;",
            marginBottom: "1rem",
          }}
        />
        <input
          type="text"
          placeholder="Rezumat scurt (apare pe prima pagină)"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{
            width: "400px",
            marginTop: "20px",
            borderRadius: "var(--border-radius)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            padding: "10px 20px;",
            marginBottom: "1rem",
          }}
        />
        <textarea
          placeholder="Descriere completă"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "400px",
            marginTop: "20px",
            height: "400px",
            borderRadius: "var(--border-radius)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            padding: "10px 20px;",
            marginBottom: "1rem",
            resize: "none",
          }}
        />
        <Button text="Creaza" />
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}
