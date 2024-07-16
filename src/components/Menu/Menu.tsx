import styles from './Menu.module.css';
import logo from './logo.svg';

function Menu() {
   return (
      <nav className={styles.wrapper}>
         <div className={styles.logo}>
            <img src={logo} alt="Nikolai Tyranov logo" />
         </div>
         <div className={styles.navigation}>
            <a href="#portfolio">portfolio</a>
            <a href="#contacts">contacts</a>
         </div>
      </nav>
   );
}

export default Menu;
