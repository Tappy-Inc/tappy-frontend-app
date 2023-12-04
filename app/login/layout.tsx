import { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default layout;
