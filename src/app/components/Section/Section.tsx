import clsx from 'clsx';
import React from 'react';

type SectionProps = {
  title?: React.ReactNode | string;
  className?: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={clsx('container-base pt-14 pb-24 md:pt-20 md:pb-[140px]', className)}>
      {title && <h2 className='mt-2 mb-12'>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
