import Link from "next/link";

export default function TextWrapper({
  children,
  href,
  target,
}: {
  children: React.ReactNode;
  href?: string;
  target?: string;
}) {
  const className = `mb-4 rounded-lg border border-quaternary bg-secondary pb-6 pl-8 pr-8 pt-6 text-white shadow-sm ${
    href ? "hover:bg-quaternary" : ""
  }`;

  return href ? (
    <Link href={href} target={target}>
      <div className={className}>{children}</div>
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
