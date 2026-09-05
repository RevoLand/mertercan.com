'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'making', href: '/making' },
  { label: 'writing', href: '/writing' },
  { label: 'life', href: '/life' },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <div data-nosnippet=''>
      <nav className='siteHeader container-base' aria-label='Site' lang='en'>
        <Link
          href='/'
          className={`siteHeaderLink${pathname === '/' ? ' is-current' : ''}`}
          aria-current={pathname === '/' ? 'page' : undefined}
          translate='no'
        >
          mert ercan
        </Link>
        <div className='siteNav'>
          {navItems.map((item) => {
            const isCurrent = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <div key={item.href} className='flex items-center gap-2.5 sm:gap-4'>
                <Link
                  href={item.href}
                  className={`siteHeaderLink${isCurrent ? ' is-current' : ''}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {item.label !== 'life' && <span aria-hidden='true'>·</span>}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
