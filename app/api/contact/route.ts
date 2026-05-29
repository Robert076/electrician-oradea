import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    if (!name || !message || !phone || !email) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
    }

    const htmlContent = `
      <h2>Ai primit un mesaj nou din formularul de contact:</h2>
      <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
      <p><strong>Subiect:</strong> ${escapeHtml(subject || "Nespecificat")}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || "necompletat")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "necompletat")}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${escapeHtml(message)}</p>
    `;

    await resend.emails.send({
      from: "office@electricianoradea.ro",
      to: "office@electricianoradea.ro",
      subject: `${subject ? `[${escapeHtml(subject)}]` : "Mesaj nou"} de la ${escapeHtml(name)}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Eroare la trimiterea emailului:", err);
    return NextResponse.json(
      { error: "A apărut o eroare la trimiterea mesajului." },
      { status: 500 }
    );
  }
}
