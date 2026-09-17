import React from 'react';
import { Radio, Network, Cpu } from 'lucide-react';

export const RevivalStory: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-sand-100 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            A community project for Pacific Assault multiplayer.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            mohPA brings players together around Medal of Honor: Pacific Assault. The community client patch is intended for the game’s v1.2 installation and lets players use a mohPA account and the in-game internet server browser.
          </p>
        </div>

        {/* Narrative & Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <div className="lg:col-span-6 bg-sand-50 border border-sand-200 rounded-xl p-8 shadow-tactical space-y-5">
            <h3 className="text-xl font-bold text-ink">
              Start with the game you already own
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              You need a stock Medal of Honor: Pacific Assault installation updated to v1.2. The community patch is a separate download, not a copy of the game or the official game update. Check the current setup guide before changing your installation.
            </p>
            <div className="pt-2 border-t border-sand-200 text-xs font-mono text-ink-faint">
              PREREQUISITE: Stock game v1.2 and a mohPA account.
            </div>
          </div>

          <div className="lg:col-span-6 bg-sand-50 border border-sand-200 rounded-xl p-8 shadow-tactical space-y-5">
            <h3 className="text-xl font-bold text-ink">
              Keep setup and sign-in separate
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Installing the patch is only part of setup. Follow the maintained guide for the current installation and network configuration steps. After setup, fully quit and restart the game, then sign in with your mohPA account on the Multiplayer screen.
            </p>
            <div className="pt-2 border-t border-sand-200 text-xs font-mono text-olive-700 font-medium">
              NEXT STEP: Open the in-game internet server list.
            </div>
          </div>

        </div>

        {/* Tactical Pipeline Flow */}
        <div className="bg-sand-50 border border-sand-300 rounded-xl p-6 sm:p-8 shadow-tactical">
          <div className="border-b border-sand-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-ink">
                From your game installation to a community server
              </h3>
              <p className="text-xs text-ink-faint font-mono mt-0.5">
                Game, account, and server each have a role
              </p>
            </div>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-sand-200 text-ink border border-sand-300 self-start sm:self-auto">
              PLAYER OVERVIEW
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Stage 1 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                Game Installation (v1.2)
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Start with your existing game, then follow the current guide to configure it for mohPA multiplayer.
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Game v1.2 is a prerequisite, not the community patch version.
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Network className="w-4 h-4" />
                mohPA Account
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Create an account on the player portal and use those credentials at the game’s Multiplayer login screen.
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Sign-in happens in-game; it is not automatic.
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Radio className="w-4 h-4" />
                Community Servers
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Open the internet server browser to find a game. The servers available to join depend on what community hosts are running.
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Server availability and player activity can change.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
