import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface DeploymentGuideProps {
  portalUrl?: string;
}

export const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {

  return (
    <section id="deployment" className="py-20 lg:py-28 bg-sand-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            How to set up Pacific Assault multiplayer.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            Prepare your game and account, then follow the maintained public setup guide. Installation and network configuration may vary; check the current instructions before making changes.
          </p>
        </div>

        {/* Step-by-Step Dispatch Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="bg-sand-100 border border-sand-200 rounded-xl p-7 flex flex-col justify-between shadow-tactical">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                  STEP 1
                </span>
                <span className="text-xs font-mono text-ink-faint">PREREQUISITE</span>
              </div>
              <h3 className="text-xl font-bold text-ink">
                Prepare MOHPA v1.2
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                You need a stock Medal of Honor: Pacific Assault installation updated to game version <strong className="text-ink">v1.2</strong>. The community patch is a separate download and does not include the game or the official game update. Keep a backup of your original installation.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-sand-200 text-xs text-ink-faint font-mono">
              Game requirement: v1.2 · Community patch: separate ZIP
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-sand-100 border border-sand-200 rounded-xl p-7 flex flex-col justify-between shadow-tactical">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                  STEP 2
                </span>
                <span className="text-xs font-mono text-ink-faint">SETUP GUIDE</span>
              </div>
              <h3 className="text-xl font-bold text-ink">
                Download and follow the guide
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Download the complete community client patch archive. Use the current public guide for installation and any required network configuration. Do not assume extracting the archive completes setup, and check the guide if the download differs from older instructions.
              </p>

              <a
                href={`${portalUrl}/setup`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-800 hover:text-olive-900 underline underline-offset-2"
              >
                <span>Read the current client setup guide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-6 mt-6 border-t border-sand-200 text-xs text-olive-700 font-mono font-medium">
              Check current instructions before changing game or system files.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-sand-100 border border-sand-200 rounded-xl p-7 flex flex-col justify-between shadow-tactical">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                  STEP 3
                </span>
                <span className="text-xs font-mono text-ink-faint">DEPLOYMENT</span>
              </div>
              <h3 className="text-xl font-bold text-ink">
                Create an account and sign in
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Register a mohPA account on the player portal. Once setup is complete, fully quit and restart the game, open Multiplayer, and log in with that account. Then open the internet server list to find a community server.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sand-200">
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-800 hover:text-olive-900 transition-colors"
              >
                <span>Register Account on Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Download Callout Card */}
        <div className="bg-sand-100 border border-sand-300 rounded-xl p-8 shadow-tactical flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-ink">
                mohPA Community Client Patch
              </h3>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                ZIP DOWNLOAD
              </span>
            </div>
            <p className="text-sm text-ink-muted max-w-xl">
              For an existing Medal of Honor: Pacific Assault v1.2 installation. Follow the current portal setup guide before installing; this archive is not the game or the official v1.2 update.
            </p>
            <p className="text-xs font-mono text-ink-faint">
              Package: mohPA-Client-Patch.zip · No community patch version published here
            </p>
          </div>

          <a
            href="/downloads/mohPA-Client-Patch.zip"
            download="mohPA-Client-Patch.zip"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stamp-500 hover:bg-stamp-600 active:bg-stamp-700 text-sand-50 font-semibold text-sm transition-all shadow-stamp-action border border-stamp-700 shrink-0"
          >
            <Download className="w-4 h-4 text-sand-100" />
            <span>Download Client Patch</span>
          </a>
        </div>

      </div>
    </section>
  );
};
