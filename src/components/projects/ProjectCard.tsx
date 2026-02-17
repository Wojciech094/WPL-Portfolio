import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';

export default function ProjectCard({ p }: { p: Project }) {
	return (
		<article className='glass overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col'>
			<Link
				to={`/projects/${p.slug}`}
				className='block flex-grow'>
				<img
					src={p.image}
					alt={p.title}
					className='w-full aspect-video object-cover'
					loading='lazy'
				/>

				<div className='p-5 space-y-3'>
					<h3 className='text-lg font-semibold'>{p.title}</h3>

					<p className='text-sm text-slate-300 line-clamp-2'>{p.excerpt}</p>

					<div className='flex gap-2 flex-wrap'>
						{p.tags.map(tag => (
							<span
								key={tag}
								className='text-xs bg-white/10 px-2 py-1 rounded-full'>
								{tag}
							</span>
						))}
					</div>
				</div>
			</Link>

			<div className='flex gap-3 px-5 pb-5 items-center'>
				{p.live && (
					<a
						href={p.live}
						target='_blank'
						rel='noreferrer'
						className='btn btn-primary px-4 py-2 text-sm whitespace-nowrap'>
						Live
					</a>
				)}

				{p.github && (
					<a
						href={p.github}
						target='_blank'
						rel='noreferrer'
						className='btn px-4 py-2 text-sm whitespace-nowrap'>
						GitHub
					</a>
				)}
			</div>
		</article>
	);
}
