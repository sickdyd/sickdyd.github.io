import Image from "next/image";

export default function RecentWorkEntry({
  title,
  description,
  techStackIcons = [],
}: {
  title: string;
  description: string;
  techStackIcons?: string[];
}) {
  return (
    <>
      <div className="mt-8 flex items-center gap-3 text-lg font-bold text-primary">
        <h2>{title}</h2>
        <span className="mb-1">→</span>
        {techStackIcons.map((icon) => (
          <Image
            key="icon"
            src={`/tech-stack-icons/${icon}.svg`}
            alt={icon}
            className="h-5 w-5 drop-shadow-lg"
            height={24}
            width={24}
          />
        ))}
      </div>
      <div className="flex items-start pl-4">
        <span className="inline-block min-w-6 text-primary">↳</span>
        <p>{description}</p>
      </div>
      <hr className="mt-4" />
    </>
  );
}
