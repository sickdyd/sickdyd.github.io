export default function Subtitle({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="shadow-3d mb-4 mt-8 inline-block flex-grow-0 self-start rounded bg-primary pb-0.5 pl-2 pr-2 pt-0.5 text-sm font-bold uppercase text-tertiary shadow-md sm:text-xl">
      {children}
    </h3>
  );
}
