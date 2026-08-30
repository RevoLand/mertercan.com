'use client';

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { WritingShareChannel, WritingShareLinks } from '@/lib/writing/share';

type WritingShareProps = {
  title: string;
  links: WritingShareLinks;
};

function getErrorName(error: unknown): string | undefined {
  if (error instanceof DOMException) {
    return error.name;
  }

  if (typeof error === 'object' && error !== null) {
    const name = (error as { name?: unknown }).name;

    return typeof name === 'string' ? name : undefined;
  }

  return undefined;
}

const channelOrder: readonly WritingShareChannel[] = ['threads', 'linkedin', 'x', 'whatsapp', 'telegram'];

const channelLabels: Readonly<Record<WritingShareChannel, string>> = {
  threads: 'Threads',
  linkedin: 'LinkedIn',
  x: 'X',
  whatsapp: 'WhatsApp',
  telegram: 'Telegram',
};

const channelAriaLabels: Readonly<Record<WritingShareChannel, string>> = {
  threads: "Threads'te paylaş",
  linkedin: "LinkedIn'de paylaş",
  x: "X'te paylaş",
  whatsapp: "WhatsApp'ta paylaş",
  telegram: "Telegram'da paylaş",
};

export default function WritingShare({ title, links }: WritingShareProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const firstMenuItem = menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]');

    firstMenuItem?.focus();

    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (!menuRef.current?.contains(event.target) && !shareButtonRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
        shareButtonRef.current?.focus();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }

      event.preventDefault();
      setIsMenuOpen(false);
      shareButtonRef.current?.focus();
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    const menuItems = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();

      if (menuItems.length === 0) {
        return;
      }

      const direction = event.key === 'ArrowDown' ? 1 : -1;
      const nextIndex = (currentIndex + direction + menuItems.length) % menuItems.length;

      menuItems[nextIndex]?.focus();

      return;
    }

    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();

      const targetIndex = event.key === 'Home' ? 0 : menuItems.length - 1;

      menuItems[targetIndex]?.focus();
    }
  }

  async function handleShare() {
    if (typeof navigator.share !== 'function') {
      setIsMenuOpen((isOpen) => !isOpen);

      return;
    }

    setIsMenuOpen(false);

    try {
      await navigator.share({ title, url: links.nativeUrl });
    } catch (error) {
      if (getErrorName(error) === 'AbortError') {
        return;
      }

      setIsMenuOpen(true);
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
    shareButtonRef.current?.focus();
  }

  return (
    <div className='relative inline-flex'>
      <button
        ref={shareButtonRef}
        type='button'
        aria-controls='writing-share-menu'
        aria-expanded={isMenuOpen}
        aria-haspopup='menu'
        onClick={handleShare}
        className='text-ink/70 hover:text-ink active:text-ink focus-visible:text-ink focus-visible:outline-accent inline-flex min-h-11 touch-manipulation items-center rounded-sm px-1 text-sm leading-5 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4'
      >
        Paylaş
      </button>

      <div
        ref={menuRef}
        id='writing-share-menu'
        role='menu'
        aria-label='Paylaşım kanalları'
        hidden={!isMenuOpen}
        onKeyDown={handleMenuKeyDown}
        className='border-ink/10 bg-background absolute bottom-full left-0 z-10 mb-2 max-w-[calc(100vw-3rem)] min-w-44 origin-bottom-left rounded-sm border p-2 shadow-sm md:right-0 md:left-auto md:mb-3 md:origin-bottom-right'
      >
        {channelOrder.map((channel) => (
          <a
            key={channel}
            role='menuitem'
            href={links[channel]}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={channelAriaLabels[channel]}
            onClick={closeMenu}
            className='text-ink/70 hover:bg-ink/4 hover:text-ink focus-visible:bg-ink/4 focus-visible:text-ink focus-visible:outline-accent flex min-h-11 touch-manipulation items-center rounded-sm px-2 text-sm leading-5 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px]'
          >
            {channelLabels[channel]}
          </a>
        ))}
      </div>
    </div>
  );
}
