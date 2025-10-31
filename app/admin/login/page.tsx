"use client";
import Button from "@/components/button/page";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("robertberes06@gmail.com");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Se trimite linkul...");

    const res = await fetch("/api/send-login-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) setMsg("✅ Verifică inboxul pentru linkul de autentificare!");
    else setMsg("❌ Eroare sau email neautorizat.");
  }

  return (
    <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Login admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "300px",
            borderRadius: "var(--border-radius)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            padding: "10px 20px;",
            marginBottom: "1rem",
          }}
        />
        <Button text="Login" />
      </form>
      {msg && <p style={{ marginTop: "1rem" }}>{msg}</p>}
    </div>
  );
}
