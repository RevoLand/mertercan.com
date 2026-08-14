const Footer = () => {
  return (
    <div data-nosnippet=''>
      <footer className='container-base space-y-8 py-14 text-center md:py-[60px]'>
        <p className='text-ink/70'>
          you can always reach me at → <a href='mailto:me@mertercan.com'>me@mertercan.com</a>
        </p>

        <div className='text-ink/70 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-8'>
          <a className='shrink-0' href='https://github.com/mertcreates' target='_blank' rel='noopener noreferrer'>
            GitHub / mertcreates
          </a>

          <a
            className='shrink-0'
            href='https://www.linkedin.com/in/mert-ercan'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>

          <a className='shrink-0' href='https://x.com/Mert_Ercan' target='_blank' rel='noopener noreferrer'>
            X
          </a>

          <a
            className='shrink-0'
            href='https://www.pinterest.com/mertcreates'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pinterest
          </a>
        </div>

        <p className='footer-note mt-4 text-xs!'>made with clarity, curiosity, and a little care</p>
      </footer>
    </div>
  );
};

export default Footer;
