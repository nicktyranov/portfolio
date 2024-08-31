import cardImg1 from './card1.png';
import cardImg2 from './card2.png';
import cardImg3 from './card3.png';
import cardImg4 from './card4.png';
import pic1 from '../../projects/moc.jpg';
import pic2 from '../../projects/moc1.jpg';
import pic3 from '../../projects/moc2(3).jpg';
import pic4 from '../../projects/moc3.jpg';

export type Data = {
   id: number | string;
   name: string;
   links: string[];
   categoryId: number[];
   img: string;
   poster: string;
   shortDescription: string;
   description: string;
   features: string[];
   technologies: string[];
};

export const data: Data[] = [
   {
      id: 1,
      name: 'website Pai',
      links: [
         'https://film-api-alpha.vercel.app',
         'https://github.com/nicktyranov/React'
      ],
      categoryId: [0, 1, 2],
      img: cardImg1,
      poster: pic1,
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
         'Git',
         'SVG'
      ]
   },
   {
      id: 2,
      name: 'Shoppe',
      links: [
         'https://shoppe-gamma.vercel.app',
         'https://github.com/nicktyranov/NEXT_Pro'
      ],
      categoryId: [0, 1, 2, 3, 5, 6],
      img: cardImg2,
      poster: pic2,
      shortDescription:
         'Web application built with Next.js, leveraging server-side rendering and TypeScript for a scalable and maintainable codebase.',
      description:
         'This project provides a modern web application developed using Next.js, focusing on performance and scalability. It utilizes server-side rendering, dynamic routing, and TypeScript for enhanced code maintainability.',
      features: [
         'Implementation of server-side rendering (SSR) using Next.js for improved performance',
         'Development of dynamic routing for seamless navigation between pages',
         'Use of TypeScript for type safety and maintainable code',
         'Modular component architecture for easy updates and scalability',
         'Responsive design to ensure compatibility across various devices'
      ],
      technologies: [
         'Next.js',
         'TypeScript',
         'CSS3',
         'HTML5',
         'JavaScript',
         'Git',
         'Responsive Design'
      ]
   },
   {
      id: 3,
      name: 'My Films',
      links: [
         'https://film-api-alpha.vercel.app',
         'https://github.com/nicktyranov/React'
      ],
      categoryId: [0, 1, 2, 3, 4, 6],
      img: cardImg3,
      poster: pic3,
      shortDescription:
         'Dynamic movie database website created using React and TypeScript with Vite for fast development and testing.',
      description:
         'This project provides a front-end interface for interacting with a movie database API, allowing users to search for movies, view details, and manage their favorite selections. The site leverages modern web technologies to deliver a responsive and fast user experience.',
      features: [
         'Integration with external movie API for fetching and displaying data',
         'Search functionality with real-time filtering',
         'Responsive design ensuring compatibility across devices',
         'User interface designed with modular and reusable components',
         'Use of TypeScript for improved code maintainability and type safety'
      ],
      technologies: [
         'React',
         'TypeScript',
         'Vite',
         'CSS3',
         'HTML5',
         'RESTful API integration',
         'Git'
      ]
   },
   {
      id: 4,
      name: 'website Finio',
      links: [
         'https://website-finio.vercel.app',
         'https://github.com/nicktyranov/HTML-CSS-COURSE-2/tree/master/3-Finio'
      ],
      categoryId: [0, 1, 2],
      img: cardImg4,
      poster: pic4,
      shortDescription:
         'Financial tracking website for marketplace sellers, built with HTML and CSS.',
      description:
         'This project offers a web-based platform for marketplace sellers to track and analyze their profits and expenses. The site provides features like automated data synchronization, profit analysis, and expense management, all with a mobile-friendly design.',
      features: [
         'Development of responsive and adaptive layouts using HTML5 and CSS3',
         'Implementation of modular CSS for scalable and maintainable design',
         'Cross-browser testing to ensure consistent user experience across different platforms',
         'Optimized performance for faster load times and smooth interactions'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
   }
];
