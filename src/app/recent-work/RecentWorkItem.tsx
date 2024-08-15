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
      <div className="flex gap-3 items-center font-bold text-lg mt-8 text-primary min-h-14">
        {techStackIcons.map((icon) => (
          <Image
            key="icon"
            src={`/tech-stack-icons/${icon}.svg`}
            alt={icon}
            className="w-14 h-14 border border-primary p-2"
            height={24}
            width={24}
          />
        ))}
        <span className="mb-1">→</span>
        <h2>{title}</h2>
      </div>
      <div className="flex pl-4 items-start mt-2">
        <span className="min-w-6 inline-block text-primary">↳</span>
        <p>{description}</p>
      </div>
    </>
  );
}
