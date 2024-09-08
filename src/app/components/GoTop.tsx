"use client";

export default function GoTop() {
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span
      onClick={handleOnClick}
      className="self-end rounded-md border border-quaternary bg-secondary pb-0.5 pl-2 pr-2 pt-0.5 text-white hover:cursor-pointer hover:text-primary"
    >
      TOP
    </span>
  );
}
