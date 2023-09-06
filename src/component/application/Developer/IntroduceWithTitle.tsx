import { ReactNode } from "react";

interface IntroduceProps {
  title: string;
  children: ReactNode;
}

export default function IntroduceWithTitle({
  title,
  children,
}: IntroduceProps) {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <div className="py-14">{children}</div>
    </div>
  );
}
