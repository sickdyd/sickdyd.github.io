import Image from "next/image";

export default function ImageWithText({
  url,
  title,
  alt,
}: {
  url: string;
  title: string;
  alt?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
        src={url}
        width={48}
        height={48}
        alt={alt ? alt : title}
      />
      <p className="mt-2 text-center text-xs">{title}</p>
    </div>
  );
}
