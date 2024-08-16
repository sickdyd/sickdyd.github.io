import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import TextWrapper from "./TextWrapper";

const edu = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"], weight: ["400"] });

export default function Quote({
  cite,
  quote,
  author,
}: {
  cite: string;
  quote: string;
  author: string;
}) {
  return (
    <TextWrapper>
      <blockquote
        className={`flex flex-col text-4xl ${edu.className}`}
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
      >
        <i>{quote}</i>
        <span className="mt-2 font-sans text-sm text-slate-700">
          — {author}
        </span>
      </blockquote>
    </TextWrapper>
  );
}
