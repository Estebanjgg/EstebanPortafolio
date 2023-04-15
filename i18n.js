import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutMe: 'About Me',
      bio: 'I am Esteban Gonzalez, a full stack developer, I am originally from Venezuela but I live in Brazil, I have been passionate about building computers since I was little, I love hardware, I like to detail each physical component that a PC is built. I am also passionate about developing programs to solve problems in my career as a developer and have worked to build an Artificial Intelligence ChatBot working with python technology, I helped build a voting system with Next.js technology with a Microsoft SQL Server data bank,I work both as a front-end and as a back-end, currently I help create a services platform that involves several APIs, I have knowledge with Next.js, HTML CSS, Python, Node, Javascript, I work with agile and cascata methodology, I I like my codes to be as clean as possible without any high performance errors.',
    },
  },
  es: {
    translation: {
      aboutMe: 'Sobre mí',
      bio: 'Soy Esteban Gonzalez, un desarrollador full stack, soy originalmente de Venezuela pero vivo en Brasil, desde pequeño he sido apasionado por armar computadoras, me encanta el hardware, me gusta detallar cada componente físico que se construye en una PC. También soy apasionado por desarrollar programas para resolver problemas en mi carrera como desarrollador y he trabajado para construir un ChatBot de Inteligencia Artificial trabajando con tecnología Python, ayudé a construir un sistema de votación con tecnología Next.js con una base de datos Microsoft SQL Server, trabajo tanto como front-end como back-end, actualmente ayudo a crear una plataforma de servicios que involucra varias APIs, tengo conocimiento en Next.js, HTML CSS, Python, Node, Javascript, trabajo con metodología ágil y cascata, me gusta que mis códigos sean lo más limpios posible sin ningún error de alto rendimiento.',
    },
  },
  pt: {
    translation: {
      aboutMe: 'Sobre mim',
      bio: 'Eu sou Esteban Gonzalez, um desenvolvedor full stack, eu sou originalmente da Venezuela mas moro no Brasil, desde pequeno tenho paixão por montar computadores, adoro hardware, gosto de detalhar cada componente físico que é construído em um PC. Também sou apaixonado por desenvolver programas para resolver problemas em minha carreira como desenvolvedor e trabalhei para construir um ChatBot de Inteligência Artificial trabalhando com tecnologia Python, ajudei a construir um sistema de votação com tecnologia Next.js com um banco de dados Microsoft SQL Server, trabalho tanto como front-end como back-end, atualmente ajudo a criar uma plataforma de serviços que envolve várias APIs, tenho conhecimento em Next.js, HTML CSS, Python, Node, Javascript, trabalho com metodologia ágil e cascata, gosto que meus códigos sejam o mais limpos possível sem nenhum erro de alto desempenho.',
    },
  },
  ko: {
    translation: {
      aboutMe: '나에 대해',
      bio: '저는 베네수엘라 출신의 풀스택 개발자인 Esteban Gonzalez입니다. 저는 작은 시절부터 컴퓨터를 조립하는 것에 열정을 갖고 있으며 하드웨어를 좋아합니다. PC에 구축되는 각 물리적 구성 요소를 자세히 살펴보는 것을 좋아합니다. 또한 프로그램을 개발하여 개발자로서의 문제를 해결하는 것에 열정을 갖고 있으며 파이썬 기술을 사용하여 인공 지능 챗봇을 구축하고 Next.js 기술을 사용하여 Microsoft SQL Server 데이터베이스를 사용한 투표 시스템을 구축하는 등의 작업을 수행했습니다. 저는 프론트엔드 및 백엔드 모두에서 작업하는 것을 좋아하며 현재 여러 API가 포함된 서비스 플랫폼을 만드는 데 도움을 주고 있습니다. Next.js, HTML CSS, Python, Node, Javascript에 대한 지식이 있으며 애자일 및 카스케이드 방법론으로 작업합니다. 고성능 오류없이 가능한한 깨끗한 코드를 유지하고자합니다.',
    },
  },
  
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;