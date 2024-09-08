import GoBack from "./GoBack";

export default function H1({
  children,
  withBack,
}: {
  children: React.ReactNode;
  withBack?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <h1 className="mb-8 text-4xl font-bold text-primary">{children}</h1>
      {withBack && <GoBack />}
    </div>
  );
}
