import ProjectCard from './ProjectCard';
import { projects } from '../../types/project';

export default function Projects() {
	return (
		<section
			id='projects'
			className='container space-y-6'>
			<h2 className='text-2xl font-bold'>Projects</h2>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch'>
				{projects.map(p => (
					<ProjectCard
						key={p.slug}
						p={p}
					/>
				))}
			</div>
		</section>
	);
}
