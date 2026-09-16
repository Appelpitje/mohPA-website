import React from 'react';
import { ExternalLink, ShieldAlert, Heart } from 'lucide-react';

interface FooterProps {
  portalUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  return (
    <footer className="bg-sand-50 border-t border-sand-200 py-16 text-ink-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-olive-900 flex items-center justify-center p-1 text-olive-200">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="2.5" fill="#9b2d1f" />
                </svg>
              </div>
              <span className="font-bold text-lg text-ink tracking-tight font-sans">
                mohPA
              </span>
            </div>

            <p className="text-ink-muted leading-relaxed max-w-md">
              An independent, community-driven preservation initiative dedicated to keeping Medal of Honor: Pacific Assault multiplayer functional and accessible.
            </p>

            <div className="font-mono text-[11px] text-ink-faint">
              Master Server: mohpa.net (178.105.150.25) · FESL 18020 / Matchmaking 18275
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-ink uppercase tracking-wider font-mono text-[11px]">
              Surface Navigation
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#story" className="hover:text-ink transition-colors">
                  The Revival Story
                </a>
              </li>
              <li>
                <a href="#deployment" className="hover:text-ink transition-colors">
                  Client Setup Guide
                </a>
              </li>
              <li>
                <a href="#servers" className="hover:text-ink transition-colors">
                  Active Server Roster
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ink transition-colors">
                  Protocol &amp; Netcode
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink transition-colors">
                  Troubleshooting FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* External Operations */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-semibold text-ink uppercase tracking-wider font-mono text-[11px]">
              Community Services
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-olive-800 hover:text-olive-900 transition-colors"
                >
                  <span>Player Management Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/downloads/mohPA-Client-Patch.zip"
                  download="mohPA-Client-Patch.zip"
                  className="hover:text-ink transition-colors"
                >
                  Client Patch Download (v1.2)
                </a>
              </li>
              <li>
                <a
                  href={`${portalUrl}/setup?tab=dedicated`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  Dedicated Server Hosting Guide
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-sand-200 pt-8 space-y-3 text-[11px] text-ink-faint leading-relaxed">
          <p>
            Medal of Honor and Medal of Honor: Pacific Assault are registered trademarks of Electronic Arts Inc. 
            mohPA is an independent, non-commercial software preservation project created by fans and is not affiliated with, endorsed by, or sponsored by Electronic Arts Inc. All original game assets, trademarks, and registered trademarks are property of their respective owners.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-ink-faint font-mono">
            <span>© 2004–2026 mohPA Preservation Initiative. Released under community fair-use preservation.</span>
            <span>Client Build v1.2.0.0 Compatible</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
