import iconMail from '/email-icon.svg';
import iconLinkedin from '/linkedin-icon.svg';
import styles from './Footer.module.css';

function Footer() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.icons}>
            <a href="mailto: nicktyranov@gmail.com">
               <img src={iconMail} alt="iconMail" />
            </a>
            <a href="https://www.linkedin.com/in/ntyranov/">
               <img src={iconLinkedin} alt="icon Linkedin" />
            </a>
         </div>
         <div className={styles.text}>
            &#169;{new Date().getFullYear()} all rights reserved
         </div>
      </div>
   );
}

export default Footer;
