import { ReactNode } from "react";

type TChildrenprops = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenprops) => {
  return (
    <div className="w-full max-w-[1400px] px-[20px] mx-auto">{children}</div>
  );
};

export default Container;
