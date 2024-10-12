import ImageWithText from "../components/ImageWithText";
import Subtitle from "../components/Subtitle";
import TextWrapper from "../components/TextWrapper";
import { icons } from "../data/icons";

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
    <TextWrapper href={link}>
      <div className="flex flex-col">
        <Subtitle>{title}</Subtitle>
        <p>{description}</p>
        <span className="mb-6 mt-6 text-nowrap text-xs text-primary">
          TECH STACK
        </span>
        <div className="grid grid-cols-8 gap-4">
          {techStackIcons.map((iconName) => (
            <ImageWithText
              url={icons[iconName].url}
              title={icons[iconName].title}
              alt={icons[iconName].title}
            />
          ))}
        </div>
      </div>
    </TextWrapper>
  );
}
