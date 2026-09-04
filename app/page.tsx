import { CurrencyProvider } from "./components/CurrencyContext";
import type { Currency } from "./components/CurrencyContext";
import Dashboard from "./components/Dashboard";

export default async function Page({ searchParams }: PageProps<"/">) {
  const { currency } = await searchParams;
  const initialCurrency: Currency =
    currency === "USD" || currency === "EUR" ? currency : "USD";

  return (
    <CurrencyProvider initialCurrency={initialCurrency}>
      <Dashboard />
    </CurrencyProvider>
  );
}
