import { cn } from "@/utils/cn";

type TProps = {
  title: string;
  image?: React.ReactNode;
  className?: string;
};

const MegicButton = ({ title, image, className }: TProps) => {
  return (
    <button
      className={cn(
        `relative w-[50%] inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none  focus:ring-offset-2 focus:ring-offset-slate-50`,
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-3 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
        {title} <span>{image}</span>
      </span>
    </button>
  );
};

export default MegicButton;
