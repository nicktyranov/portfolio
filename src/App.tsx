import styles from './app.module.css';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import LogoWithLabels from './components/LogoWithLabels/LogoWithLabels';
import MarqueeComponent from './components/Marquee/Marquee';
import Menu from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import ProjectInfo from './projects/projectInfo';

function App() {
   return (
      <>
         <Menu />
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <LogoWithLabels />
                     <div>
                        <h2 className={styles.heading}>ABOUT</h2>
                        <p className={styles['text-about']}>
                           hello, World! I'm a FrontEnd web developer with 2+
                           years of experience,
                           <br /> and my skill set encompasses a wide range of
                           expertise:
                        </p>
                        <div className={styles['stack-wrapper']}>
                           <div className={styles['stack-left']}>
                              <p>
                                 Front-end: TypeScript, JavaScript, React,
                                 Next.js, Redux, HTML5, CSS
                              </p>
                           </div>
                           <div className={styles['stack-right']}>
                              <p>OTHER: Git</p>
                           </div>
                        </div>
                     </div>
                     <h2 className={styles.heading}>portfolio</h2>
                     <Filter />
                     <h2 className={styles.heading}>contacts</h2>
                     <Contacts />
                     <MarqueeComponent />
                     <Form />
                  </>
               }
            />
            <Route path="/projects/:id" element={<ProjectInfo />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
