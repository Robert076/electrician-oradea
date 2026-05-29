"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/button/page";
import { CONTACT_TEXT_HEADER, CONTACT_TEXT_SUBHEADER } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name.trim()) return toast.error("Numele este obligatoriu.");
    if (!message.trim()) return toast.error("Mesajul este obligatoriu.");
    if (!phone.trim()) return toast.error("Numărul de telefon este obligatoriu.");
    if (!email.trim()) return toast.error("Adresa de email este obligatorie.");

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
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("Eroare de conexiune la server.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 focus:bg-white transition-all";

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Contactează-ne</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          {CONTACT_TEXT_HEADER}
        </h1>
        <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">{CONTACT_TEXT_SUBHEADER}</p>
      </div>

      {/* Form card */}
      <div className="max-w-xl mx-auto w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nume <span className="text-red-400">*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subiect <span className="text-gray-400 font-normal">(opțional)</span></label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`${inputClass} appearance-none`}>
              <option value="">Selectează un subiect...</option>
              <option value="Instalație electrică nouă">Instalație electrică nouă</option>
              <option value="Depanare / Intervenție urgentă">Depanare / Intervenție urgentă</option>
              <option value="Tablou electric">Tablou electric</option>
              <option value="Iluminat interior/exterior">Iluminat interior/exterior</option>
              <option value="Priză / Întrerupător">Priză / Întrerupător</option>
              <option value="Verificare / Revizie instalație">Verificare / Revizie instalație</option>
              <option value="Smart home / Automatizări">Smart home / Automatizări</option>
              <option value="Altceva">Altceva</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Număr de telefon <span className="text-red-400">*</span></label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-400">*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesaj <span className="text-red-400">*</span></label>
            <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
          </div>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">* câmpuri obligatorii</p>
            <Button text="Trimite mesajul" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
