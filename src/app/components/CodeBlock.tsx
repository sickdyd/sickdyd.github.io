export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-md bg-slate-200 font-mono font-thin text-inherit">
      {children}
    </span>
  );
}
