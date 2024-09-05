export default function SuperStrong({
  children,
}: {
  children: React.ReactNode;
}) {
  return <strong className="text-primary">{children}</strong>;
}
