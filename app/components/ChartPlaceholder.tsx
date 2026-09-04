import { BarChart3, ChevronDown } from "lucide-react";

export default function ChartPlaceholder() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-0">
        <h2 className="text-base font-semibold text-gray-900">
          Revenue Overview
        </h2>
        <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 ease-in-out hover:bg-gray-50">
          Last 7 days
          <ChevronDown size={16} color="#6B7280" />
        </button>
      </div>

      {/* Chart area */}
      <div className="p-6">
        <div className="flex h-80 items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 max-md:h-60">
          <div className="flex flex-col items-center">
            <BarChart3 size={48} color="#D1D5DB" />
            <span className="mt-4 text-sm text-gray-400">
              Chart placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
