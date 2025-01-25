const Experience = () => {
  const stats = [
    { value: "1.5", label: "Years of Experience" },
    { value: "50+", label: "Project Completed" },
    { value: "1K", label: "Happy Clients" },
    { value: "95%", label: "Success Rate in Projects" },
  ];

  return (
    <div className="bg-[#0f0715] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl font-bold">{stat.value}</span>
            <span className="text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
