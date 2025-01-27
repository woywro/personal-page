import Card from './Card';

interface Event {
  href: string;
  title: string;
  description: string;
}

interface Props {
  year: string | number;
  events: Event[];
}

export default function TimelineItem({ year, events }: Props) {
  return (
    <li className="relative w-full">
      <time className="mb-2 text-sm font-medium text-gray-500">{year}</time>
      <ul className="space-y-2 mt-2">
        {events.map((item, index) => (
          <Card
            key={index}
            href={item.href}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </li>
  );
}
