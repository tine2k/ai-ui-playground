"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-[10] flex h-16 items-center justify-between border-b border-slate-700 bg-slate-800">
      <h1 className="text-2xl font-bold leading-8 tracking-tight text-white">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative max-sm:hidden">
          <Search
            size={16}
            color="#94A3B8"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-60 rounded-lg border border-slate-700 bg-slate-900 pl-9 pr-3 text-sm text-white placeholder-slate-500 transition-all duration-150 ease-in-out focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-[0_0_0_3px_rgba(59,130,246,0.3)]"
          />
        </div>

        {/* Notification bell */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-slate-700">
          <Bell size={20} color="#94A3B8" />
          <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User avatar */}
        <div className="group flex cursor-pointer items-center gap-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white transition-opacity group-hover:opacity-90">
            MM
          </div>
          <ChevronDown size={14} color="#94A3B8" className="ml-1" />
        </div>
      </div>
    </header>
  );
}
