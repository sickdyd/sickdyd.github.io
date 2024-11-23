import Image from "next/image";
import { icons } from "../data/icons";
import ImageWithText from "./ImageWithText";
import Subtitle from "./Subtitle";
import TextWrapper from "./TextWrapper";

export default function RecentWorkEntry({
  title,
  description,
  link,
  techStackIcons = [],
  codeblock = "",
  target = "_self",
  image = "",
}: {
  title: string;
  description: string;
  link: string;
  techStackIcons?: string[];
  codeblock?: string;
  target?: string;
  image?: string;
}) {
  return (
    <TextWrapper href={link} target={target}>
      <div className="flex flex-col">
        <Subtitle>{title}</Subtitle>
        <p>
          {description}
          <br />
          <div className="mt-4 hidden text-right text-sm text-primary sm:block">
            show more &gt;
          </div>
        </p>
        {image && (
          <Image
            src={image}
            alt={title}
            className="mt-4 max-w-52 rounded-lg sm:max-w-full sm:self-center"
            width="300"
            height="300"
          />
        )}
        {codeblock && (
          <pre className="mt-4 max-w-full text-ellipsis rounded-md bg-gray-900 p-4 text-xs text-green-600">
            {codeblock}
          </pre>
        )}
        <span className="mb-6 mt-6 text-nowrap text-xs text-primary">
          TECH STACK
        </span>
        <div className="grid grid-cols-8 gap-4 sm:grid-cols-4">
          {techStackIcons.map((iconName) => (
            <ImageWithText
              key={iconName}
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
