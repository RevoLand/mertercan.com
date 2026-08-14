'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'making', href: '/making' },
  { label: 'writing', href: '/writing' },
  { label: 'life', href: '/life' },
];

function getAriaCurrent(isCurrent: boolean): 'page' | undefined {
  if (isCurrent) {
    return 'page';
  }

  return undefined;
}

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav data-nosnippet='' className='siteHeader container-base' aria-label='Site' lang='en'>
      <Link
        href='/'
        className={clsx('siteHeaderLink', pathname === '/' && 'is-current')}
        aria-current={getAriaCurrent(pathname === '/')}
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
                className={clsx('siteHeaderLink', isCurrent && 'is-current')}
                aria-current={getAriaCurrent(isCurrent)}
              >
                {item.label}
              </Link>
              {item.label !== 'life' && <span aria-hidden='true'>·</span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
