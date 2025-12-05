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
  await resend.emails.send({
    from: "office@electricianoradea.ro",
    to,
    subject,
    text,
  });
}
