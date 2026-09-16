import React from 'react';
import { Gamepad2, UserCheck, ShieldCheck, Activity, Terminal, Radio } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-sand-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Authentic preservation. Modern stability.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            mohPA treats Medal of Honor: Pacific Assault as historic software worth keeping playable. We reverse-engineered the networking stack from packet captures to guarantee 100% native behavior.
          </p>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Feature 1: Wide Card */}
          <div className="md:col-span-7 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Original In-Engine Matchmaking
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                You do not need to alt-tab to a third-party desktop launcher to find a match. Once patched, clicking "Multiplayer" inside Medal of Honor: Pacific Assault brings up the authentic 2004 server browser, ping meters, player rosters, and game settings natively.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              Architecture: EA FESL &amp; Matchmaking Protocol v1.2 emulation
            </div>
          </div>

          {/* Feature 2: Tall/Medium Card */}
          <div className="md:col-span-5 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Soldier Personas
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Create and manage up to four unique soldier personas per account. Enlist multiple callsigns for different clans, roles, or tournaments without needing separate master accounts.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              Account Limit: 4 Active Personas per soldier
            </div>
          </div>

          {/* Feature 3: Medium Card */}
          <div className="md:col-span-5 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Zero System Intrusion
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Our client patch operates strictly in the game's user memory space via a lightweight Winsock hook. It leaves your Windows system files, network adapters, and hosts file completely untouched. To uninstall, simply delete the file.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-olive-700 font-medium">
              Integrity: Clean removal with zero residual registry artifacts
            </div>
          </div>

          {/* Feature 4: Wide Card */}
          <div className="md:col-span-7 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Dedicated Community Infrastructure
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                The master server operates on a high-availability European VPS node with low-latency peering across Europe, North America, and Asia. Game servers run at authentic tickrates with UDP optimization to preserve original weapon ballistics and soldier movement physics.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              Infrastructure: 178.105.150.25 (Master) + Distributed Dedicated Hosts
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
