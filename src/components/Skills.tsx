export default function Skills() {
	const skills = [
		'HTML5 & CSS3',
		'JavaScript (ES6+)',
		'TypeScript',
		'React (Hooks, Context)',
		
		'Tailwind CSS',
		'Accessibility (WCAG 2.1)',
		'Figma',
		'Performance Optimization',
		'Netlify & Vercel',
		'Team workflow (Git, PR review)',
	];

	return (
		<section
			id='skills'
			className='container py-16'>
			<div className='flex items-end justify-between gap-4 mb-4'>
				<h2 className='text-2xl font-bold'>Skills</h2>
				<p className='text-slate-400'>Technologies I'm focusing on in Year 2.</p>
			</div>

			<div className='glass p-4 flex flex-wrap gap-2'>
				{skills.map(s => (
					<span
						key={s}
						className='chip'>
						{s}
					</span>
				))}
			</div>
		</section>
	);
}
