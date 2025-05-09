import NextLink, { LinkProps } from "next/link";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";

export default function Link({
  children,
  target,
  href,
  underline = true,
  ...props
}: LinkProps & {
  children: React.ReactNode;
  target?: string;
  href: string;
  underline?: boolean;
}) {
  const underlineClassName = underline ? "border-b" : "";

  return (
    <span className={`link ${underlineClassName}`}>
      <NextLink
        {...props}
        target={target}
        href={href}
        className="text-nowrap sm:text-wrap"
      >
        {children}
        {(target === "_blank" || href?.includes("mailto:")) && (
          <ExternalLinkIcon />
        )}
      </NextLink>
    </span>
  );
}
