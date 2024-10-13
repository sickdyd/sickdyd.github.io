"use client";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <span
      onClick={handleOnClick}
      className="place-self-start rounded-md border border-quaternary bg-tertiary pb-0.5 pl-3 pr-3 pt-0.5 text-sm text-white hover:cursor-pointer hover:text-primary"
    >
      BACK
    </span>
  );
}
