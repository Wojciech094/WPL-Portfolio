import type { Project } from '../../types/project';

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="glass overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
      <img
        src={p.image}
        alt={p.title}
        className="w-full object-cover"
        loading="lazy"
        width={1200}
        height={675}
      />

      <div className="p-5 space-y-3 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-slate-300 line-clamp-2 flex-grow">{p.excerpt}</p>

        <div className="flex gap-2 flex-wrap mt-auto">
          {p.tags.map(t => (
            <span
              key={t}
              className="text-xs bg-white/10 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1 text-sm">
          {p.live && (
            <a
              className="underline"
              href={p.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {p.github && (
            <a
              className="underline"
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
