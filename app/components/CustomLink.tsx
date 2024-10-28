import { Star } from 'lucide-react';
import { TimelineItem } from '../page';

export const CustomLink = ({
  href,
  title,
  description,
  stars,
}: TimelineItem & { stars?: number }) => {
  const colorClass = getColorFromTitle(title);

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`block border-l-2 border-gray-200 pl-4 py-2 no-underline ${colorClass} transition-all`}
    >
      <div className="flex items-start">
        <div className="flex-grow">
          <div className="flex align-center justify-between">
            <h3 className="text-sm font-light">{title}</h3>
            {!!stars && (
              <div
                className="ml-2 flex items-center gap-1 text-xs text-gray-400"
                aria-label={`${stars} GitHub stars`}
              >
                {stars}
                <Star size={10} />
              </div>
            )}
          </div>
          <p className="text-sm font-light text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};

const getColorFromTitle = (title: string): string => {
  if (title.startsWith('Education:')) return 'hover:border-green-500';
  if (title.startsWith('Open Source:')) return 'hover:border-blue-500';
  if (title.startsWith('Article:')) return 'hover:border-purple-500';
  return 'hover:border-gray-500';
};
