import { supabaseAdmin } from "./supabaseAdmin";

export async function set2FACode(email: string, code: string) {
  const expiresAt = new Date(Date.now() + 5 * 60_000).toISOString();

  const { error } = await supabaseAdmin.from("two_fa_single").upsert(
    {
      id: 1,
      email,
      code,
      expires_at: expiresAt,
    },
    { onConflict: "id" }
  );

  if (error) console.error("Eroare la setarea 2FA:", error.message);
}

export async function verify2FACode(email: string, code: string) {
  const { data, error } = await supabaseAdmin
    .from("two_fa_single")
    .select("email, code, expires_at")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Eroare la verificarea 2FA:", error.message);
    return false;
  }

  if (!data) return false;
  if (data.email !== email) return false;
  if (data.code !== code) return false;
  if (new Date(data.expires_at).getTime() < Date.now()) return false;

  const { error: delError } = await supabaseAdmin.from("two_fa_single").delete().eq("id", 1);

  if (delError) console.error("Eroare la ștergerea codului 2FA:", delError.message);

  return true;
}
