import { BarChart3, ChevronDown } from "lucide-react";

export default function ChartPlaceholder() {
  return (
    <div className="rounded-xl border border-slate-700/70 bg-slate-800 shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-0">
        <h2 className="text-base font-semibold text-white">
          Revenue Overview
        </h2>
        <button className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-150 ease-in-out hover:bg-slate-700">
          Last 7 days
          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>

      {/* Chart area */}
      <div className="p-6">
        <div className="flex h-80 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900/40 max-md:h-60">
          <div className="flex flex-col items-center">
            <BarChart3 size={48} className="text-slate-600" />
            <span className="mt-4 text-sm text-slate-500">
              Chart placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
