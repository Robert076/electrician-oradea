"use client";
import Button from "@/components/button/page";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("robertberes06@gmail.com");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState(""); // pentru 2FA
  const [step, setStep] = useState<"login" | "2fa">("login");
  const [msg, setMsg] = useState("");

  const router = useRouter();

  // pasul 1: verificare email + parola
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Se verifică...");
    const loadingId = toast.loading("Se verifică credentialele...");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    toast.dismiss(loadingId);

    if (res.ok) {
      // trimitere cod 2FA pe email
      const codeRes = await fetch("/api/send-2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (codeRes.ok) {
        setMsg("✅ Codul de verificare a fost trimis pe email.");
        setStep("2fa");
        toast.success("Codul de verificare a fost trimis pe email.");
      } else {
        setMsg("❌ Eroare la trimiterea codului 2FA.");
        toast.error("Eroare la trimiterea codului 2FA.");
      }
    } else if (res.status === 429) {
      setMsg(
        "❌ Ai fost blocat pentru prea multe încercări nereușite. Încearcă din nou peste un minut."
      );
      toast.error("Ai fost blocat pentru prea multe încercări nereușite.");
    } else {
      setMsg("❌ Email sau parolă incorectă.");
      toast.error("Email sau parolă incorectă.");
    }
  }

  // pasul 2: verificare cod 2FA
  async function handle2FA(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Se verifică codul...");
    const loadingId = toast.loading("Se verifică codul...");

    const res = await fetch("/api/verify-2fa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    toast.dismiss(loadingId);

    if (res.ok) {
      setMsg("✅ Autentificare completă! Redirecționare...");
      toast.success("Autentificare completă!");
      router.push("/admin");
    } else {
      setMsg("❌ Cod invalid sau expirat.");
      toast.error("Cod invalid sau expirat.");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Login admin</h1>

      {step === "login" ? (
        <form onSubmit={handleLogin}>
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
              padding: "10px 20px",
              marginBottom: "1rem",
            }}
          />
          <input
            type="password"
            placeholder="Parola"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "300px",
              borderRadius: "var(--border-radius)",
              border: "var(--border)",
              boxShadow: "var(--box-shadow)",
              padding: "10px 20px",
              marginBottom: "1rem",
            }}
          />
          <Button text="Login" />
        </form>
      ) : (
        <form onSubmit={handle2FA}>
          <input
            type="text"
            placeholder="Cod 2FA"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "300px",
              borderRadius: "var(--border-radius)",
              border: "var(--border)",
              boxShadow: "var(--box-shadow)",
              padding: "10px 20px",
              marginBottom: "1rem",
            }}
          />
          <Button text="Verifică cod" />
        </form>
      )}

      {msg && <p style={{ marginTop: "1rem" }}>{msg}</p>}
    </div>
  );
}
