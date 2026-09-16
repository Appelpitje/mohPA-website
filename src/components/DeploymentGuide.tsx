import React, { useState } from 'react';
import { Download, FolderCheck, KeyRound, Check, Copy, ExternalLink, HelpCircle } from 'lucide-react';

interface DeploymentGuideProps {
  portalUrl?: string;
}

export const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ portalUrl = 'https://portal.mohpa.net' }) => {
  const [copiedPath, setCopiedPath] = useState(false);
  const defaultPath = 'C:\\Program Files (x86)\\EA GAMES\\Medal of Honor Pacific Assault';

  const handleCopyPath = () => {
    navigator.clipboard.writeText(defaultPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <section id="deployment" className="py-20 lg:py-28 bg-sand-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Three steps from desktop to the frontlines.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            Deployment takes under three minutes. No complicated command lines, registry modifications, or external networking tunnels are needed.
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
                Ensure you have a clean retail or digital installation of Medal of Honor: Pacific Assault updated to official patch <strong className="text-ink">v1.2</strong>. (Both original CD/DVD releases and EA/Origin or GOG releases are supported).
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-sand-200 text-xs text-ink-faint font-mono">
              Executable check: mohpa.exe (v1.2.0.0)
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-sand-100 border border-sand-200 rounded-xl p-7 flex flex-col justify-between shadow-tactical">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                  STEP 2
                </span>
                <span className="text-xs font-mono text-ink-faint">PATCH &amp; HOSTS</span>
              </div>
              <h3 className="text-xl font-bold text-ink">
                Run Patch-MOHPA.bat
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Extract the 17 KB patch archive into your game directory alongside <code className="text-xs bg-sand-200 px-1 py-0.5 rounded font-mono">mohpa.exe</code>. Double-click <strong className="text-ink">Patch-MOHPA.bat</strong> to patch the client, then merge <code className="text-xs bg-sand-200 px-1 py-0.5 rounded font-mono">mohpa-hosts.txt</code> into your hosts file.
              </p>

              <div className="bg-sand-50 p-2.5 rounded border border-sand-200 text-xs font-mono text-ink-muted flex items-center justify-between gap-2">
                <span className="truncate" title={defaultPath}>
                  EA GAMES\Medal of Honor...
                </span>
                <button
                  onClick={handleCopyPath}
                  className="p-1 rounded hover:bg-sand-200 text-ink transition-colors shrink-0"
                  title="Copy standard installation path"
                  aria-label="Copy standard installation path"
                >
                  {copiedPath ? <Check className="w-3.5 h-3.5 text-olive-700" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-sand-200 text-xs text-olive-700 font-mono font-medium">
              Auto-backup (mohpa.exe.bak) · 1-click restore
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
                Enlist Soldier &amp; Deploy
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Register your free account on the <strong className="text-ink">mohPA Portal</strong> and create your custom soldier persona. Launch the game, head to Multiplayer &gt; Internet, and your soldier connects automatically.
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
                Official mohPA Client Patch Archive
              </h3>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-olive-100 text-olive-800 border border-olive-200">
                LATEST BUILD
              </span>
            </div>
            <p className="text-sm text-ink-muted max-w-xl">
              Includes the automated patcher (<code className="text-xs font-mono bg-sand-200 px-1 py-0.5 rounded">Patch-MOHPA.bat</code>), instant rollback (<code className="text-xs font-mono bg-sand-200 px-1 py-0.5 rounded">Restore-Original.bat</code>), and redirection hosts entries. Compatible with Windows 10, 11, and Linux via Wine/Proton. No Python installation required.
            </p>
            <p className="text-xs font-mono text-ink-faint">
              Package: mohPA-Client-Patch.zip (17 KB) · SHA-256 Verified
            </p>
          </div>

          <a
            href="/downloads/mohPA-Client-Patch.zip"
            download="mohPA-Client-Patch.zip"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stamp-500 hover:bg-stamp-600 active:bg-stamp-700 text-sand-50 font-semibold text-sm transition-all shadow-stamp-action border border-stamp-700 shrink-0"
          >
            <Download className="w-4 h-4 text-sand-100" />
            <span>Download Patch Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
