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
               <span>Nikolai Tyranov</span>
            </h1>
            <div className={styles['labels-wrapper']}>
               {labelText.map((text, index) => (
                  <Label
                     key={index}
                     text={text}
                     className={cn(styles[`label${index + 1}`], styles.label)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default LogoWithLabels;
