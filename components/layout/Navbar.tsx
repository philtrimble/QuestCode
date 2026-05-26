"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border/50 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-glow rounded-lg flex items-center justify-center shadow-glow-purple">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
              QuestCode
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#themes" className="text-slate-400 hover:text-white text-sm transition-colors">
              Themes
            </Link>
            <Link href="/#languages" className="text-slate-400 hover:text-white text-sm transition-colors">
              Languages
            </Link>
            <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-slate-400 hover:text-white text-sm transition-colors px-4 py-2">
              Sign in
            </Link>
            <Link href="/signup" className="btn-primary text-sm py-2 px-5">
              Start coding free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-4 space-y-3">
          <Link href="/#themes" className="block text-slate-300 py-2" onClick={() => setOpen(false)}>Themes</Link>
          <Link href="/#languages" className="block text-slate-300 py-2" onClick={() => setOpen(false)}>Languages</Link>
          <Link href="/pricing" className="block text-slate-300 py-2" onClick={() => setOpen(false)}>Pricing</Link>
          <hr className="border-brand-border" />
          <Link href="/login" className="block text-slate-300 py-2" onClick={() => setOpen(false)}>Sign in</Link>
          <Link href="/signup" className="btn-primary block text-center" onClick={() => setOpen(false)}>Start coding free</Link>
        </div>
      )}
    </nav>
  );
}
