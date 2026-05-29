import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const { error } = await resend.emails.send({
    from: "office@electricianoradea.ro",
    to,
    subject,
    text,
  });

  if (error) {
    throw new Error(`Eroare la trimiterea emailului: ${error.message}`);
  }
}
