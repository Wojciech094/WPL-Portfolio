export default function Contact() {
	return (
		<section
			id='contact'
			className='container py-16'>
			<div className='flex items-end justify-between gap-4 mb-4'>
				<h2 className='text-2xl font-bold'>Get in Touch</h2>
				<p className='text-slate-400'>Feel free to reach out — happy to chat.</p>
			</div>

			<div className='grid md:grid-cols-2 gap-4 items-start'>
				<div className='glass p-4'>
					<h3 className='text-lg font-semibold'>Direct Contact</h3>
					<p>
						<strong>Email:</strong>{' '}
						<a
							className='underline hover:no-underline'
							href='mailto: Wplesniak@hotmail.com'>
							Wplesniak@hotmail.com
						</a>
					</p>
					<p>
						<strong>LinkedIn:</strong>{' '}
						<a
							className='underline hover:no-underline'
							href='https://www.linkedin.com/in/wojtek-lesniak-29b477303/'
							target='_blank'
							rel='noreferrer'>
							https://www.linkedin.com/in/wojtek-lesniak-29b477303/'
						</a>
					</p>
					<p>
						<strong>GitHub:</strong>{' '}
						<a
							className='underline hover:no-underline'
							href='https://github.com/Wojciech094'
							target='_blank'
							rel='noreferrer'>
							https://github.com/Wojciech094
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
