export default function TextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 rounded-lg border bg-white p-6 shadow-lg">
      {children}
    </div>
  );
}
