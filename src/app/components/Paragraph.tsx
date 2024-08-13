export function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <p className="mb-6">{children}</p>;
}
