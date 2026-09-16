import React from 'react';
import { RefreshCw, Radio, Shield, Network, Cpu, ArrowRight } from 'lucide-react';

export const RevivalStory: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-sand-100 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            A clean-room restoration of 2004 multiplayer engineering.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            When GameSpy and EA FESL infrastructure closed down in 2014, Medal of Honor: Pacific Assault lost its global heartbeat. Rather than letting the title fade into abandonware, the mohPA initiative reverse-engineered the network handshake to restore native in-game connectivity.
          </p>
        </div>

        {/* Narrative & Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <div className="lg:col-span-6 bg-sand-50 border border-sand-200 rounded-xl p-8 shadow-tactical space-y-5">
            <h3 className="text-xl font-bold text-ink">
              The problem with legacy revival methods
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Earlier community attempts relied on virtual LANs like Hamachi, manual IP entry through developer consoles, or destructive edits to the Windows <code className="text-xs bg-sand-200 px-1 py-0.5 rounded text-ink font-mono">hosts</code> file. These methods were fragile, triggered administrative permission errors, and failed to restore the in-game server browser or persistent soldier statistics.
            </p>
            <div className="pt-2 border-t border-sand-200 text-xs font-mono text-ink-faint">
              STATUS: Retired legacy workarounds replaced by automated 17 KB patcher.
            </div>
          </div>

          <div className="lg:col-span-6 bg-sand-50 border border-sand-200 rounded-xl p-8 shadow-tactical space-y-5">
            <h3 className="text-xl font-bold text-ink">
              How the mohPA architecture works
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              mohPA implements an independent FESL authentication daemon and matchmaking master server. By patching obsolete 2004 SSL 2.0 checks and remapping filtered peerchat ports directly in <code className="text-xs bg-sand-200 px-1 py-0.5 rounded text-ink font-mono">mohpa.exe</code>, the client communicates cleanly with <code className="text-xs bg-sand-200 px-1 py-0.5 rounded text-ink font-mono">178.105.150.25</code>. The game receives authentic packets, logs your soldier in, and loads the active server browser seamlessly.
            </p>
            <div className="pt-2 border-t border-sand-200 text-xs font-mono text-olive-700 font-medium">
              RESULT: Authentic 2004 multiplayer protocol restored.
            </div>
          </div>

        </div>

        {/* Tactical Pipeline Flow */}
        <div className="bg-sand-50 border border-sand-300 rounded-xl p-6 sm:p-8 shadow-tactical">
          <div className="border-b border-sand-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-ink">
                Network Flow &amp; Packet Routing Pipeline
              </h3>
              <p className="text-xs text-ink-faint font-mono mt-0.5">
                Full protocol restoration with instant 1-click rollback
              </p>
            </div>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-sand-200 text-ink border border-sand-300 self-start sm:self-auto">
              END-TO-END FLOW
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Stage 1 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                <span>MOHPA.EXE (v1.2)</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                The original 2004 retail executable launches and initiates multiplayer calls to legacy EA server endpoints.
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Patched: SSL bypass &amp; port 18270
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Network className="w-4 h-4" />
                <span>mohPA Master (178.105.150.25)</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Authenticates account credentials over FESL (Port 18020) and serves real-time server listings via Matchmaking (Port 18275).
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Proto: FESL / Matchmaking SSL &amp; TCP
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-sand-100 border border-sand-200 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 text-olive-800 font-mono text-xs font-semibold">
                <Radio className="w-4 h-4" />
                <span>Dedicated Servers</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Your game client connects directly to community game servers via low-latency UDP packets for actual combat gameplay.
              </p>
              <div className="font-mono text-[11px] text-ink-faint bg-sand-50 p-2 rounded border border-sand-200">
                Gameplay: Raw UDP (Direct P2S)
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
