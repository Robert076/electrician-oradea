import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    // ✅ validare minimă
    if (!name || !message || (!phone && !email)) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
    }

    const toEmail = "office@electricianoradea.ro";

    // ✅ Conținutul emailului
    const htmlContent = `
      <h2>Ai primit un mesaj nou din formularul de contact:</h2>
      <p><strong>Nume:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone || "necompletat"}</p>
      <p><strong>Email:</strong> ${email || "necompletat"}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
    `;

    // ✅ Trimiterea emailului cu Resend
    await resend.emails.send({
      from: "office@electricianoradea.ro",
      to: toEmail,
      subject: `Mesaj nou de la ${name}`,
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
