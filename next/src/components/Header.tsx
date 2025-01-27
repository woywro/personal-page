import Link from 'next/link';

interface Props {
  name: string;
  title: string;
}

export default function Header({ name, title }: Props) {
  return (
    <header className="mb-32 sm:mb-40">
      <h1 className="text-md mb-2">
        <Link
          href="/"
          className="text-xl inline-block font-light no-underline hover:text-gray-600 transition-colors"
        >
          {name}
        </Link>
      </h1>
      <p className="text-sm mt-2 text-gray-500 font-light">{title}</p>
    </header>
  );
}
