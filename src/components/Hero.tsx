import React from 'react';
import { Download, ArrowRight, CheckCircle2, ShieldCheck, Check } from 'lucide-react';

interface HeroProps {
  portalUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  const verifiedFeatures = [
    {
      title: 'In-Game Account Login',
      status: 'Works natively',
      description: 'Authenticates your soldier account directly inside the 2004 game client.',
    },
    {
      title: 'Live Server Browser',
      status: 'Works in-engine',
      description: 'Browse, filter, and ping active servers without leaving the game.',
    },
    {
      title: 'Matchmaking & Lobbies',
      status: 'Fully restored',
      description: 'Lobby matchmaking, team selection, and map rotations work seamlessly.',
    },
    {
      title: 'Soldier Personas',
      status: 'Active',
      description: 'Enlist and customize up to 4 distinct soldier personas on your account.',
    },
    {
      title: 'Dedicated Server Hosting',
      status: 'Operational',
      description: 'Host and join low-ping community dedicated servers on Linux & Windows.',
    },
    {
      title: 'Direct Connect',
      status: 'Supported',
      description: 'Join via console IP or standard LAN with no virtual network drivers.',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-sand-200">
      {/* Subtle paper grain / canvas atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#d4ccb8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Pitch */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.1]">
              Pacific multiplayer is live again.
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
              Electronic Arts retired the official master server a decade ago. 
              <strong className="text-ink font-semibold"> mohPA</strong> restores authentic multiplayer for 
              Medal of Honor: Pacific Assault (2004)—featuring in-engine matchmaking, dedicated community servers, 
              and persistent soldier personas.
            </p>

            {/* Direct Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/downloads/mohPA-Client-Patch.zip"
                download="mohPA-Client-Patch.zip"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stamp-500 hover:bg-stamp-600 active:bg-stamp-700 text-sand-50 font-semibold text-base transition-all shadow-stamp-action border border-stamp-700 focus-visible:ring-2 focus-visible:ring-stamp-500"
              >
                <Download className="w-5 h-5 text-sand-100" />
                <span>Download Client Patch</span>
                <span className="text-xs bg-stamp-700/70 text-sand-200 px-2 py-0.5 rounded font-mono font-normal">
                  v1.2 · 5.2 MB
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

            {/* Reassurance & Verification Proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-ink-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>No hosts-file modification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Works in-game natively</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Free &amp; community driven</span>
              </div>
            </div>
          </div>

          {/* Right Side: What Works Again (Player-Facing Operational Status) */}
          <div className="lg:col-span-5">
            <div className="bg-sand-50 border border-sand-300 rounded-xl p-6 shadow-tactical space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-sand-200 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-olive-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                    Multiplayer Revival Status
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200 font-medium">
                  ALL SYSTEMS ONLINE
                </span>
              </div>

              {/* What Works List */}
              <div className="divide-y divide-sand-200/80">
                {verifiedFeatures.map((feat, idx) => (
                  <div key={idx} className="py-2.5 first:pt-1 last:pb-1 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-ink flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-olive-700 shrink-0 stroke-[2.5]" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-[11px] text-ink-muted pl-5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-olive-50 text-olive-800 border border-olive-200 shrink-0 font-medium self-start mt-0.5">
                      {feat.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Player-Friendly Reassurance Note */}
              <div className="p-3 bg-olive-50 border border-olive-200 rounded-lg text-xs leading-relaxed text-olive-900">
                <p className="font-semibold text-olive-950 mb-0.5">
                  No third-party VPN software needed
                </p>
                Forget Hamachi, Tunngle, or manual console commands. Extract the patch once, launch MOHPA, and play multiplayer natively just like in 2004.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
