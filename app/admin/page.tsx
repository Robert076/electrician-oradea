"use client";

import Button from "@/components/button/page";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    let fileBase64: string | null = null;
    let fileName: string | null = null;

    if (file) {
      fileName = file.name;
      fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1];
          resolve(base64);
        };
        reader.onerror = reject;
      });
    }

    const res = await fetch("/api/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, description, fileBase64, fileName }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(`✅ Postare creată: ${data.slug}`);
      setTitle("");
      setSummary("");
      setDescription("");
      setFile(null);
      setPreviewUrl(null);
    } else {
      const err = await res.json();
      setMessage(`❌ Eroare: ${err.error}`);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
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
            padding: "10px 20px",
            marginBottom: "1rem",
            fontSize: "15px",
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
            padding: "10px 20px",
            marginBottom: "1rem",
            fontSize: "15px",
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
            padding: "10px 20px",
            marginBottom: "1rem",
            resize: "none",
            fontSize: "15px",
          }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginBottom: "1rem", fontSize: "15px" }}
        />

        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: 200, marginBottom: "1rem" }}
          />
        )}

        <Button text="Crează postare" />
      </form>

      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}
