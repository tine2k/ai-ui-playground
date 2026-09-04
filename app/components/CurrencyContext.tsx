"use client";

import { createContext, useContext, useMemo } from "react";
import { formatUsd } from "@/lib/currency";
import type { Currency } from "@/lib/currency";

export type { Currency };

interface CurrencyContextValue {
  currency: Currency;
  format: (usdAmount: number, opts?: { cents?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({
  initialCurrency,
  children,
}: {
  initialCurrency?: Currency;
  children: React.ReactNode;
}) {
  const currency: Currency = initialCurrency ?? "USD";

  const value = useMemo<CurrencyContextValue>(() => {
    const format = (usdAmount: number, opts?: { cents?: boolean }) =>
      formatUsd(usdAmount, currency, opts);
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
