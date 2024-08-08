import { ReactNode } from "react";

type TChildrenprops = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenprops) => {
  return (
    <div className="w-full max-w-[1400px] px-[25px] mx-auto">{children}</div>
  );
};

export default Container;
