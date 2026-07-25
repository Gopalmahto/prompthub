interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {badge && (
        <span className="inline-flex rounded-full border border-violet-200 bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}

    </div>
  );
}