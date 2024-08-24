import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './Menu.module.css';

function Menu() {
   return (
      <nav className={styles.wrapper}>
         <div className={styles.logo}>
            <Link to={'/'}>
               <img src={logo} alt="Nikolai Tyranov logo" />
            </Link>
         </div>
         <div className={styles.navigation}>
            <Link to="/#portfolio">portfolio</Link>
            <Link to="/#contacts">contacts</Link>
         </div>
      </nav>
   );
}

export default Menu;
