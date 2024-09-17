import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import LogoWithLabels from './components/LogoWithLabels/LogoWithLabels';
import MarqueeComponent from './components/Marquee/Marquee';
import Menu from './components/Menu/Menu';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectInfo from './projects/projectInfo';
import { useEffect } from 'react';
import styles from './app.module.css';
import QRCodeLink from './components/NotFound/NotFound';
import NotFound from './components/NotFound/NotFound';

function App() {
   const location = useLocation();

   useEffect(() => {
      if (location.hash) {
         const element = document.getElementById(location.hash.substring(1));

         if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({ top: y, behavior: 'smooth' });
         } else {
            window.scrollTo(0, 0);
         }
      }
   }, [location]);
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
                                 FRONT-END: TypeScript, JavaScript, React,
                                 Next.js, Redux, HTML5, CSS3
                              </p>
                           </div>
                           <div className={styles['stack-right']}>
                              <p>OTHER: Git, Rest API, SVG</p>
                           </div>
                        </div>
                     </div>
                     <h2 id="portfolio" className={styles.heading}>
                        portfolio
                     </h2>
                     <Filter />
                     <h2 id="contacts" className={styles.heading}>
                        contacts
                     </h2>
                     <Contacts />
                     <MarqueeComponent />
                     <Form />
                  </>
               }
            />
            <Route path="/projects/:id" element={<ProjectInfo />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
