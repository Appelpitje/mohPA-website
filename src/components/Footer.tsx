import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const GITHUB_REPOS = [
  { href: 'https://github.com/Appelpitje/mohPA-frontend', label: 'Portal source' },
  { href: 'https://github.com/Appelpitje/mohPA-backend', label: 'Master server source' },
  { href: 'https://github.com/Appelpitje/mohPA-website', label: 'Website source' },
] as const;

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
              Maintained by <a href="https://github.com/Appelpitje" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">Appelpitje</a>.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-semibold text-ink uppercase tracking-wider font-mono text-[11px]">
              Explore mohPA
            </h2>
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
                  Server List
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ink transition-colors">
                  Community Features
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
            <h2 className="font-semibold text-ink uppercase tracking-wider font-mono text-[11px]">
              Community &amp; Source Code
            </h2>
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
                  Client Patch Download
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
              <li>
                <a
                  href="https://github.com/Appelpitje/mohPA-website/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  Website Support &amp; Issue Reports
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              {GITHUB_REPOS.map((repo) => (
                <li key={repo.href}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>{repo.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-sand-200 pt-8 space-y-3 text-[11px] text-ink-faint leading-relaxed">
          <p>
            Medal of Honor: Pacific Assault is an Electronic Arts game. mohPA is a community project, not an official Electronic Arts service.
          </p>
        </div>

      </div>
    </footer>
  );
};
