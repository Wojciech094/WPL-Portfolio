import { useParams, Link } from 'react-router-dom';
import { projects } from '../../types/project';

export default function ProjectDetail() {
	const { slug } = useParams();
	const project = projects.find(p => p.slug === slug);

	if (!project) {
		return (
			<section className='container py-16'>
				<p className='text-slate-300'>Project not found.</p>
				<Link
					to='/'
					className='underline'>
					Back to home
				</Link>
			</section>
		);
	}

	return (
		<section className='container py-16 space-y-6'>
			<div className='flex items-center justify-between gap-4'>
				<h1 className='text-3xl font-bold'>{project.title}</h1>
				<Link
					to='/#projects'
					className='btn'>
					← Back to projects
				</Link>
			</div>

			<figure className='glass overflow-hidden rounded-2xl'>
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-[420px] object-cover'
					loading='lazy'
				/>
			</figure>

			{/* long description (falls back to excerpt if missing) */}
			<p className='text-slate-300 max-w-prose'>{project.longDescription ?? project.excerpt}</p>

			{/* features list */}
			{project.features?.length ? (
				<div>
					<h3 className='text-xl font-semibold mt-6 mb-2'>Key Features</h3>
					<ul className='list-disc pl-6 text-slate-300 space-y-1'>
						{project.features.map((f, i) => (
							<li key={i}>{f}</li>
						))}
					</ul>
				</div>
			) : null}

			{}
			{project.whatILearned ? (
				<div>
					<h3 className='text-xl font-semibold mt-6 mb-2'>What I Learned</h3>
					<p className='text-slate-300 max-w-prose'>{project.whatILearned}</p>
				</div>
			) : null}

			{}
			<div className='flex gap-3 pt-4'>
				{project.live && (
					<a
						className='btn btn-primary'
						href={project.live}
						target='_blank'
						rel='noreferrer'>
						Check out the website live
					</a>
				)}
				{project.github && (
					<a
						className='btn'
						href={project.github}
						target='_blank'
						rel='noreferrer'>
						GitHub Repo
					</a>
				)}
			</div>
		</section>
	);
}
