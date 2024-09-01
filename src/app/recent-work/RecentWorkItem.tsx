import Image from "next/image";
import Subtitle from "../components/Subtitle";
import TextWrapper from "../components/TextWrapper";

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
    <TextWrapper>
      <div className="flex items-center gap-3 text-lg font-bold text-primary">
        <Subtitle>{title}</Subtitle>
        <span className="mb-1 text-quinary">→</span>
        {techStackIcons.map((icon) => (
          <Image
            key="icon"
            src={`/icons/${icon}.svg`}
            alt={icon}
            className="h-5 w-5 drop-shadow-lg"
            height={24}
            width={24}
          />
        ))}
      </div>
      <div className="flex items-start pl-4">
        <span className="inline-block min-w-6 text-quinary">↳</span>
        <p className="text-quinary">{description}</p>
      </div>
    </TextWrapper>
  );
}
