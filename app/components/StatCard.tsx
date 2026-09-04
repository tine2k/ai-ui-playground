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
    <div
      className="flex flex-col gap-4 rounded-xl border border-[#E5E7EB] bg-white p-6 min-w-[200px] transition-shadow duration-150 ease-in-out"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)";
      }}
    >
      {/* Row 1: Label + Icon */}
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-medium text-[#6B7280]">
          {label}
        </span>
        {icon}
      </div>

      {/* Row 2: Value */}
      <div
        className="text-[30px] font-bold leading-9 tracking-[-0.025em] text-[#111827]"
      >
        {value}
      </div>

      {/* Row 3: Change */}
      <div className="flex items-center gap-1">
        <TrendingUp size={14} color={changeColor} />
        <span
          className="text-[12px] font-medium"
          style={{ color: changeColor }}
        >
          {change}
        </span>
        <span className="ml-1 text-[12px] text-[#9CA3AF]">vs last month</span>
      </div>
    </div>
  );
}
