export default function Experience() {
	const rows = [
		{
			when: '2025-2026 · Noroff',
			title: 'Front-End Development — Year 2',
			desc: 'Advanced JS/TS, testing, API integrations, UX, Typescript, React.',
		},
		{
			when: '2024-2025 · Noroff',
			title: 'Front-End Development — Year 1',
			desc: 'Core HTML/CSS/JS, blog project, semester exam.',
		},
		{
			when: '2023-2024 · Udemy',
			title: 'Front-End Development Course — ',
			desc: 'Core HTML/CSS/JS.',
		},
	
	];
	return (
		<section
			id='experience'
			className='container py-16'>
			<div className='flex items-end justify-between gap-4 mb-4'>
				<h2 className='text-2xl font-bold'>Experience & Education</h2>
				<p className='text-slate-400'>My learning path and achievements.</p>
			</div>
			<div className='grid gap-4'>
				{rows.map((r, i) => (
					<div
						key={i}
						className='glass p-4 border-l-4 border-sky-300'>
						<span className='text-slate-400 text-sm'>{r.when}</span>
						<h4 className='font-semibold mt-1'>{r.title}</h4>
						<p className='text-slate-300'>{r.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
