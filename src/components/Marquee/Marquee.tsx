import icon from './pic.svg';
import Marquee from 'react-fast-marquee';
import styles from './Marquee.module.css';

const text = 'get in touch';

export default function MarqueeComponent() {
   return (
      <div className={styles.wrapper}>
         <Marquee autoFill={true}>
            <div className={styles['marquee']}>
               <img src={icon} alt="icon" />
               <span>{text}</span>
            </div>
         </Marquee>
      </div>
   );
}
