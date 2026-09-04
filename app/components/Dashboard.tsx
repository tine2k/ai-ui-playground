"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import ChartPlaceholder from "./ChartPlaceholder";
import ActivityTable from "./ActivityTable";
import { useCurrency } from "./CurrencyContext";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

interface StatCardDef {
  label: string;
  change: string;
  icon: React.ReactElement;
  iconBg: string;
  valueUsd?: number;
  value?: string;
}

const statCards: StatCardDef[] = [
  {
    label: "Total Revenue",
    valueUsd: 45231,
    change: "+20.1%",
    icon: <DollarSign size={20} className="text-blue-400" />,
    iconBg: "bg-blue-500/15",
  },
  {
    label: "Active Users",
    value: "2,350",
    change: "+180",
    icon: <Users size={20} className="text-emerald-400" />,
    iconBg: "bg-emerald-500/15",
  },
  {
    label: "Conversions",
    value: "1,230",
    change: "+12.2%",
    icon: <ShoppingCart size={20} className="text-amber-400" />,
    iconBg: "bg-amber-500/15",
  },
  {
    label: "Growth",
    value: "+25.5%",
    change: "+4.5%",
    icon: <TrendingUp size={20} className="text-pink-400" />,
    iconBg: "bg-pink-500/15",
  },
];

export default function Dashboard() {
  const { format } = useCurrency();

  return (
    <div className="min-h-screen bg-slate-900">
      <Sidebar />

      <div className="min-h-screen transition-[margin-left] duration-200 ease-in-out md:ml-16 xl:ml-60">
        <Header />

        <main className="p-6">
          {/* Stat cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 min-[1280px]:grid-cols-4 min-[1280px]:gap-6">
            {statCards.map((card) => (
              <StatCard
                key={card.label}
                label={card.label}
                value={card.valueUsd != null ? format(card.valueUsd) : (card.value ?? "")}
                change={card.change}
                icon={
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                }
              />
            ))}
          </div>

          {/* Chart */}
          <div className="mb-6">
            <ChartPlaceholder />
          </div>

          {/* Activity table */}
          <ActivityTable />
        </main>
      </div>
    </div>
  );
}
