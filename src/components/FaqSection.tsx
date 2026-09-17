import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is the mohPA community service free?',
    answer:
      'Yes. The mohPA community multiplayer service is free to use. It does not include Medal of Honor: Pacific Assault: you need your own installed copy of the game to connect.',
  },
  {
    question: 'What do I need to play Medal of Honor: Pacific Assault online?',
    answer: (
      <>
        You need an installed copy of Medal of Honor: Pacific Assault and a player account.
        Follow the <a href="https://portal.mohpa.net/setup" className="underline underline-offset-2 hover:text-ink">public setup guide</a> for
        the game version and connection steps. Use the installation instructions supplied with your copy of the game for any installation-key requirements.
      </>
    ),
  },
  {
    question: 'What should I do if antivirus software flags a download?',
    answer: (
      <>
        Treat the warning seriously. Tools that modify game files can trigger security alerts, but that alone does not establish that a detection is a false positive.
        Do not disable your protection or run a file you do not trust. Check the download source and the exact detection, and
        {' '}<a href="https://github.com/Appelpitje/mohPA-website/issues" className="underline underline-offset-2 hover:text-ink">report the warning for review</a> before proceeding.
      </>
    ),
  },
  {
    question: 'Which operating systems can I use?',
    answer: (
      <>
        Compatibility depends on your game installation and operating system. Check the
        {' '}<a href="https://portal.mohpa.net/setup" className="underline underline-offset-2 hover:text-ink">setup guide</a> before making changes.
        This site does not guarantee compatibility with every Windows version, Linux configuration, or Steam Deck setup.
      </>
    ),
  },
  {
    question: 'How do I host a dedicated server for my community?',
    answer: (
      <>
        Start with the <a href="https://portal.mohpa.net/setup?tab=dedicated" className="underline underline-offset-2 hover:text-ink">dedicated server hosting guide</a> for
        the current requirements and registration steps. Review those instructions for your server environment before installing or changing files.
      </>
    ),
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-sand-100 border-b border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Medal of Honor: Pacific Assault multiplayer FAQ.
          </h2>
          <p className="text-base text-ink-muted">
            Answers about the community service, game setup, download warnings, and server hosting.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-sand-200 border-y border-sand-200">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={item.question} open={idx === 0} className="py-5 group">
              <summary className="w-full flex items-center justify-between text-left gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-ink group-hover:text-olive-900 transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="w-4 h-4 text-ink-faint transition-transform duration-200 shrink-0 group-open:rotate-180 group-open:text-olive-800"
                />
              </summary>
              <div className="mt-3.5 pr-8 text-sm text-ink-muted leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
