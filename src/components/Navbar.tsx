import React, { useState } from 'react';
import { Menu, X, ExternalLink, Shield, Radio, Terminal } from 'lucide-react';

interface NavbarProps {
  portalUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-md bg-olive-900 border border-olive-700 flex items-center justify-center p-1.5 shadow-sm group-hover:border-olive-500 transition-colors">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-olive-200">
              <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="2.5" fill="#9b2d1f" />
              <path d="M16 2V8M16 24V30M2 16H8M24 16H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-xl tracking-tight text-ink">
                mohPA
              </span>
              <span className="text-[11px] font-mono uppercase px-1.5 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200 font-medium">
                Revival
              </span>
            </div>
            <p className="text-[10px] text-ink-faint hidden sm:block tracking-wide uppercase">
              Medal of Honor: Pacific Assault Master Server
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-muted">
          <a href="#story" className="hover:text-ink transition-colors">
            The Revival
          </a>
          <a href="#deployment" className="hover:text-ink transition-colors">
            How to Connect
          </a>
          <a href="#servers" className="hover:text-ink transition-colors">
            Live Servers
          </a>
          <a href="#features" className="hover:text-ink transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-ink transition-colors">
            FAQ
          </a>
        </nav>

        {/* Live Status & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-olive-50 border border-olive-200 text-xs font-mono text-olive-800">
            <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse"></span>
            <span>Master Server Online</span>
          </div>

          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-olive-800 text-sand-50 hover:bg-olive-900 border border-olive-900 text-sm font-medium transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-olive-600 focus-visible:ring-offset-2"
          >
            <span>Player Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-olive-300" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-olive-800 text-sand-50 text-xs font-medium"
          >
            <span>Portal</span>
            <ExternalLink className="w-3 h-3 text-olive-300" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-sand-200 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sand-200 bg-sand-50 px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 px-2 py-1 text-xs font-mono text-olive-800 bg-olive-50 rounded border border-olive-200">
            <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse"></span>
            <span>Master Server: mohpa.net (Online)</span>
          </div>
          <div className="flex flex-col space-y-2 pt-2 text-sm font-medium">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-sand-200 text-ink"
            >
              The Revival
            </a>
            <a
              href="#deployment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-sand-200 text-ink"
            >
              How to Connect
            </a>
            <a
              href="#servers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-sand-200 text-ink"
            >
              Live Servers
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-sand-200 text-ink"
            >
              Features
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-sand-200 text-ink"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
