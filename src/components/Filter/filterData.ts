import cardImg1 from './card1.png';
import cardImg2 from './card2.png';
import cardImg3 from './card3.png';
import cardImg4 from './card4.png';

export type Data = {
   id: number | string;
   name: string;
   categoryId: number[];
   img: string;
   shortDescription: string;
   description: string;
   features: string[];
   technologies: string[];
};

export const data: Data[] = [
   {
      id: 1,
      name: 'Project name 1',
      categoryId: [0, 1],
      img: cardImg1,
      shortDescription:
         'Static website made using standard web technologies: HTML, CSS, JavaScript',
      description:
         'The main topic of the project is the presentation of the P.ai platform, which is an analytical platform with elements of artificial intelligence designed to generate audiences for marketing and advertising channels.',
      features: [
         'Development and support of user interfaces in accordance with design layouts',
         'Creating responsive layout to ensure proper display of web applications on various devices',
         'Develop modular and reusable code',
         'Optimizing performance and improving user experience'
      ],
      technologies: [
         'HTML5',
         'CSS3',
         'JavaScript (ES6+)',
         'Adaptive layout (Responsive Design)',
         'Git (version control systems)',
         'Working with graphics and SVG',
         'Cross-browser testing and debugging'
      ]
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
