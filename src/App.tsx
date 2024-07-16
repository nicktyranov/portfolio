import styles from './app.module.css';
import Footer from './components/Footer/Footer';
import LogoWithLabels from './components/LogoWithLabels/LogoWithLabels';
import Menu from './components/Menu/Menu';

function App() {
   return (
      <>
         <Menu />
         <LogoWithLabels />
         <div>
            <h2 className={styles.heading}>ABOUT</h2>
            <p className={styles['text-about']}>
               hello, World! I'm a FrontEnd web developer with 2+ years of
               experience,
               <br /> and my skill set encompasses a wide range of expertise:
            </p>
            <div className={styles['stack-wrapper']}>
               <div className={styles['stack-left']}>
                  <p>
                     Front-end: TypeScript, JavaScript, React, Next.js, Redux,
                     HTML5, CSS
                  </p>
               </div>
               <div className={styles['stack-right']}>
                  <p>OTHER: Git</p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default App;
