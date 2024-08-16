export function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <p className="pb-6">{children}</p>;
}
