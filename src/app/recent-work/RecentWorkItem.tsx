import Link from "next/link";
import ImageWithText from "../components/ImageWithText";
import Subtitle from "../components/Subtitle";
import TextWrapper from "../components/TextWrapper";

export default function RecentWorkEntry({
  title,
  description,
  link,
  techStackIcons = [],
}: {
  title: string;
  description: string;
  link: string;
  techStackIcons?: string[];
}) {
  return (
    <Link href={link}>
      <TextWrapper>
        <div className="flex flex-col gap-4">
          <Subtitle>{title}</Subtitle>
          <p>{description}</p>
          <span className="mt-4 text-nowrap text-xs text-primary">
            TECH STACK
          </span>
          <div className="grid grid-cols-8 gap-4">
            {techStackIcons.map((iconName) => (
              <ImageWithText image={iconName} text={iconName} />
            ))}
          </div>
        </div>
      </TextWrapper>
    </Link>
  );
}
