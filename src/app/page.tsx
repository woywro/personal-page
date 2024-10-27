import Link from 'next/link';
import { projects as projectsData } from '../../data/projects.json';
import { timeline as timelineData } from '../../data/timeline.json';
import { Star } from 'lucide-react';

export const revalidate = 3600;

export type TimelineItem = {
  title: string;
  description: string;
  href: string;
  color?: string;
  withNoDot?: boolean;
};

export type TimelineYear = {
  year: number;
  items: TimelineItem[];
};

async function getGitHubStars(repoUrl: string): Promise<number> {
  const repoPath = new URL(repoUrl).pathname.slice(1);
  try {
    const response = await fetch(`https://api.github.com/repos/${repoPath}`);
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error(`Error fetching stars for ${repoUrl}:`, error);
    return 0;
  }
}

export default async function Home() {
  const projectsWithStars = await Promise.all(
    projectsData.map(async (project) => ({
      ...project,
      stars: await getGitHubStars(project.href),
    }))
  );

  return (
    <div className="mx-auto max-w-[600px] overflow-x-hidden px-4 py-8 text-gray-900 antialiased sm:py-16">
      <header className="mb-16 sm:mb-32">
        <h1 className="text-md mb-2">
          <Link
            href="/"
            className="text-md inline-block no-underline hover:text-gray-700 transition-colors"
          >
            Wojciech Wrotek
          </Link>
        </h1>
        <p className="text-sm mt-1 leading-none text-gray-600">
          React/Next.js Software Developer
        </p>
      </header>

      <main className="space-y-16 sm:space-y-32">
        <section aria-labelledby="about-heading">
          <h2 id="about-heading" className="mb-3 text-lg">
            About
          </h2>
          <p className="text-sm text-gray-700">
            As a React/Next.js Software Developer at{' '}
            <a
              href="https://blazity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blazity font-medium"
            >
              Blazity
            </a>
            , I specialize in developing fast, scalable web applications, always
            prioritizing client satisfaction. Currently, I’m pursuing a master’s
            degree in Industry 4.0 at the{' '}
            <a
              href="https://ue.poznan.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-uep font-medium"
            >
              Poznań University of Economics and Business
            </a>
            . Outside of work, I’m a former professional swimmer and a
            passionate car enthusiast.
          </p>
        </section>

        <section aria-labelledby="open-source-heading">
          <h2 id="open-source-heading" className="mb-3 text-lg">
            Open Source
          </h2>
          <ul className="space-y-2">
            {projectsWithStars.map((project) => (
              <li key={project.href}>
                <CustomLink {...project} withNoDot />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="mb-3 text-lg">
            Timeline
          </h2>
          <ol className="space-y-8">
            {timelineData.map((yearData) => (
              <li key={yearData.year} className="relative w-full">
                <time className="mb-2 text-sm font-medium text-gray-500">
                  {yearData.year}
                </time>
                <ul className="space-y-2">
                  {yearData.events.map((item, index) => (
                    <li key={`${yearData.year}-${index}`}>
                      <CustomLink {...item} color="blue" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="Social links">
          <p className="text-sm text-gray-700">
            More about me on{' '}
            <a
              href="https://www.linkedin.com/in/wojtek-wrotek-8b337519b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </a>{' '}
            and more code on{' '}
            <a
              href="https://github.com/woywro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

const CustomLink = ({
  href,
  title,
  description,
  stars,
  withNoDot,
}: TimelineItem & { stars?: number }) => {
  const colorClass = getColorFromTitle(title);

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="block rounded-md p-2 py-1 -ml-2 no-underline hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-start">
        {!withNoDot && (
          <div
            className={`w-2 h-2 rounded-full ${colorClass} mt-1.5 mr-2 flex-shrink-0`}
            aria-hidden="true"
          ></div>
        )}
        <div className="flex-grow">
          <div className="flex align-center justify-between">
            <h3 className="text-sm font-lg">{title}</h3>
            {!!stars && (
              <div
                className="ml-2 flex items-center gap-1 text-xs text-gray-500"
                aria-label={`${stars} GitHub stars`}
              >
                {stars}
                <Star size={10} />
              </div>
            )}
          </div>
          <p className="text-sm font-md text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

const getColorFromTitle = (title: string): string => {
  if (title.startsWith('Education:')) return 'bg-green-500';
  if (title.startsWith('Open Source:')) return 'bg-blue-500';
  if (title.startsWith('Article:')) return 'bg-purple-500';
  return 'bg-gray-500';
};
