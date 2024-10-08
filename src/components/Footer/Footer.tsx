import styles from './Footer.module.css';

function Footer() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.icons}>
            <a href="mailto: nicktyranov@gmail.com">
               <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g
                     id="email-round-solid-icon 2"
                     clipPath="url(#clip0_250_154)"
                  >
                     <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 0C17.9667 0 20.8668 0.879735 23.3336 2.52796C25.8003 4.17618 27.7229 6.51886 28.8582 9.25975C29.9935 12.0006 30.2906 15.0166 29.7118 17.9264C29.133 20.8361 27.7044 23.5088 25.6066 25.6066C23.5088 27.7044 20.8361 29.133 17.9264 29.7118C15.0166 30.2906 12.0006 29.9935 9.25975 28.8582C6.51886 27.7229 4.17618 25.8003 2.52796 23.3336C0.879735 20.8668 0 17.9667 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM7.50244 9.27734L15.1367 15.4956L22.439 9.27734H7.50244ZM7.01416 19.7485L12.4512 14.2944L7.00928 9.86084V19.7437L7.01416 19.7485ZM13.0444 14.7827L7.44141 20.3979H22.5122L17.1558 14.7827L15.3809 16.2866C15.3122 16.3434 15.2258 16.3744 15.1367 16.3744C15.0476 16.3744 14.9613 16.3434 14.8926 16.2866L13.0395 14.7754L13.0444 14.7827ZM17.7417 14.2944L22.9907 19.7974V9.81201L17.7417 14.2847V14.2944Z"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_250_154">
                        <rect width="30" height="30" />
                     </clipPath>
                  </defs>
               </svg>
            </a>
            <a href="https://www.linkedin.com/in/ntyranov/">
               <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g
                     id="entypo-social:linkedin-with-circle"
                     clipPath="url(#clip0_250_152)"
                  >
                     <path
                        id="Vector"
                        d="M15.0016 0.599609C7.04856 0.599609 0.601562 7.04661 0.601562 14.9996C0.601562 22.9526 7.04856 29.3996 15.0016 29.3996C22.9546 29.3996 29.4016 22.9526 29.4016 14.9996C29.4016 7.04661 22.9546 0.599609 15.0016 0.599609ZM11.4766 20.9681H8.56056V11.5841H11.4766V20.9681ZM10.0006 10.4321C9.07956 10.4321 8.48406 9.77961 8.48406 8.97261C8.48406 8.14911 9.09756 7.51611 10.0381 7.51611C10.9786 7.51611 11.5546 8.14911 11.5726 8.97261C11.5726 9.77961 10.9786 10.4321 10.0006 10.4321ZM22.1266 20.9681H19.2106V15.7676C19.2106 14.5571 18.7876 13.7351 17.7331 13.7351C16.9276 13.7351 16.4491 14.2916 16.2376 14.8271C16.1596 15.0176 16.1401 15.2876 16.1401 15.5561V20.9666H13.2226V14.5766C13.2226 13.4051 13.1851 12.4256 13.1461 11.5826H15.6796L15.8131 12.8861H15.8716C16.2556 12.2741 17.1961 11.3711 18.7696 11.3711C20.6881 11.3711 22.1266 12.6566 22.1266 15.4196V20.9681Z"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_250_152">
                        <rect width="30" height="30" />
                     </clipPath>
                  </defs>
               </svg>
            </a>
         </div>
         <div className={styles.text}>
            &#169;{new Date().getFullYear()} all rights reserved
         </div>
      </div>
   );
}

export default Footer;
