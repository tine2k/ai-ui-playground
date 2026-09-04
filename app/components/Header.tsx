"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="header-bar sticky top-0 z-[10] flex h-16 items-center justify-between border-b border-[#E5E7EB] bg-white">
      <h1 className="text-[24px] font-bold leading-8 tracking-[-0.025em] text-[#111827]">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative max-sm:hidden">
          <Search
            size={16}
            color="#9CA3AF"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-60 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] pl-9 pr-3 text-[14px] text-[#111827] placeholder-[#9CA3AF] transition-all duration-150 ease-in-out focus:border-[#3B82F6] focus:bg-white focus:outline-none focus:ring-[0_0_0_3px_rgba(59,130,246,0.1)]"
          />
        </div>

        {/* Notification bell */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#F3F4F6]">
          <Bell size={20} color="#6B7280" />
          <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-[#EF4444]" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-1 cursor-pointer group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6] text-[12px] font-semibold text-white group-hover:opacity-90 transition-opacity">
            MM
          </div>
          <ChevronDown size={14} color="#6B7280" className="ml-1" />
        </div>
      </div>
    </header>
  );
}
