import { useEffect, useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState(false);

	// zamykanie menu przy zmianie rozmiaru na >= md
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	const links: Array<[string, string]> = [
		['Projects', '#projects'],
		['Skills', '#skills'],
		['Experience', '#experience'],
		['About', '#about'],
	];

	return (
		<header className='sticky top-0 z-50 backdrop-blur bg-[#0b1020]/75 border-b border-white/10'>
			<div className='container flex items-center justify-between py-3'>
				<a
					href='#top'
					className='font-extrabold flex items-center gap-2'>
					<span className='w-2.5 h-2.5 rounded-full bg-gradient-to-r from-sky-300 to-violet-400 shadow-[0_0_0_6px_rgba(125,211,252,.15)]' />
					<span>
						Wojciech<span className='opacity-70'> Lesniak</span>
					</span>
				</a>

				{/* desktop nav */}
				<nav
					aria-label='Main navigation'
					className='hidden md:block'>
					<ul className='flex gap-2'>
						{links.map(([label, href]) => (
							<li key={href}>
								<a
									className='px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-300/60'
									href={href}>
									{label}
								</a>
							</li>
						))}
						<li>
							<a
								className='chip'
								href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				{/* burger button */}
				<button
					type='button'
					className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-300/60'
					aria-label='Toggle menu'
					aria-expanded={open}
					onClick={() => setOpen(!open)}>
					{!open ? (
						<svg
							width='22'
							height='22'
							viewBox='0 0 24 24'
							fill='none'>
							<path
								d='M4 7h16M4 12h16M4 17h16'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					) : (
						<svg
							width='22'
							height='22'
							viewBox='0 0 24 24'
							fill='none'>
							<path
								d='M6 6l12 12M18 6L6 18'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					)}
				</button>
			</div>

			{/* mobile menu */}
			<nav
				aria-label='Mobile navigation'
				className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-white/10 bg-[#0b1020]/95 ${
					open ? 'max-h-96' : 'max-h-0'
				}`}>
				<ul className='container py-3 flex flex-col gap-1'>
					{links.map(([label, href]) => (
						<li key={href}>
							<a
								className='block px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-300/60'
								href={href}
								onClick={() => setOpen(false)}>
								{label}
							</a>
						</li>
					))}
					<li>
						<a
							className='chip inline-block'
							href='#contact'
							onClick={() => setOpen(false)}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
