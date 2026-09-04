"use client";

import { TrendingUp } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  changeColor?: string;
}

export default function StatCard({
  label,
  value,
  change,
  icon,
  changeColor = "#10B981",
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-700/70 bg-slate-800 p-6 min-w-[200px] shadow-lg shadow-black/20 transition-shadow duration-150 ease-in-out">
      {/* Row 1: Label + Icon */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">{label}</span>
        {icon}
      </div>

      {/* Row 2: Value */}
      <div className="text-3xl font-bold leading-9 tracking-tight text-white">
        {value}
      </div>

      {/* Row 3: Change */}
      <div className="flex items-center gap-1">
        <TrendingUp size={14} color={changeColor} />
        <span className="text-xs font-medium" style={{ color: changeColor }}>
          {change}
        </span>
        <span className="ml-1 text-xs text-slate-500">vs last month</span>
      </div>
    </div>
  );
}
