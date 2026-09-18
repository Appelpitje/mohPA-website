import React from 'react';
import { Download, ArrowRight, BookOpen, Gamepad2, Users } from 'lucide-react';

interface HeroProps {
  portalUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  const features = [
    {
      title: 'In-Game Login',
      category: 'Account',
      description: 'Use your mohPA account on the game’s Multiplayer login screen.',
    },
    {
      title: 'Internet Server Browser',
      category: 'Discover',
      description: 'Find community servers from inside Medal of Honor: Pacific Assault.',
    },
    {
      title: 'Community Multiplayer',
      category: 'Play',
      description: 'Join other players on community-run game servers.',
    },
    {
      title: 'Player Portal',
      category: 'Community',
      description: 'Create your account and find player resources on the mohPA portal.',
    },
    {
      title: 'Client Setup Guide',
      category: 'Prepare',
      description: 'Check prerequisites and current setup instructions before installing.',
    },
    {
      title: 'Server Hosting Guide',
      category: 'Hosting',
      description: 'Read the portal’s dedicated server guide if you want to host a game.',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-sand-200">
      {/* Subtle paper grain / canvas atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen dark:opacity-30"
        style={{
          backgroundImage: 'radial-gradient(var(--hero-grid-dot, #d4ccb8) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Pitch */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.1]">
              Play Medal of Honor: Pacific Assault multiplayer again
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
              <strong className="text-ink font-semibold">mohPA</strong> is a community multiplayer project for
              Medal of Honor: Pacific Assault. Start with a stock game installation updated to v1.2,
              create a mohPA account, and follow the setup guide to use the community client patch.
            </p>

            {/* Direct Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/downloads/mohPA-Client-Patch.zip"
                download="mohPA-Client-Patch.zip"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stamp-500 hover:bg-stamp-600 active:bg-stamp-700 text-white font-semibold text-base transition-all shadow-stamp-action border border-stamp-700 focus-visible:ring-2 focus-visible:ring-stamp-500"
              >
                <Download className="w-5 h-5 text-white/90" />
                <span>Download Client Patch</span>
                <span className="text-xs bg-stamp-700/70 text-white/90 px-2 py-0.5 rounded font-mono font-normal">
                  Community ZIP
                </span>
              </a>

              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sand-50 hover:bg-sand-200 border border-sand-300 text-ink font-semibold text-base transition-all shadow-tactical hover:border-sand-400"
              >
                <span>Enlist on Player Portal</span>
                <ArrowRight className="w-4 h-4 text-olive-700" />
              </a>
            </div>

            {/* Setup essentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-ink-muted">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Requires game v1.2</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-olive-600 shrink-0" />
                <span>mohPA account required</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-olive-600 shrink-0" />
                <a href={`${portalUrl}/setup`} className="underline underline-offset-2 hover:text-ink">Read the setup guide</a>
              </div>
            </div>
          </div>

          {/* Right Side: Multiplayer features and resources */}
          <div className="lg:col-span-5">
            <div className="bg-sand-50 border border-sand-300 rounded-xl p-6 shadow-tactical space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-sand-200 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <Gamepad2 className="w-4 h-4 text-olive-700" />
                  <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                    Multiplayer Features
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200 font-medium">
                  COMMUNITY PROJECT
                </span>
              </div>

              {/* Feature List */}
              <div className="divide-y divide-sand-200/80">
                {features.map((feat, idx) => (
                  <div key={idx} className="py-2.5 first:pt-1 last:pb-1 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-ink flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-olive-700 shrink-0 stroke-[2.5]" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-[11px] text-ink-muted pl-5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-olive-50 text-olive-800 border border-olive-200 shrink-0 font-medium self-start mt-0.5">
                      {feat.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Setup reminder */}
              <div className="p-3 bg-olive-50 border border-olive-200 rounded-lg text-xs leading-relaxed text-olive-900">
                <p className="font-semibold text-olive-950 mb-0.5">
                  Read the guide before installing
                </p>
                Download the full community patch archive, not an individual file. Check the current setup guide for installation and network configuration, then sign in with your mohPA account in-game.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
