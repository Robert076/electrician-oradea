"use client";
import Button from "@/components/button/page";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import "./admin-style.css";

// Simple markdown parser (same as before)
function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/__(.+?)__/g, "<u>$1</u>")
    .replace(/\n/g, "<br />");
}

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

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

    setIsLoading(false);

    if (res.ok) {
      const data = await res.json();
      setMessage(`✅ Postare creată cu succes: ${data.slug}`);
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
    <div className="admin-container">
      <div className="admin-header">
        <h1>📝 Creare postare nouă</h1>
        <p className="admin-subtitle">
          Completează formularul pentru a crea o postare nouă pe blog
        </p>
      </div>

      <div className="admin-layout">
        {/* Form Section */}
        <div className="admin-form-section">
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label htmlFor="title">Titlu postare *</label>
              <input
                id="title"
                type="text"
                placeholder="Introdu titlul postării..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="summary">Rezumat (pentru pagina principală) *</label>
              <input
                id="summary"
                type="text"
                placeholder="Rezumat scurt care apare pe prima pagină..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                className="form-input"
              />
              <small className="form-hint">Maxim 150-200 caractere recomandat</small>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descriere completă *</label>
              <textarea
                id="description"
                placeholder="Scrie conținutul complet al postării aici... Poți folosi formatare markdown!"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-textarea"
              />
              <small className="form-hint">Folosește formatările din ghidul din dreapta</small>
            </div>

            <div className="form-group">
              <label htmlFor="file">Imagine coperta</label>
              <div className="file-upload-wrapper">
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <label htmlFor="file" className="file-label">
                  {file ? `✓ ${file.name}` : "📷 Alege o imagine"}
                </label>
              </div>
              {previewUrl && (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" />
                </div>
              )}
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="btn-secondary"
                disabled={!description}
              >
                {showPreview ? "Ascunde preview" : "👁️ Previzualizare"}
              </button>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? "Se creează..." : "✨ Crează postare"}
              </button>
            </div>
          </form>

          {message && (
            <div className={`message ${message.includes("✅") ? "success" : "error"}`}>
              {message}
            </div>
          )}

          {/* Preview Section */}
          {showPreview && description && (
            <div className="preview-section">
              <h3>Previzualizare</h3>
              <div className="preview-content">
                {previewUrl && (
                  <img src={previewUrl} alt="Preview" className="preview-banner" />
                )}
                <h2>{title || "Titlu postare"}</h2>
                <div
                  className="preview-description"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(description) }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Formatting Guide Sidebar */}
        <div className="formatting-guide">
          <h3>📖 Ghid formatare</h3>
          <p className="guide-intro">Folosește aceste formatări în descriere:</p>

          <div className="format-item">
            <code>**text**</code>
            <div className="format-result">
              <strong>text bold</strong>
            </div>
          </div>

          <div className="format-item">
            <code>*text*</code>
            <div className="format-result">
              <em>text italic</em>
            </div>
          </div>

          <div className="format-item">
            <code>***text***</code>
            <div className="format-result">
              <strong>
                <em>bold + italic</em>
              </strong>
            </div>
          </div>

          <div className="format-item">
            <code>__text__</code>
            <div className="format-result">
              <u>text subliniat</u>
            </div>
          </div>

          <div className="guide-example">
            <h4>Exemplu:</h4>
            <code className="example-code">
              Acesta este un text **bold** și acesta este *italic*. Poți combina ***ambele***
              sau __sublinia__ textul.
            </code>
            <div className="example-result">
              Acesta este un text <strong>bold</strong> și acesta este <em>italic</em>. Poți
              combina{" "}
              <strong>
                <em>ambele</em>
              </strong>{" "}
              sau <u>sublinia</u> textul.
            </div>
          </div>

          <div className="guide-tips">
            <h4>💡 Sfaturi:</h4>
            <ul>
              <li>Folosește Enter pentru linii noi</li>
              <li>Nu exagera cu formatarea</li>
              <li>Testează cu previzualizarea</li>
              <li>Imaginea devine banner al postării</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
