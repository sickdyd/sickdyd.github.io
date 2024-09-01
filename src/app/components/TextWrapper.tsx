export default function TextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 rounded-lg border border-quaternary bg-secondary pb-6 pl-8 pr-8 pt-6 shadow-sm">
      {children}
    </div>
  );
}
