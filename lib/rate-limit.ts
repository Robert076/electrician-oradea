const attempts = new Map<string, number>();

export function rateLimit(ip: string, limitMs = 60_000) {
  const now = Date.now();
  const lastAttempt = attempts.get(ip) ?? 0;

  if (now - lastAttempt < limitMs) {
    return false;
  }

  attempts.set(ip, now);
  return true;
}
