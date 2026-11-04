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
      'I have worked a lot on search in our main API: relevance, synonyms and search suggestions in Elasticsearch.',
      "I've been one of the main developers of URAS, UR's admin system and CMS for educational content. First based on Strapi, then a custom-built system, where I worked across the stack (React, TypeScript, GraphQL API, auth with JWT and roles).",
      'Since 2025 I have also worked on login and identity (Keycloak, SAML/SATOSA).',
      "I care a lot about automated tests and work test-driven where it makes sense. I've set up unit, integration and end-to-end tests for several of our services (Jest, Supertest, Playwright).",
      'I also do devops work: Docker, Kubernetes, CI/CD and monitoring (Grafana, Sentry). This includes setting up and managing deployments for new services, adding Prometheus metrics to our APIs and building Grafana dashboards to monitor them.',
      'In my daily work at UR I use AI tools such as Claude Code for coding, code review, troubleshooting in production and writing documentation, which lets me work faster without lowering quality.',
      'In numbers: over 1,000 pull requests, more than 800 code reviews and contributions to 27 repositories at UR.',
    ],
    link: null,
  },
  {
    employer: 'Iteam',
    position: 'Fullstack Developer',
    start: 'SEP 2014',
    end: 'NOV 2020',
    about: [
      'Iteam is a development consultancy working mostly in-house.',
      'As a consultant at Iteam I worked as a fullstack developer. On the frontend we used React and React Native with TypeScript, and on the backend Node. We wrote our code test-driven with Jest, and built API integrations with GraphQL or REST.',
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
      'Linas Matkasse delivers grocery bags with recipes for the whole week. They started in 2008, were one of the first in Sweden and are now one of the biggest players on the market.',
      'I worked closely with the marketing department, creating mock-ups and then implementing the frontend in their WordPress platform.',
    ],
    link: null,
  },
  {
    employer: 'Vaimo',
    position: 'Interaction designer',
    start: 'APR 2012',
    end: 'AUG 2012',
    about: [
      'Vaimo is an eCommerce agency operating in multiple countries, working with both B2B and B2C customers.',
      'I started as an intern for two months and then kept working over the summer between school terms. I mainly worked as an interaction designer, creating wireframes for new customers and running usability tests on existing customer sites. I also did some frontend work in Magento, their platform of choice.',
    ],
    link: null,
  },
]

export default experiences
