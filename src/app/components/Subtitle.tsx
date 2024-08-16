export default function Subtitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mb-3 inline-block rounded bg-yellow-200 pb-0.5 pl-2 pr-2 pt-0.5 text-sm">
      {children}
    </div>
  );
}
