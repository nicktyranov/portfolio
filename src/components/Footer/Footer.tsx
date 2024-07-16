import iconMail from '/email-icon.svg';
import iconLinkedin from '/linkedin-icon.svg';
import styles from './Footer.module.css';

function Footer() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.icons}>
            <img src={iconMail} alt="iconMail" />
            <img src={iconLinkedin} alt="icon Linkedin" />
         </div>
         <div className={styles.text}>
            &#169;{new Date().getFullYear()} all rights reserved
         </div>
      </div>
   );
}

export default Footer;
