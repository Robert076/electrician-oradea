import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    // ✅ validare minimă
    if (!name || !message || (!phone && !email)) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
    }

    // ✅ Configurare transporter (folosește aceleași variabile ca în exemplul tău)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST!,
      port: Number(process.env.EMAIL_SERVER_PORT!),
      secure: false, // true dacă folosești port 465
      auth: {
        user: process.env.EMAIL_SERVER_USER!,
        pass: process.env.EMAIL_SERVER_PASS!,
      },
    });

    const toEmail = "office@electricianoradea.ro";

    // ✅ Conținutul emailului
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: toEmail,
      subject: `Mesaj nou de la ${name}`,
      html: `
        <h2>Ai primit un mesaj nou din formularul de contact:</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone || "necompletat"}</p>
        <p><strong>Email:</strong> ${email || "necompletat"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Trimiterea emailului
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Eroare la trimiterea emailului:", err);
    return NextResponse.json(
      { error: "A apărut o eroare la trimiterea mesajului." },
      { status: 500 }
    );
  }
}
