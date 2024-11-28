import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-[1200px] bg-white shadow-sm">
      {children}
    </div>
  );
}
