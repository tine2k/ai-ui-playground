"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import ChartPlaceholder from "./ChartPlaceholder";
import ActivityTable from "./ActivityTable";
import { useCurrency } from "./CurrencyContext";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

type StatCard =
  | { label: string; valueUsd: number; change: string; icon: React.ReactElement; iconBg: string }
  | { label: string; value: string; change: string; icon: React.ReactElement; iconBg: string };

const statCards: StatCard[] = [
  {
    label: "Total Revenue",
    valueUsd: 45231,
    change: "+20.1%",
    icon: <DollarSign size={20} color="#60A5FA" />,
    iconBg: "bg-blue-500/15",
  },
  {
    label: "Active Users",
    value: "2,350",
    change: "+180",
    icon: <Users size={20} color="#34D399" />,
    iconBg: "bg-emerald-500/15",
  },
  {
    label: "Conversions",
    value: "1,230",
    change: "+12.2%",
    icon: <ShoppingCart size={20} color="#FBBF24" />,
    iconBg: "bg-amber-500/15",
  },
  {
    label: "Growth",
    value: "+25.5%",
    change: "+4.5%",
    icon: <TrendingUp size={20} color="#F472B6" />,
    iconBg: "bg-pink-500/15",
  },
];

export default function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const { format } = useCurrency();

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqTablet = window.matchMedia("(min-width: 768px) and (max-width: 1279px)");

    const update = () => {
      if (mqMobile.matches) setSidebarWidth(0);
      else if (mqTablet.matches) setSidebarWidth(64);
      else setSidebarWidth(240);
    };

    update();
    mqMobile.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Sidebar />

      <div
        className="min-h-screen transition-[margin-left] duration-200 ease-in-out"
        style={{ marginLeft: sidebarWidth }}
      >
        <Header />

        <main className="p-6">
          {/* Stat cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 min-[1280px]:grid-cols-4 min-[1280px]:gap-6">
            {statCards.map((card) => (
              <StatCard
                key={card.label}
                label={card.label}
                value={"valueUsd" in card ? format(card.valueUsd) : card.value}
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
