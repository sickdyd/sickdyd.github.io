import { Edu_VIC_WA_NT_Beginner } from "next/font/google";

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
    <div className="mb-6 flex w-full items-start justify-center gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
      <blockquote
        className={`flex flex-col text-4xl ${edu.className} items-center text-center`}
        cite={cite}
      >
        <i>{quote}</i>
        <span className="mt-2 font-mono text-sm text-gray-400">— {author}</span>
      </blockquote>
    </div>
  );
}
