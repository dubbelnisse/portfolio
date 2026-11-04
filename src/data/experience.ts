import iteamProjects from './iteam-projects'

const experiences = [
  {
    employer: 'UR, Sveriges Utbildningsradio AB',
    position: 'Fullstack Developer',
    start: 'DEC 2020',
    end: null,
    about: [
      'UR (Swedish Educational Broadcasting Company) is part of the public service broadcasting group in Sweden, with Swedish Radio (SR) and Swedish Television (SVT). UR’s mandate is to produce and broadcast educational and general knowledge programmes which strengthen, broaden and complement the work of others active in education.',
      "I work across UR's content platform: the APIs that power urplay.se, the apps (Android and iOS), smart TV and external partners (Node, TypeScript, REST and GraphQL, Elasticsearch, MongoDB).",
      "I've been one of the main developers of URAS, UR's admin system and CMS for educational content. First based on Strapi, then a custom-built system, where I worked across the stack (React, TypeScript, GraphQL API, auth with JWT and roles).",
      'Since 2025 I have also worked on login and identity (Keycloak, SAML/SATOSA).',
      "I care a lot about automated tests and work test-driven where it makes sense. I've set up unit, integration and end-to-end tests for several of our services (Jest, Supertest, Playwright).",
      'I also do devops work: Docker, Kubernetes, CI/CD and monitoring (Grafana, Sentry). This includes setting up and managing deployments for new services, adding Prometheus metrics to our APIs and building Grafana dashboards to monitor them.',
      'In my daily work at UR I use AI tools such as Claude Code for coding, code review, troubleshooting in production and writing documentation, which lets me work faster without lowering quality.',
    ],
    link: null,
  },
  {
    employer: 'Iteam',
    position: 'Developer',
    start: 'SEP 2014',
    end: 'NOV 2020',
    about: [
      'Iteam is a development consultancy working mostly in-house.',
      'My role on Iteam is fullstack developer. For frontend we use React and React Native with TypeScript. We write all code using TDD and Jest. And backend in Node. API integrations are made using GraphQL or REST.',
    ],
    link: '/projects/iteam',
    projects: iteamProjects,
  },
  {
    employer: 'Linas Matkasse',
    position: 'Interaction designer / Frontend developer',
    start: 'APR 2013',
    end: 'SEP 2014',
    about: [
      'Linas Matkasse delivers groceries in the form of prepackaged concept with recipes for the whole week. They started in 2008 and was one of the first in Sweden and is now one of the biggest market players.',
      'My work was to work tightly with marketing department to create mock-ups and then implement the front end parts in their Wordpress platform.',
    ],
    link: null,
  },
  {
    employer: 'Vaimo',
    position: 'Interaction designer',
    start: 'APR 2012',
    end: 'AUG 2012',
    about: [
      'Vaimo is eCommerce experts operating in multiple countries. Working with both B2B and B2C customers.',
      'I started out as an intern for 2 months and then continued working over the summer between school terms. Here I mainly worked as an interaction designer. Creating wireframes for new customers, but also perform usability tests on current customer sites. Did some front-end work on their platform of choice Magento.',
    ],
    link: null,
  },
]

export default experiences
