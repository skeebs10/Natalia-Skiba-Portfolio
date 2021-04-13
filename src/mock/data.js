import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'https://i.imgur.com/ZF4zHf8l.jpg?2',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://i.imgur.com/t2J2oSzm.jpg',
    title: 'Tonic Tusk',
    info: '',
    info2: '',
    url: 'https://tonic-tusk.herokuapp.com/',
    repo: 'https://github.com/skeebs10/Natalia-Skiba-Final-Project/tree/master', 
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/UJqrsKLm.jpg',
    title: 'Happy Recipe',
    info: '',
    info2: '',
    url: 'https://happy-recipe-app.herokuapp.com',
    repo: 'https://github.com/skeebs10/Happy-Recipe',
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/o0Fx8WWl.png',
    title: 'Barista Expertista',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://www.linkedin.com/in/natalia-skiba/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
