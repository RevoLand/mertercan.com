import React from 'react';

const Footer = () => {
  return (
    <footer className='container-base space-y-8 py-14 text-center md:py-[60px]'>
      <p className='text-ink/50'>
        you can always reach me at → <a href='mailto:me@mertercan.com'>me@mertercan.com</a>
      </p>

      <div className='text-ink/50 flex justify-center gap-5 md:gap-8'>
        <a href='https://www.pinterest.com/mertcreates' target='_blank' rel='noopener noreferrer'>
          Pinterest
        </a>

        <a href='https://github.com/revoland' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>

        <a href='https://www.linkedin.com/in/mert-ercan' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>

        <a href='https://x.com/Mert_Ercan' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
      </div>

      <p className='footer-note mt-4 text-xs!'>made with clarity, curiosity, and a little care</p>
    </footer>
  );
};

export default Footer;
