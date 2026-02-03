"use client";
import Button from "@/components/button/page";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

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
      setMsg("✅ Autentificare completă! Redirecționare...");
      toast.success("Autentificare completă!");
      router.push("/admin");
    } else if (res.status === 429) {
      setMsg(
        "❌ Ai fost blocat pentru prea multe încercări nereușite. Încearcă din nou peste un minut.",
      );
      toast.error("Ai fost blocat pentru prea multe încercări nereușite.");
    } else {
      setMsg("❌ Email sau parolă incorectă.");
      toast.error("Email sau parolă incorectă.");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Login admin</h1>

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

      {msg && <p style={{ marginTop: "1rem" }}>{msg}</p>}
    </div>
  );
}

/* 
  ============================================
  LOGICA 2FA COMENTATĂ - PENTRU IMPLEMENTARE VIITOARE
  ============================================

  // State pentru 2FA:
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"login" | "2fa">("login");

  // În handleLogin, după res.ok, în loc de router.push("/admin"):
  
  // Trimitere cod 2FA pe email
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

  // Funcție pentru verificare cod 2FA:
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

  // UI pentru step 2FA (înlocuiește form-ul actual):
  {step === "login" ? (
    // Form-ul actual de login
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
*/
