export type Currency = "USD" | "EUR";

export const USD_TO_EUR = 0.92;

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const formatEUR = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const formatUSDCents = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatEURCents = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

export function formatUsd(
  usdAmount: number,
  currency: Currency,
  opts?: { cents?: boolean },
): string {
  if (currency === "USD") {
    return opts?.cents ? formatUSDCents(usdAmount) : formatUSD(usdAmount);
  }
  const eur = usdAmount * USD_TO_EUR;
  return opts?.cents ? formatEURCents(eur) : formatEUR(eur);
}
