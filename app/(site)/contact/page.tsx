"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/button/page";
import "./style.css";
import { CONTACT_TEXT_HEADER, CONTACT_TEXT_SUBHEADER } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    if (!name.trim()) return toast.error("Numele este obligatoriu.");
    if (!message.trim()) return toast.error("Mesajul este obligatoriu.");
    if (!phone.trim() && !email.trim())
      return toast.error("Completează fie numărul de telefon, fie adresa de email.");

    setIsSubmitting(true);
    toast.loading("Se trimite mesajul...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss();
      setIsSubmitting(false);

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.error || "Eroare la trimiterea mesajului.");
        return;
      }

      toast.success("Mesaj trimis cu succes!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss();
      setIsSubmitting(false);
      console.error(error);
      toast.error("Eroare de conexiune la server.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">{CONTACT_TEXT_HEADER}</h1>
          <p className="contact-subtitle">{CONTACT_TEXT_SUBHEADER}</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Form Section */}
          <div className="contact-form-section">
            <div className="form-intro">
              <h2>Trimite-ne un mesaj</h2>
              <p>Completează formularul și te vom contacta în cel mai scurt timp posibil.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Nume complet <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ion Popescu"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone" className="form-label">
                    Număr de telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0729 914 750"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Adresă email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ion@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Mesajul tău <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Descrie problema sau solicita o programare..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="form-footer">
                <p className="form-note">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 11C7.72386 11 7.5 10.7761 7.5 10.5V8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8V10.5C8.5 10.7761 8.27614 11 8 11ZM8.5 6C8.5 6.27614 8.27614 6.5 8 6.5C7.72386 6.5 7.5 6.27614 7.5 6C7.5 5.72386 7.72386 5.5 8 5.5C8.27614 5.5 8.5 5.72386 8.5 6Z"
                      fill="currentColor"
                    />
                  </svg>
                  Cel puțin un număr de telefon sau email este necesar
                </p>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
                </button>
              </div>
            </form>
          </div>

          {/* Info Section with Image */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:office@electricianoradea.ro">office@electricianoradea.ro</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Telefon</h3>
                  <a href="tel:0729914750">0729 914 750</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Locație</h3>
                  <p>Oradea, România</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 7V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Program</h3>
                  <p>Luni - Duminică: 08:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="hero-image" style={{ backgroundImage: "url('/hero3.jpg')" }}>
              <div className="hero-overlay">
                <p className="hero-text">Suntem aici să te ajutăm!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
