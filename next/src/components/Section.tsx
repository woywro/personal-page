interface Props {
  title?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ title, id, className, children }: Props) {
  return (
    <section aria-labelledby={id} className={className}>
      {title && (
        <h2 id={id} className="mb-6 font-light text-xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
