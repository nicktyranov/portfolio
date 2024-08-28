import image from './pic.svg';
import styles from './Contacts.module.css';

function Contacts() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src={image} alt="image" className={styles.image} />
         </div>
         <div className={styles.contacts}>
            <div className={styles.contact}>
               <div className={styles['contact-text']}>
                  <img src="/email-icon.svg" alt="email icon" />
                  <a href="mailto: nicktyranov@gmail.com">e-mail</a>
               </div>
               <img src="/arrow-right-top.svg" alt="arrow icon" />
            </div>

            <div className={styles.contact}>
               <div className={styles['contact-text']}>
                  <img src="/linkedin-icon.svg" alt="linkedin icon" />
                  <a href="https://www.linkedin.com/in/ntyranov/">linkedin</a>
               </div>
               <img src="/arrow-right-top.svg" alt="arrow icon" />
            </div>

            <div className={styles.contact}>
               <div className={styles['contact-text']}>
                  <img src="/github-icon.svg" alt="github icon" />
                  <a href="https://github.com/nicktyranov">github</a>
               </div>
               <img src="/arrow-right-top.svg" alt="arrow icon" />
            </div>
         </div>
      </div>
   );
}

export default Contacts;
