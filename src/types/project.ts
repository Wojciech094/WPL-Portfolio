// src/data/projects.ts
export type Project = {
	slug: string;
	title: string;
	image: string;
	excerpt: string;
	description: string;
	tags: string[];
	live?: string;
	github?: string;
};

export const projects: Project[] = [
	{
		slug: 'wlportfolio',
		title: 'Portfolio (wlportfolio)',
		image: '/images/wlportfolio.png',
		excerpt: 'My first portfolio project, created as part of a school assignment.',
		description: 'HTML + CSS + JS. A site presenting my projects and contact details.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://wlportfolio.netlify.app/',
		github: 'https://github.com/Wojciech094/Portfolio',
	},
	{
		slug: 'museumproject',
		title: 'Community Science Museum',
		image: '/images/museumproject.png',
		excerpt: 'A science museum project  responsive and accessible website.',
		description: 'A site for a museum with information, exhibitions, and visitor planning.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://museumproject.netlify.app/',
		github: 'https://github.com/Wojciech094/Semester-Project-1',
	},
	{
		slug: 'Pierogi & beyond',
		title: 'Final exam project of my first year',
		image: '/images/fascinating-syrniki.png',
		excerpt: 'Website with API.',
		description: 'Practice project with recipe cards, responsive design, and layout.',
		tags: ['HTML', 'CSS', 'JS'],
		live: 'https://fascinating-syrniki-feed78.netlify.app/',
		github: 'https://github.com/Wojciech094/Pierogi-and-beyond',
	},
	{
		slug: 'wojandsim',
		title: 'Team work project',
		image: '/images/wojandsim.png',
		excerpt: 'My first team project.',
		description: 'Exercises with layout, UI components, and API integration.',
		tags: ['React', 'API'],
		live: 'https://wojandsim.vercel.app',
		github: 'https://github.com/wojtek/wojandsim',
	},
	{
		slug: 'loquacious-sprite-a44e29',
		title: 'Animated website',
		image: '/images/loquacious-sprite.png',
		excerpt: 'Landing page with animation effects.',
		description: 'Showcase website with CSS/JS animations and responsiveness.',
		tags: ['HTML', 'CSS', 'Animations'],
		live: 'https://loquacious-sprite-a44e29.netlify.app/',
		github: 'https://github.com/Wojciech094/Webside-Bootstrap',
	},
	{
		slug: 'inquisitive-griffin-091a77',
		title: 'Inquisitive Griffin',
		image: '/images/inquisitive-griffin.png',
		excerpt: 'Experimental project - interactive UI.',
		description: 'Continuation of front-end courses.',
		tags: ['HTML', 'CSS', 'JS'],
		live: 'https://inquisitive-griffin-091a77.netlify.app/',
		github: 'https://github.com/Wojciech094/First-responsive-Web',
	},
	{
		slug: 'idyllic-crisp-b2058f',
		title: 'Idyllic Crisp',
		image: '/images/idyllic-crisp.png',
		excerpt: 'First time working with code.',
		description: 'Landing page with a cosmic theme and animations.',
		tags: ['HTML', 'CSS'],
		live: 'https://idyllic-crisp-b2058f.netlify.app/',
		github: 'https://github.com/Wojciech094/First-webside',
	},
];

export function getProjectBySlug(slug: string) {
	return projects.find(p => p.slug === slug);
}
