import Button from '../Button/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      document.title = `Nikolai Tyranov | 404 Not Found`;
   }, []);

   return (
      <div className={styles.wrapper}>
         <h1 className={styles.heading}>404 Not Found</h1>
         <Link to={'/'}>
            <Button>Main Page</Button>
         </Link>
      </div>
   );
}
