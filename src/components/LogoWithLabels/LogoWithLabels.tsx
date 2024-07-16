import Label from '../Label/Label';
import styles from './LogoWithLabels.module.css';

const labelText = [
   'css',
   'next.js',
   'frontend developer',
   'javascript developer',
   'web developer',
   'typescript',
   'html5',
   'redux',
   'react'
];

function LogoWithLabels() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <h1 className={styles.text}>
               Front End Developer
               <span>Nikolai Tyranov </span>
            </h1>

            <Label text={labelText[0]} className={styles.label1} />
            <Label text={labelText[1]} className={styles.label2} />
            <Label text={labelText[2]} className={styles.label3} />
            <Label text={labelText[3]} className={styles.label4} />
            <Label text={labelText[4]} className={styles.label5} />
            <Label text={labelText[5]} className={styles.label6} />
            <Label text={labelText[6]} className={styles.label7} />
            <Label text={labelText[7]} className={styles.label8} />
            <Label text={labelText[8]} className={styles.label9} />
         </div>
      </div>
   );
}

export default LogoWithLabels;
