import Image from "next/image";

export default function ImageWithText({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
        src={`/icons/${image}.svg`}
        width={48}
        height={48}
        alt={`${image} icon`}
      />
      <p className="mt-2 text-center text-xs">{text}</p>
    </div>
  );
}
