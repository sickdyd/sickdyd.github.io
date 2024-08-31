export default function TextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 rounded-lg border bg-slate-50 pb-6 pl-8 pr-8 pt-6 shadow-sm">
      {children}
    </div>
  );
}
