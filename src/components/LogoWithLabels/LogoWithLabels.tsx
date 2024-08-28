import Label from '../Label/Label';
import cn from 'classnames';
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
            <div className={styles['labels-wrapper']}>
               <Label
                  text={labelText[0]}
                  className={cn(styles.label1, styles.label)}
               />
               <Label
                  text={labelText[1]}
                  className={cn(styles.label2, styles.label)}
               />
               <Label
                  text={labelText[2]}
                  className={cn(styles.label3, styles.label)}
               />
               <Label
                  text={labelText[3]}
                  className={cn(styles.label4, styles.label)}
               />
               <Label
                  text={labelText[4]}
                  className={cn(styles.label5, styles.label)}
               />
               <Label
                  text={labelText[5]}
                  className={cn(styles.label6, styles.label)}
               />
               <Label
                  text={labelText[6]}
                  className={cn(styles.label7, styles.label)}
               />
               <Label
                  text={labelText[7]}
                  className={cn(styles.label8, styles.label)}
               />
               <Label
                  text={labelText[8]}
                  className={cn(styles.label9, styles.label)}
               />
            </div>
         </div>
      </div>
   );
}

export default LogoWithLabels;
