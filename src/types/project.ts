// src/data/projects.ts
export type Project = {
	slug: string;
	title: string;
	image: string;
	excerpt: string;
	// description: string;
	tags: string[];
	live?: string;
	github?: string;
	longDescription?: string;
	features?: string[];
	whatILearned?: string;
};

export const projects: Project[] = [
	{
		slug: 'first-portfolio',
		title: 'My First Portfolio Website',
		image: '/images/wlportfolio.png',
		excerpt: 'My very first portfolio assignment — a creative website full of animations and transitions.',

		tags: ['HTML', 'CSS'],
		live: 'https://wlportfolio.netlify.app/',
		github: 'https://github.com/Wojciech094/Portfolio',

		longDescription:
			'This was my first attempt at building a personal portfolio website. The project was created as a school assignment, and my main focus was on experimenting with design and adding animations. I included animated headers, transitions between sections, and hover effects to make the site more engaging. While I no longer use this portfolio, it was an important step in learning how to present my work and myself as a developer.',
		features: [
			'Multi-section portfolio website',
			'Animated headers and transitions',
			'Hover effects for interactivity',
			'Responsive layout for different screen sizes',
			'Experimentation with creative design elements',
		],
		whatILearned:
			'I learned how to structure a personal portfolio, how animations can improve engagement, and how to showcase my projects in a creative way. This project gave me confidence to explore frontend design and paved the way for the more professional portfolio I use today.',
	},

	{
		slug: 'Pierogi & beyond',
		title: 'Final exam project of my first year',
		image: '/images/fascinating-syrniki.png',
		excerpt:
			'My final exam project for the first year: a responsive food-themed web application with API integration, authentication, and blogging features.',
		tags: ['HTML', 'CSS', 'JS', 'REST API'],
		live: 'https://fascinating-syrniki-feed78.netlify.app/',
		github: 'https://github.com/Wojciech094/Pierogi-and-beyond',

		longDescription:
			'“Pierogi & Beyond” was my final exam project of the first year, where I combined everything I had learned about frontend fundamentals into one cohesive web application. The project is a food-themed platform that connects to an API to manage blog posts and user accounts. Users can register, log in, create their own posts, and browse existing content. Animations and transitions were added to create a polished and dynamic user experience, while responsive layouts ensured accessibility across all devices.',
		features: [
			'Multi-page responsive website with a food/culture theme',
			'Full REST API integration for content and authentication',
			'User accounts with registration and login functionality',
			'Ability to create, edit, and delete blog posts',
			'JavaScript interactivity with dynamic content rendering',
			'CSS animations and transitions for a polished feel',
			'Consistent design system across pages',
			'Optimized for desktop, tablet, and mobile',
		],
		whatILearned:
			'This project taught me how to work with APIs to fetch, post, and manage data dynamically, as well as implement user authentication for login and registration. I practiced combining structure (HTML), design (CSS), and interactivity (JavaScript) with real-world functionality. It gave me confidence in building complete, responsive applications that go beyond static websites.',
	},

	{
		slug: 'museumproject',
		title: 'Museum Website — Semester Project',
		image: '/images/museumproject.png',
		excerpt:
			'My semester exam project: a responsive museum website built with HTML, CSS, and JavaScript, featuring animations and interactive elements.',

		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://museumproject.netlify.app/',
		github: 'https://github.com/Wojciech094/Semester-Project-1',

		longDescription:
			'This was my semester exam project, where I designed and built a full website for a fictional museum. The focus was on creating a responsive, user-friendly design with clear navigation and engaging visual elements. I added JavaScript-based interactions and subtle animations to bring the website to life. This project represented my first larger-scale coding challenge, combining everything I had learned so far in HTML, CSS, and JavaScript.',
		features: [
			'Multi-page responsive museum website',
			'Interactive navigation and smooth scrolling',
			'CSS and JavaScript animations for dynamic effects',
			'Gallery and exhibit sections with hover effects',
			'Contact form with basic validation',
			'Optimized layout for desktop, tablet, and mobile',
		],
		whatILearned:
			'I learned how to structure a larger project, plan multiple pages consistently, and combine HTML, CSS, and JavaScript to create a cohesive website. This project improved my understanding of responsive design, accessibility basics, and how animations can enhance user experience in a professional way.',
	},

	{
		slug: 'First-team-project',
		title: 'Team Project — Collaborative Web App',
		image: '/images/wojandsim.png',
		excerpt: 'My first teamwork project, where I collaborated with classmates to build a simple web app.',

		tags: ['HTML', 'CSS', 'Team Work', 'GitHub'],
		live: 'https://https://wojandsim.netlify.app/',
		github: 'https://github.com/wojtek/wojandsim',

		longDescription:
			'This was my very first group project where I worked together with classmate to design and build a simple web application. We used GitHub for version control and practiced branching, pull requests, and resolving merge conflicts. My main responsibility was implementing the navigation system and styling the homepage, while also helping with debugging and testing other parts of the website. This project gave me valuable experience in communication, task division, and working with a shared codebase.',

		features: [
			'Collaborative workflow using Git and GitHub',
			'Task division with each team member responsible for different components',
			'Navigation system and responsive layout',
			'Code reviews and merge conflict resolution',
			'Basic project documentation in README',
		],
		whatILearned:
			'I learned how to work effectively as part of a team, use GitHub for collaboration, and communicate technical ideas clearly. This project helped me understand the importance of version control in real-world development and prepared me for future group assignments and professional teamwork.',
	},

	{
		slug: 'animated-website-progamers',
		title: 'ProGamers — Animated Website',
		image: '/images/loquacious-sprite.png',
		excerpt:
			'A gaming-themed landing page with smooth scroll, reveal-on-scroll animations, and sticky section navigation.',

		tags: ['HTML', 'CSS', 'Animations'],
		live: 'https://loquacious-sprite-a44e29.netlify.app/',
		github: 'https://github.com/Wojciech094/Webside-Bootstrap',

		longDescription:
			'ProGamers is a gaming-themed animated landing page that I built to practice combining design, animations, and interactivity. The project features smooth scroll navigation, reveal-on-scroll animations, and a sticky menu that highlights the current section. The goal was to create a visually appealing, dynamic website that feels modern and interactive while staying lightweight and responsive.',
		features: [
			'Sticky navigation bar with active section highlighting',
			'Smooth scroll navigation between sections',
			'Reveal-on-scroll animations using JavaScript and CSS classes',
			'Hover transitions on cards and call-to-action buttons',
			'Responsive layout optimized for desktop and mobile',
		],
		whatILearned:
			'I practiced coordinating JavaScript events with CSS animations, learned how to implement a simple scrollspy for active navigation, and improved my understanding of balancing motion with performance and accessibility. This project also gave me hands-on experience with creating a thematic landing page for a niche audience.',
	},

	{
		slug: 'Scroll Navigation',
		title: 'Animated Website with Scroll Navigation',
		image: '/images/inquisitive-griffin.png',
		excerpt: 'A simple website enhanced with CSS animations and JavaScript-powered scroll navigation.',

		tags: ['HTML', 'CSS', 'JS'],
		live: 'https://inquisitive-griffin-091a77.netlify.app/',
		github: 'https://github.com/Wojciech094/First-responsive-Web',

		longDescription:
			'This project marked my first steps into combining HTML, CSS, and JavaScript. I built a simple multi-section website where I introduced CSS animations to make the design more dynamic, and implemented a scroll navigation menu with JavaScript so users could smoothly navigate to different sections of the page. It was my first time adding interactivity and motion to a website.',

		features: [
			'Multi-section layout with HTML and CSS',
			'Smooth scroll navigation implemented in JavaScript',
			'Basic CSS animations and transitions',
			'Introduction to DOM manipulation',
			'Improved responsive layout with media queries',
		],
		whatILearned:
			'I learned how to enhance user experience by combining structure, design, and interactivity. This project taught me the basics of JavaScript DOM manipulation, smooth scrolling behavior, and how animations can make a website feel more engaging and professional.',
	},

	{
		slug: 'first-website',
		title: 'My First Website',
		image: '/images/idyllic-crisp.png',
		excerpt: 'First time working with code.',

		tags: ['HTML', 'CSS'],
		live: 'https://idyllic-crisp-b2058f.netlify.app/',
		github: 'https://github.com/Wojciech094/First-webside',

		longDescription:
			'This was my very first coding project, created entirely with HTML and CSS. The goal was to build a basic static website to practice writing clean HTML structure and styling layouts with CSS. It included a homepage and a few simple sections styled with colors, typography, and basic positioning. Even though it was simple, this project gave me my first real experience with building something from scratch.',

		features: [
			'Clean HTML structure with semantic tags',
			'Basic page layout styled with CSS',
			'Typography, colors, and simple design elements',
			'Introduction to responsive design using media queries',
		],
		whatILearned:
			'I learned how to organize content using HTML, apply styles with CSS, and think about design and structure in a web project. This project gave me the foundation I needed before moving on to more advanced technologies like JavaScript and React.',
	},
];

export function getProjectBySlug(slug: string) {
	return projects.find(p => p.slug === slug);
}
