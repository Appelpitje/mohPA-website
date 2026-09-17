import React from 'react';
import { Gamepad2, Users, FolderArchive, Radio } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-sand-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Multiplayer features and player resources.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            Use the game’s Multiplayer screen to sign in and find community servers. The client patch and player portal support setup, accounts, and getting into a game.
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
                In-Game Server Browser
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                After completing setup and signing in, open the internet server list in Medal of Honor: Pacific Assault to browse mohPA servers. Which servers and players you find depends on current community activity.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              Find games from the Multiplayer menu.
            </div>
          </div>

          {/* Feature 2: Tall/Medium Card */}
          <div className="md:col-span-5 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Player Accounts
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Register a mohPA account on the player portal before you play. Use your account credentials at the game’s Multiplayer login screen; installing the patch does not sign you in automatically.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              A mohPA account is a setup prerequisite.
            </div>
          </div>

          {/* Feature 3: Medium Card */}
          <div className="md:col-span-5 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <FolderArchive className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Community Client Patch
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Download the complete archive and read the current setup guide before installing. The patch works with your existing stock v1.2 game installation; it does not supply the game or replace the official v1.2 update.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-olive-700 font-medium">
              Keep a backup of your original installation.
            </div>
          </div>

          {/* Feature 4: Wide Card */}
          <div className="md:col-span-7 bg-sand-100 border border-sand-200 rounded-xl p-8 shadow-tactical flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ink">
                Community Server Hosting
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                Community hosts provide the game servers players join. If you want to run a server, start with the dedicated server guide on the portal and check its current requirements before choosing a host or configuring your machine.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-sand-200 font-mono text-xs text-ink-faint">
              Hosting documentation is available on the player portal.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
