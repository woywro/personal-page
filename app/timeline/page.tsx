import { Link } from 'next-view-transitions';
import { timeline as timelineData } from '../../data/timeline.json';
import { CustomLink } from '../components/CustomLink';

export default function Timeline() {
  return (
    <div className="mx-auto max-w-[600px] overflow-x-hidden px-4 py-12 text-gray-800 antialiased sm:py-24">
      <header className="mb-12">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to home
        </Link>
        <h1 className="text-2xl mt-6">Timeline</h1>
      </header>

      <ol className="space-y-12">
        {timelineData.map((yearData) => (
          <li key={yearData.year} className="relative w-full">
            <time className="mb-2 text-sm font-medium text-gray-500">
              {yearData.year}
            </time>
            <ul className="space-y-2">
              {yearData.events.map((item, index) => (
                <li key={`${yearData.year}-${index}`}>
                  <CustomLink {...item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
