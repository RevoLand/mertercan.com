import type { ReactNode } from 'react';

type SectionProps = {
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export default function Section({ title, className, children }: SectionProps) {
  return (
    <section className={`container-base pt-14 pb-24 md:pt-20 md:pb-[140px]${className ? ` ${className}` : ''}`}>
      {title && <h2 className='mt-2 mb-12'>{title}</h2>}
      {children}
    </section>
  );
}
