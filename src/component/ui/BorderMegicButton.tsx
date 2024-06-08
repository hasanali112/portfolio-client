"use client";

type TProp = {
  title: string;
};

const BorderMegicButton = ({ title }: TProp) => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/MD Hasan Ali Khan_MERN Stack Developer.pdf";
    link.download = "MD Hasan Ali Khan_MERN Stack Developer.pdf";
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <button
      onClick={downloadPDF}
      className="relative w-[50%] inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none  focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-3 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-to-line"
          >
            <path d="M12 17V3" />
            <path d="m6 11 6 6 6-6" />
            <path d="M19 21H5" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default BorderMegicButton;
