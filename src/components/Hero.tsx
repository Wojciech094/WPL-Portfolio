export default function Hero() {
	return (
		<section
			id='top'
			className='container py-20 grid md:grid-cols-2 gap-8 items-center'>
			<div>
				<p className='mb-2 inline-block chip'>Front-End Developer · TypeScript · React</p>
				<h1 className='text-4xl md:text-5xl font-bold mb-4 leading-tight'>
					I build fast, accessible, and beautiful web applications.
				</h1>
				<p className='text-slate-400 mb-6 max-w-prose'>
					I'm a 2nd-year student specializing in clean, modular code, testing, and great UX. I'm looking for a junior
					front-end role or internship.
				</p>
				<div className='flex flex-wrap gap-3'>
					<a
						href='#projects'
						className='btn btn-primary'>
						View Projects
					</a>
					<a
						href='https://github.com/Wojciech094'
						target='_blank'
						rel='noreferrer'
						className='btn'>
						GitHub
					</a>
					{/* <a
						className='btn'
						href='/CV_Wojtek_Lesniak.pdf'
						download='Wojtek_Lesniak_CV.pdf'
						rel='noopener'>
						Download CV
					</a> */}
				</div>
			</div>

			<figure className='rounded-2xl overflow-hidden shadow-lg relative'>
				<img
					src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop'
					alt='Developer workspace'
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-tr from-violet-500/25 to-transparent mix-blend-screen' />
			</figure>
		</section>
	);
}
