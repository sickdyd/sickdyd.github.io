export default function Subtitle({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="shadow-3d mb-4 mt-4 inline-block rounded bg-primary pb-0.5 pl-2 pr-2 pt-0.5 text-xs font-semibold text-tertiary shadow-md">
      {children}
    </h3>
  );
}
