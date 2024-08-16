export default function Subtitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <h3 className="shadow-3d mb-2 inline-block rounded bg-yellow-200 bg-yellow-gradient pb-0.5 pl-2 pr-2 pt-0.5 text-sm shadow-md">
      {children}
    </h3>
  );
}
