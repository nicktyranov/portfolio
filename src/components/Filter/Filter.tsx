import { useEffect, useState } from 'react';
import Label from '../Label/Label';
import cn from 'classnames';
import cardImg1 from './card1.png';
import cardImg2 from './card2.png';
import cardImg3 from './card3.png';
import cardImg4 from './card4.png';
import styles from './Filter.module.css';

export type Data = {
   id: number;
   name: string;
   categoryId: number[];
   img: string;
};

const data: Data[] = [
   {
      id: 1,
      name: 'Project name 1',
      categoryId: [0, 1],
      img: cardImg1
   },
   {
      id: 2,
      name: 'Project name 2',
      categoryId: [0, 2],
      img: cardImg2
   },
   {
      id: 3,
      name: 'Project name 3',
      categoryId: [0, 1, 2],
      img: cardImg3
   },
   {
      id: 4,
      name: 'Project name 4',
      categoryId: [0, 5],
      img: cardImg4
   }
];

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
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Filter;
