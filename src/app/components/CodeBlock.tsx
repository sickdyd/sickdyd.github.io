export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-md bg-tertiary font-mono font-thin text-inherit">
      {children}
    </span>
  );
}
