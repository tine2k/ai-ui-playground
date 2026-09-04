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
        className="mobile-menu-btn fixed top-4 left-4 z-[30] flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-[#E5E7EB] transition-colors hover:bg-[#F3F4F6]"
        aria-label="Open menu"
      >
        <Menu size={24} color="#374151" />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop fixed inset-0 z-[29] bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className="sidebar fixed top-0 left-0 z-[20] flex h-full flex-col bg-[#1E293B] transition-all duration-200 ease-in-out max-md:shadow-lg"
        data-open={mobileOpen ? "true" : "false"}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 z-[31] flex h-8 w-8 items-center justify-center rounded-lg text-[#94A3B8] transition-colors hover:text-white mobile-close-btn"
        >
          <X size={20} />
        </button>

        {/* Logo area */}
        <div className="flex h-16 shrink-0 items-center px-4">
          <span className="logo-full text-[18px] font-bold tracking-[-0.025em] text-white">
            Acme Inc
          </span>
          <span className="logo-icon hidden text-lg font-bold text-white">
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
                nav-link flex h-10 items-center gap-3 rounded-lg px-4 mb-1 text-[14px] font-medium transition-colors duration-150 ease-in-out
                ${item.active
                  ? "nav-link-active bg-[#334155] text-white"
                  : "text-[#94A3B8] hover:bg-[#334155] hover:text-[#CBD5E1]"
                }
              `}
            >
              <item.icon size={20} className="shrink-0" />
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom user section */}
        <div className="user-section p-4">
          <div className="mb-4 h-px bg-[#334155]" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-[14px] font-semibold text-white">
              MM
            </div>
            <div className="user-info min-w-0">
              <div className="truncate text-[14px] font-medium text-white">
                Martin Maier
              </div>
              <div className="truncate text-[12px] text-[#94A3B8]">
                martin@acme.com
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
