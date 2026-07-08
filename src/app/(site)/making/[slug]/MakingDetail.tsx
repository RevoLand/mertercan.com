import Image from 'next/image';
import Link from 'next/link';
import StoryText from '@/app/components/StoryText';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
};

export default function MakingDetail({ project }: Props) {
  const details = [...(project.role ? [`Role: ${project.role}`] : []), ...(project.proofPoints ?? [])];

  return (
    <section className='container-base pt-14 pb-24 md:pt-20 md:pb-[150px]'>
      {/* Back link */}
      <div className='mb-10 md:mb-14'>
        <Link href='/making' className='text-ink/40 hover:text-ink/60 text-sm no-underline transition-colors'>
          ← making
        </Link>
      </div>

      {/* Title */}
      <h1 className='mb-3'>{project.title}</h1>

      {/* One-line context */}
      <p className='text-ink/60 mt-0! mb-2 text-base! italic'>{project.context}</p>

      {/* Metadata line */}
      <p className='text-ink/35 mt-0! mb-16 text-sm! font-medium tracking-wide md:mb-20'>
        {project.year}
        <span className='mx-2 opacity-40'>·</span>
        {project.type}
        <span className='mx-2 opacity-40'>·</span>
        {project.status}
      </p>

      <StoryText paragraphs={project.story} />

      {details.length > 0 && (
        <div className='mb-14 max-w-[620px] md:mb-16'>
          <div className='text-ink/35 mb-4 text-sm font-medium tracking-wide uppercase'>details</div>
          <ul className='space-y-2.5'>
            {details.map((line) => (
              <li key={line} className="before:text-ink/30 text-ink/70 list-none before:mr-3 before:content-['-']">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Visual frame — optional */}
      {project.visual && (
        <figure className='mb-14 max-w-[720px] md:mb-16'>
          <div className='border-ink/8 bg-ink/3 relative aspect-[16/10] w-full overflow-hidden rounded-sm border'>
            <Image
              src={project.visual.src}
              alt={project.visual.alt}
              fill
              className='object-cover object-top'
              sizes='(max-width: 768px) 100vw, 720px'
            />
          </div>
          {project.visual.caption && (
            <figcaption className='text-ink/35 mt-3 text-xs italic'>{project.visual.caption}</figcaption>
          )}
        </figure>
      )}

      {/* What changed / reflections */}
      <div className='mb-14 max-w-[620px] md:mb-16'>
        <div className='text-ink/35 mb-4 text-sm font-medium tracking-wide uppercase'>what changed</div>
        <ul className='space-y-2.5'>
          {project.reflections.map((line, i) => (
            <li key={i} className="before:text-ink/30 text-ink/70 list-none before:mr-3 before:content-['-']">
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* External links — optional */}
      {project.links && project.links.length > 0 && (
        <div className='mb-12 max-w-[620px] md:mb-14'>
          <div className='text-ink/35 mb-3 text-sm font-medium tracking-wide uppercase'>links</div>
          <ul className='space-y-2'>
            {project.links.map((link) => (
              <li key={link.href} className='list-none'>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-ink/70 hover:text-ink text-sm no-underline transition-colors'
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags — optional */}
      {project.tags && project.tags.length > 0 && (
        <div className='max-w-[620px]'>
          <ul className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <li key={tag} className='list-none'>
                <span className='text-ink/30 border-ink/10 rounded-full border px-3 py-1 text-xs font-medium tracking-wide'>
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
