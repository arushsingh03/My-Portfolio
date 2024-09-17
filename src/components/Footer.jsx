const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/arushsingh03"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.png" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://x.com/arush_singh03"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/twitter.png"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.instagram.com/arushsingh03/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/social.png"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/arushsingh03/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.png"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.reddit.com/user/Potential_Comb_2972/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/reddit.png"
            alt="reddit"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 Arush Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
