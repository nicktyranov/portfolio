import { useParams } from 'react-router-dom';
import { data } from '../components/Filter/filterData';
import img from './projects-icon.svg';
import Button from '../components/Button/Button';
import icon from './icon-circle.svg';
import styles from './projectInfo.module.css';
import Form from '../components/Form/Form';

export default function ProjectInfo() {
   const { id } = useParams();
   const product = data.find((el) => el.id == id);

   if (!product) {
      return <div>Product not found</div>;
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.header}>
            <img src={img} alt="projects icon" />
            <div className={styles['header-text']}>
               <h1 className={styles.heading}>
                  {product.name.split(' ').map((el, index) => {
                     return <span key={index}>{`${el} `}</span>;
                  })}
               </h1>
               <p className={styles['header-description']}>
                  {product.shortDescription}
               </p>
               <div className={styles['header-buttons']}>
                  <Button>VIEW PROJECT</Button>
                  <Button>VIEW ON GITHUB</Button>
               </div>
            </div>
         </div>
         <div className={styles.poster}>
            <img src={product.img} alt={product.name + 'image'} />
         </div>

         <div className={styles['description-wrapper']}>
            <div className={styles['description-element']}>
               <div className={styles['description-heading']}>
                  <div>
                     <img src={icon} alt="icon circle" />
                  </div>
                  <p>description</p>
               </div>
               <div className={styles['description-text']}>
                  {product.description}
               </div>
            </div>

            <div className={styles['description-element']}>
               <div className={styles['description-heading']}>
                  <div>
                     <img src={icon} alt="icon circle" />
                     <img src={icon} alt="icon circle" />
                  </div>
                  <p>Project Features</p>
               </div>
               <div className={styles['description-text']}>
                  <ul>
                     {product.features.map((el) => {
                        return <li>{el}</li>;
                     })}
                  </ul>
               </div>
            </div>

            <div className={styles['description-element']}>
               <div className={styles['description-heading']}>
                  <div>
                     <img src={icon} alt="icon circle" />
                     <img src={icon} alt="icon circle" />
                     <img src={icon} alt="icon circle" />
                  </div>
                  <p>Technologies and tools</p>
               </div>
               <div className={styles['description-text']}>
                  <ul>
                     {product.technologies.map((el) => {
                        return <li>{el}</li>;
                     })}
                  </ul>
               </div>
            </div>
         </div>

         <Form
            callToAction="Let's discuss your project"
            productPage={true}
            className={styles.form}
         />
      </div>
   );
}
