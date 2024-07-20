import { useEffect, useState } from 'react';
import Label from '../Label/Label';
import cn from 'classnames';
import styles from './Filter.module.css';
import { Link } from 'react-router-dom';
import { Data, data } from './filterData';

export type CategoryId = {
   id: number;
   name: string;
};

const categoryId: CategoryId[] = [
   {
      id: 0,
      name: 'ALL'
   },
   {
      id: 1,
      name: 'CSS'
   },
   {
      id: 2,
      name: 'HTML5'
   },
   {
      id: 3,
      name: 'TypeScript'
   },
   {
      id: 4,
      name: 'React'
   },
   {
      id: 5,
      name: 'Next.js'
   },
   {
      id: 6,
      name: 'JavaScript'
   }
];

function Filter({ ...props }) {
   const [clickedLabels, setClickedLabels] = useState<number[]>([]);
   const [filteredData, setFilteredData] = useState<Data[]>(data);

   const handleLabelClick = (id: number) => {
      setClickedLabels((prev) => {
         console.log(prev);
         return prev.includes(id)
            ? prev.filter((labelId) => labelId !== id)
            : [...prev, id];
      });
   };
   console.log(clickedLabels);

   useEffect(() => {
      if (clickedLabels.length === 0) {
         setFilteredData(data);
      } else {
         const filtered = data.filter((item) =>
            clickedLabels.every((labelId) => item.categoryId.includes(labelId))
         );
         setFilteredData(filtered);
      }
      if (clickedLabels.includes(0)) {
         setFilteredData(data);
         setClickedLabels([]);
      }
   }, [clickedLabels]);

   return (
      <div className={styles.wrapper} {...props}>
         <div className={styles['labels-wrapper']}>
            {categoryId.map((item) => {
               return (
                  <Label
                     text={item.name}
                     forFilter={true}
                     key={item.id}
                     className={cn(styles.button, {
                        [styles.clicked]: clickedLabels.includes(item.id)
                     })}
                     onClick={() => handleLabelClick(item.id)}
                  />
               );
            })}
         </div>
         <div className={styles['cards-wrapper']}>
            {filteredData.map((item) => {
               return (
                  <div className={styles['card']} key={item.id}>
                     <Link to={`/projects/${item.id}`}>
                        <img
                           src={item.img}
                           alt={item.name}
                           className={styles['card-image']}
                        />
                        <Label
                           text={item.name}
                           forFilter={true}
                           className={styles['card-label']}
                        />
                     </Link>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Filter;
