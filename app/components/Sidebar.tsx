"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
  X,
  Menu,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Reports", icon: FileText, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-[30] flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 transition-colors hover:bg-gray-100 md:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} color="#374151" />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[29] bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[20] flex h-full flex-col bg-slate-800 transition-all duration-200 ease-in-out
          w-60 md:w-16 xl:w-60 md:translate-x-0 max-md:shadow-lg
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 z-[31] flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white md:hidden"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Logo area */}
        <div className="flex h-16 shrink-0 items-center px-4">
          <span className="text-lg font-bold tracking-tight text-white xl:inline hidden">
            Acme Inc
          </span>
          <span className="hidden text-lg font-bold text-white md:flex xl:hidden">
            A
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pt-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`
                flex h-10 items-center gap-3 rounded-lg px-4 md:justify-center md:px-0 xl:justify-start xl:px-4 mb-1 text-sm font-medium transition-colors duration-150 ease-in-out
                ${item.active
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:bg-slate-700 hover:text-slate-300"
                }
              `}
            >
              <item.icon size={20} className="shrink-0" />
              <span className="md:hidden xl:inline">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom user section */}
        <div className="p-4 md:flex md:justify-center xl:block">
          <div className="mb-4 hidden h-px bg-slate-700 xl:block" />
          <div className="flex items-center gap-3 md:justify-center xl:justify-start">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
              MM
            </div>
            <div className="hidden min-w-0 xl:block">
              <div className="truncate text-sm font-medium text-white">
                Martin Maier
              </div>
              <div className="truncate text-xs text-slate-400">
                martin@acme.com
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
