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
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 min-w-[200px] shadow-sm transition-shadow duration-150 ease-in-out">
      {/* Row 1: Label + Icon */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {icon}
      </div>

      {/* Row 2: Value */}
      <div className="text-3xl font-bold leading-9 tracking-tight text-gray-900">
        {value}
      </div>

      {/* Row 3: Change */}
      <div className="flex items-center gap-1">
        <TrendingUp size={14} color={changeColor} />
        <span className="text-xs font-medium" style={{ color: changeColor }}>
          {change}
        </span>
        <span className="ml-1 text-xs text-gray-400">vs last month</span>
      </div>
    </div>
  );
}
