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
					className='w-full object-cover'
					loading='lazy'
					width={1200}
					height={675}
				/>
				<div className='p-5 space-y-3'>
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
			</Link>

			{}
			<div className='flex gap-4 px-5 pb-4 text-sm'>
				{p.live && (
					<a
						className='underline'
						href={p.live}
						target='_blank'
						rel='noreferrer'>
						Check out the website live
					</a>
				)}
				{p.github && (
					<a
						className='underline'
						href={p.github}
						target='_blank'
						rel='noreferrer'>
						GitHub
					</a>
				)}
			</div>
		</article>
	);
}
