"use client";

import { createContext, useContext, useMemo } from "react";

export type Currency = "USD" | "EUR";

interface CurrencyContextValue {
  currency: Currency;
  format: (usdAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const USD_TO_EUR = 0.92;

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const formatEUR = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const formatUSDCents = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatEURCents = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

export function CurrencyProvider({
  initialCurrency,
  children,
}: {
  initialCurrency?: Currency;
  children: React.ReactNode;
}) {
  const currency: Currency = initialCurrency ?? "USD";

  const value = useMemo<CurrencyContextValue>(() => {
    const format = (usdAmount: number) =>
      currency === "USD" ? formatUSD(usdAmount) : formatEUR(usdAmount * USD_TO_EUR);
    return { currency, format };
  }, [currency]);

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

export { formatUSDCents, formatEURCents };
