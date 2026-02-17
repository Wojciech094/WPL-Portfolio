// import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';

export default function ProjectCard({ p }: { p: Project }) {
	return (
		<article className='glass overflow-hidden transition-shadow hover:shadow-lg flex flex-col'>
			<img
				src={p.image}
				alt={p.title}
				className='w-full aspect-video object-cover'
				loading='lazy'
			/>

			<div className='p-5 flex flex-col flex-1 justify-between'>
				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>{p.title}</h3>
					<p className='text-sm text-slate-300 line-clamp-2'>{p.excerpt}</p>

					<div className='flex gap-2 flex-wrap'>
						{p.tags.map(t => (
							<span
								key={t}
								className='text-xs bg-white/10 px-2 py-1 rounded-full'>
								{t}
							</span>
						))}
					</div>
				</div>

				<div className='flex gap-3 pt-4'>
					{p.live && (
						<a
							href={p.live}
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center px-4 py-2 rounded-lg font-medium
                     text-xs text-slate-900
                     bg-gradient-to-r from-sky-300 to-violet-400
                     transition hover:scale-105 hover:shadow-md
                     whitespace-nowrap'>
							Live Website
						</a>
					)}

					{p.github && (
						<a
							href={p.github}
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center px-4 py-2 rounded-lg font-medium
                     text-xs text-slate-900
                     bg-gradient-to-r from-sky-300 to-violet-400
                     transition hover:scale-105 hover:shadow-md
                     whitespace-nowrap'>
							GitHub
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
