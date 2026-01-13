import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-4 ${className}`}>
      {children}
    </div>
  );
};
