export const site = {
  name: 'Dimitra Georgakaki',
  title: 'Dimitra Georgakaki',
  email: 'georgakd@gmail.com',
  launched: '2026-11-24', // the day the site went live
  description:
    'AI architecture, written down as a story: from computational materials science to systems built to last.',
  profiles: [
    { name: 'GitHub', href: 'https://github.com/georgakd', blurb: 'Code and open-source work' },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dimitra-georgakaki-32808879',
      blurb: 'Career and contact',
    },
    {
      name: 'Academia',
      href: 'https://auth.academia.edu/DimitraGeorgakaki',
      blurb: 'Papers and research',
    },
  ],
};

// Anonymous visit statistics with Umami Cloud (https://umami.is). Analytics is OFF whenever
// websiteId is empty: to switch it off, clear it; to change account, paste the new website ID.
// The ID is public (it appears in the page source), so it is safe to commit.
export const analytics = {
  websiteId: 'a9e8f599-2bd0-4904-aaad-4baf778d6e04',
  src: 'https://cloud.umami.is/script.js',
};

export const intro = `I’m currently contracting with Diaplous, building services for maritime safety — a domain where getting the system right has consequences well beyond the dashboard. I came to it by an unusual route: my path started in computational materials science, simulating atomic structures to understand how matter behaves, and it turns out the same instinct for modeling complex systems transfers surprisingly well to other domains too. Over the past decade I’ve worked across telecom, fintech, energy, and market research, turning “what if” questions into solutions that actually hold up in production. What keeps me engaged is the problem nobody thinks is solvable: the one where the data is messy, the constraints conflict, and the obvious approaches have already failed. These days I focus on AI architecture, advocating for systems designed to last rather than assembled to demo.`;

// Prefix an internal path with the site's base path (needed on GitHub Pages project sites).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;
