import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Momna Bashir Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'I am',
  name: 'Momna',
  subtitle: 'I am a mern stack developer.',
  cta: 'Know Me',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'My name is Momna Bashir.',
  paragraphTwo: 'I am a mern stack developer.',
  paragraphThree: '',
  // resume: 'https://ecommerce-project-3-momna.netlify.app/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/MomnaB/MERNAPP-1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/MomnaB/meal-finder-app.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/MomnaB/React-Ecommrace-master.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/MomnaB/todo-app-final.git',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/MomnaB/meal-finder-app.git',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://github.com/MomnaB/todo-app-final.git',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
