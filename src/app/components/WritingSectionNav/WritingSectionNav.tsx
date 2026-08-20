'use client';

import Link from 'next/link';

const sectionLinks = [
  { href: '#denemeler', label: 'Denemeler' },
  { href: '#arena', label: 'Arena' },
  { href: '#siirler', label: 'Şiirler' },
  { href: '#konusmalar', label: 'Konuşmalar' },
] as const;

export default function WritingSectionNav() {
  return (
    <nav aria-label='Yazı bölümleri' lang='tr' className='mb-16 flex flex-wrap gap-x-4 gap-y-2 text-sm md:mb-20'>
      {sectionLinks.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          onNavigate={(event) => {
            event.preventDefault();
            window.location.hash = section.href;
          }}
          className='text-ink/70 hover:text-ink focus-visible:text-ink focus-visible:outline-accent no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4'
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
