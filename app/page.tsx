"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ChartPlaceholder from "./components/ChartPlaceholder";
import ActivityTable from "./components/ActivityTable";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const statCards = [
  {
    label: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    icon: <DollarSign size={20} color="#3B82F6" />,
    iconBg: "bg-blue-50",
  },
  {
    label: "Active Users",
    value: "2,350",
    change: "+180",
    icon: <Users size={20} color="#10B981" />,
    iconBg: "bg-emerald-50",
  },
  {
    label: "Conversions",
    value: "1,230",
    change: "+12.2%",
    icon: <ShoppingCart size={20} color="#F59E0B" />,
    iconBg: "bg-orange-50",
  },
  {
    label: "Growth",
    value: "+25.5%",
    change: "+4.5%",
    icon: <TrendingUp size={20} color="#EC4899" />,
    iconBg: "bg-pink-50",
  },
];

export default function Home() {
  const [sidebarWidth, setSidebarWidth] = useState(240);

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
    <div className="min-h-screen bg-gray-50">
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
                value={card.value}
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
