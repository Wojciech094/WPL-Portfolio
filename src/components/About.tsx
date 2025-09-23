export default function About() {
	return (
		<section
			id='about'
			className='container py-16'>
			<div className='flex items-end justify-between gap-4 mb-4'>
				<h2 className='text-2xl font-bold'>About Me</h2>
				<p className='text-slate-400'>Short intro.</p>
			</div>
			<div className='glass p-4'>
				<p>
					Hi, I'm Wojtek — I combine aesthetics with pragmatism. I focus on clean, modular code, solid testing, and
					smooth UX. I'm looking for a junior front-end role or internship to grow with React + TypeScript and
					collaborate closely with designers.
				</p>
			</div>
		</section>
	);
}
