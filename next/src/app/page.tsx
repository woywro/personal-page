import Header from '../components/Header';
import Section from '../components/Section';
import Card from '../components/Card';
import TimelineItem from '../components/TimelineItem';
import { projects } from '../data/projects.json';
import { timeline } from '../data/timeline.json';

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
    projects.map(async (project) => ({
      ...project,
      stars: await getGitHubStars(project.href),
    }))
  );

  return (
    <div className="w-full px-4 py-24 text-gray-800">
      <Header name="Wojciech Wrotek" title="React/Next.js Software Developer" />

      <main className="space-y-32 sm:space-y-40">
        <Section title="About" id="about-heading">
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            As a React/Next.js Software Developer at
            <a
              href="https://blazity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blazity font-light decoration-blazity/30 underline underline-offset-2"
            >
              {' '}
              Blazity
            </a>
            , I specialize in developing fast, scalable web applications, always
            prioritizing client satisfaction. Currently, I&apos;m pursuing a
            master&apos;s degree in Industry 4.0 at the
            <a
              href="https://ue.poznan.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-uep font-light decoration-uep/30 underline underline-offset-2"
            >
              {' '}
              Poznań University of Economics and Business
            </a>
            . Outside of work, I&apos;m a former professional swimmer and a
            passionate car enthusiast.
          </p>
        </Section>

        <Section title="Open Source" id="open-source-heading">
          <ul className="space-y-2">
            {projectsWithStars.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </ul>
        </Section>

        <Section title="Timeline" id="timeline-heading">
          <ol className="space-y-8">
            {timeline.map((yearData, index) => (
              <TimelineItem
                key={index}
                year={yearData.year}
                events={yearData.events}
              />
            ))}
          </ol>
        </Section>

        <Section title="Tools" id="tools-heading">
          <ul className="text-sm text-gray-600 font-light leading-relaxed space-y-1">
            <li>• Cursor as primary editor</li>
            <li>• GPT-4 & Claude 3.5 Sonnet for AI assistance</li>
            <li>
              • MacBook Pro M3 (18GB/512GB) / MacBook Pro M1 (16GB/1TB) / iPad
              Air M1
            </li>
          </ul>
        </Section>

        <Section>
          <p className="text-sm font-light text-gray-700">
            More about me on
            <a
              href="https://www.linkedin.com/in/wojtek-wrotek-8b337519b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 decoration-blue-800/30 underline underline-offset-2 transition-colors"
            >
              {' '}
              LinkedIn
            </a>{' '}
            and more code on
            <a
              href="https://github.com/woywro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 decoration-blue-800/30 underline underline-offset-2 transition-colors"
            >
              {' '}
              GitHub
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  );
}
