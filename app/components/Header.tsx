"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-[10] flex h-16 items-center justify-between border-b border-gray-200 bg-white">
      <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900">
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
            className="h-10 w-60 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-150 ease-in-out focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-[0_0_0_3px_rgba(59,130,246,0.1)]"
          />
        </div>

        {/* Notification bell */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-gray-100">
          <Bell size={20} color="#6B7280" />
          <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User avatar */}
        <div className="group flex cursor-pointer items-center gap-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white transition-opacity group-hover:opacity-90">
            MM
          </div>
          <ChevronDown size={14} color="#6B7280" className="ml-1" />
        </div>
      </div>
    </header>
  );
}
