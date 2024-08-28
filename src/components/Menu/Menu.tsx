import { Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import mobileIcon from './mobile-menu.svg';
import closeIcon from './close-icon.svg';
import { useEffect, useState } from 'react';
import styles from './Menu.module.css';

function Menu() {
   const [isOpened, setIsOpened] = useState(false);
   const locaction = useLocation();

   useEffect(() => {
      setIsOpened(false);
   }, [locaction]);

   return (
      <nav className={styles.wrapper}>
         <div className={styles.menu}>
            <div className={styles.logo}>
               <Link to={'/'}>
                  <img src={logo} alt="Nikolai Tyranov logo" />
               </Link>
            </div>
            <div className={styles.navigation}>
               <Link to="/#portfolio">portfolio</Link>
               <Link to="/#contacts">contacts</Link>
            </div>
            <div
               className={styles['mobile-icon']}
               onClick={() => setIsOpened(!isOpened)}
            >
               <img src={isOpened ? closeIcon : mobileIcon} alt="mobile menu" />
            </div>
         </div>

         {isOpened && (
            <div className={styles['mobile-menu']}>
               <Link to="/#portfolio" onClick={() => setIsOpened(false)}>
                  portfolio
               </Link>
               <Link to="/#contacts" onClick={() => setIsOpened(false)}>
                  contacts
               </Link>
            </div>
         )}
      </nav>
   );
}

export default Menu;
