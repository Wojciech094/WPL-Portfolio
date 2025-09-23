export default function Footer() {
	return (
		<footer className='py-10 text-center text-slate-400'>
			<div className='container'>
				© {new Date().getFullYear()} Wojtek Leśniak — Built with passion and attention to detail.
			</div>
		</footer>
	);
}
