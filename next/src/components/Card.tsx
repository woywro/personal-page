interface Props {
  href: string;
  title: string;
  description: string;
  stars?: number;
}

export default function Card({ href, title, description, stars }: Props) {
  return (
    <li>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="block px-4 py-2 no-underline rounded-lg bg-transparent hover:bg-grey-100 border border-transparent hover:border-gray-100 transition-all duration-200"
      >
        <div className="flex items-start">
          <div className="flex-grow">
            <div className="flex align-center justify-between">
              <h3 className="text-sm font-light">{title}</h3>
              {stars && stars > 0 && (
                <div
                  className="ml-2 flex items-center gap-1 text-xs text-gray-400"
                  aria-label={`${stars} GitHub stars`}
                >
                  {stars}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-sm font-light text-gray-500 mt-1">
              {description}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
