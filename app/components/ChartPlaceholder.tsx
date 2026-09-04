import { BarChart3, ChevronDown } from "lucide-react";

export default function ChartPlaceholder() {
  return (
    <div
      className="rounded-xl border border-[#E5E7EB] bg-white"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-0">
        <h2 className="text-[16px] font-semibold text-[#111827]">
          Revenue Overview
        </h2>
        <button className="flex items-center gap-1 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[14px] font-medium text-[#374151] transition-colors duration-150 ease-in-out hover:bg-[#F9FAFB]">
          Last 7 days
          <ChevronDown size={16} color="#6B7280" />
        </button>
      </div>

      {/* Chart area */}
      <div className="p-6">
        <div className="flex h-[320px] items-center justify-center rounded-lg border border-dashed border-[#E5E7EB] bg-[#F9FAFB] max-md:h-[240px]">
          <div className="flex flex-col items-center">
            <BarChart3 size={48} color="#D1D5DB" />
            <span className="mt-4 text-[14px] text-[#9CA3AF]">
              Chart placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
