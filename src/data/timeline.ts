export type Kind = 'role' | 'volunteer' | 'award' | 'research' | 'teaching';

export interface Entry {
  date: string;
  kind: Kind;
  title: string;
  org: string;
  story: string;
}

// Newest first. Source: the 2026 CV; sentences only rephrase it.
export const timeline: Entry[] = [
  { date: '06/2026 – Present', kind: 'role', title: 'Independent AI/ML Engineer', org: 'Diaplous', story: 'Building services for maritime safety, where getting the system right matters well beyond the dashboard.' },
  { date: '2026', kind: 'volunteer', title: 'Mentor', org: 'OpenHackathon and OpenConf', story: 'Mentoring teams at OpenHackathon and OpenConf 2026.' },
  { date: 'May – Jun 2026', kind: 'volunteer', title: 'Project Buddy', org: 'SisTech', story: 'Acting as a project buddy with SisTech.' },
  { date: '01/2024 – 05/2026', kind: 'role', title: 'Data Science Team Lead, AI/ML Manager', org: 'GWI, Athens', story: 'Led the data science team through stakeholder management, project scoping, requirements and mentoring, and delivered end-to-end AI/ML/data pipelines as internal data products at scale for market research analytics. Explored AI tools such as ChatGPT, Cursor, Codex, Claude, Rovo, Lovable and MCP integrations, and promoted best practices in agentic software development.' },
  { date: 'Nov 2024', kind: 'award', title: 'Most fun project award', org: 'Hackathon Open Conf', story: 'EcoByte, a prototype Personalised Supplies AI Agent that reduces food waste by managing household inventory and predicting tailored needs.' },
  { date: 'Dec 2023', kind: 'award', title: 'Best GIM idea, Nokia Global Innovation Mall', org: 'Nokia', story: 'Cogni.smsf: an engine using NLP LDA techniques to find context and meaning when analysing and categorising logs from complex systems such as the SMSF telecom application server. Judged on impression, impact and novelty.' },
  { date: '09/2022 – 01/2024', kind: 'role', title: '5G Core Principal Developer', org: 'Nokia, Athens', story: 'Led AI initiatives such as AI-assisted event analysis in the SMSF, and developed and tested the REST server application that is the core of Nokia TAS (cloud native 5G). Member of the AI & Data Community and the R&D Tools Council across Nokia.' },
  { date: '02/2022 – 11/2022', kind: 'volunteer', title: 'Collaborator on Global Initiatives', org: 'AI4Diversity, remote', story: 'Shortlisted as one of the top 200 candidates from 8,000 applications, contributing to a community of AI enthusiasts now over 300,000 people worldwide.' },
  { date: '02/2021 – 09/2022', kind: 'role', title: 'Head of Energy Systems Analysis and Digitalization Unit', org: 'Ubitech, Athens', story: 'Managed projects and teams, analysed requirements and led the design and development of end-to-end web applications enhanced with Big Data and ML energy services.' },
  { date: '12/2018 – 01/2021', kind: 'role', title: 'Senior Big Data Engineer', org: 'Zopa, London', story: 'Managed and delivered end-to-end data pipelines for enterprise data warehouse solutions: ETL, dimension and fact tables with SQL and Redshift.' },
  { date: '09/2018 – 11/2018', kind: 'role', title: 'Data Science Fellow', org: 'Faculty, London', story: 'An intensive two-month programme in data science and engineering, with a project analysing unstructured customer feedback for Vita Mojo restaurants using NLP and sentiment analysis.' },
  { date: '11/2017 – 08/2018', kind: 'role', title: 'Software Engineer', org: 'XM, Athens', story: 'Built test-driven plugins for MetaTrader Forex platforms and a report server storing trading activity of Forex clients.' },
  { date: '08/2013 – 11/2017', kind: 'role', title: 'Software Engineer', org: 'Nokia, Athens', story: 'Built an in-memory telco cloud database, performance and profiling tools, and worked on the SGSN, the 3G/4G mobile network component. Refactored complex modules, mentored new team members and trained teams.' },
  { date: '2009 – 2013', kind: 'award', title: 'Heraclitus II scholarship', org: 'Aristotle University of Thessaloniki', story: 'A Heraclitus II scholarship supported my research during the PhD.' },
  { date: '2009 – 2013', kind: 'research', title: 'PhD in Physics and Research Assistant', org: 'Aristotle University of Thessaloniki', story: 'Designed virtual experiments and simulations for nanotechnology (Molecular Dynamics and Monte Carlo in C), plus time-series and statistical analysis.' },
  { date: '2011 – 2013', kind: 'teaching', title: 'Teaching Assistant', org: 'Aristotle University of Thessaloniki', story: 'C programming (undergraduate) and Programming I: C++ (postgraduate).' },
  { date: '2008 – 2011', kind: 'teaching', title: 'Computer Trainer', org: 'Learn IT, Labtech, private tutoring', story: 'Teaching activities for kids, students and adults.' },
];

export const education = [
  { years: '2009 – 2013', what: 'PhD in Physics', where: 'Aristotle University of Thessaloniki', link: { href: 'http://thesis.ekt.gr/thesisBookReader/id/36924#page/1/mode/2up', text: 'English summary of the thesis' } },
  { years: '2007 – 2009', what: 'MSc in Computational Physics', where: 'Aristotle University of Thessaloniki' },
  { years: '2005 – 2007', what: 'MSc in Material Science', where: 'Aristotle University of Thessaloniki' },
  { years: '2000 – 2005', what: 'BSc in Physics', where: 'Aristotle University of Thessaloniki' },
];

export const languages = ['Greek (native)', 'English (fluent)', 'French (fluent)'];
export const beyondWork = 'Baking, literature, travelling, cinema, swimming, Pilates.';
