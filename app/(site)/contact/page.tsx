"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/button/page";
import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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

    toast.loading("Se trimite mesajul...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss();

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.error || "Eroare la trimiterea mesajului.");
        return;
      }

      toast.success("Mesaj trimis cu succes!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("Eroare de conexiune la server.");
    }
  };

  return (
    <div className="contact-wrapper">
      <h1>Ai nevoie de servicii electrice?</h1>
      <p>Haide să luăm legătura!</p>

      <div className="contact">
        <div className="left-half">
          <form onSubmit={handleSubmit}>
            <div className="group">
              <label htmlFor="name">Nume</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="group">
              <label htmlFor="phone">Număr de telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <Button text="Trimite" />
          </form>
        </div>

        <div className="right-half"></div>
      </div>
    </div>
  );
};

export default Contact;
