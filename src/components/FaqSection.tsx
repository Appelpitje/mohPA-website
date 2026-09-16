import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do I need an original CD key to play?',
    answer:
      'Yes. Medal of Honor: Pacific Assault requires a valid installation key from your original retail CD/DVD box, EA App/Origin purchase, or digital copy. The mohPA portal verifies account entitlements transparently without charging any fees.',
  },
  {
    question: 'Why does my antivirus scanner flag the client patch?',
    answer:
      'The client patch is an open-source 17 KB script (Patch-MOHPA.bat / PowerShell) that creates a safe backup (mohpa.exe.bak) and modifies specific binary offsets in mohpa.exe (such as bypassing obsolete 2004 SSL 2.0 verification and remapping blocked IRC ports). Because heuristic scanners monitor scripts modifying executable files, some tools trigger a generic false positive. The entire patch is 100% human-readable script code with no compiled binaries or malware.',
  },
  {
    question: 'Can I play on modern Windows 10, Windows 11, or Linux?',
    answer:
      'Yes. The revival has been verified on Windows 10 and Windows 11 64-bit. For Linux and Steam Deck users, MOHPA v1.2 runs exceptionally well via Wine or Valve Proton by simply placing the patch files inside the game\'s virtual Wine drive.',
  },
  {
    question: 'How do I host a dedicated server for my clan?',
    answer:
      'Both Windows and Linux dedicated servers are supported. The patcher also patches mohpa_server.exe automatically if present in your installation folder. Dedicated server administrators can register their server token on the mohPA Portal to announce their server directly to the public in-game server browser.',
  },
  {
    question: 'Is mohPA free to play?',
    answer:
      'Yes, 100% free. mohPA is an independent, non-commercial software preservation project created by community enthusiasts. We do not sell subscriptions, cosmetics, or priority queue passes.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-sand-100 border-b border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Frequently answered intelligence.
          </h2>
          <p className="text-base text-ink-muted">
            Direct answers regarding installation safety, server hosting, and protocol compatibility.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-sand-200 border-y border-sand-200">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink group-hover:text-olive-900 transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-faint transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-olive-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 text-sm text-ink-muted leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
