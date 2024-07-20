import cardImg1 from './card1.png';
import cardImg2 from './card2.png';
import cardImg3 from './card3.png';
import cardImg4 from './card4.png';

export type Data = {
   id: number | string;
   name: string;
   categoryId: number[];
   img: string;
};

export const data: Data[] = [
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
