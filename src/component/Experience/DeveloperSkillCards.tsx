import React from "react";

const DeveloperSkillsCard = () => {
  const skills = [
    { icon: "🌐", name: "HTML" },
    { icon: "🎨", name: "CSS" },
    { icon: "🌪️", name: "Tailwind" },
    { icon: "🛡️", name: "ShadCN UI" },
    { icon: "🔧", name: "Ant Design" },
    { icon: "🟨", name: "JavaScript" },
    { icon: "🔷", name: "TypeScript" },
    { icon: "⚛️", name: "React" },
    { icon: "🔬", name: "Next.js" },
    { icon: "🔄", name: "Redux" },
    { icon: "🌐", name: "Tanstack Query" },
    { icon: "📡", name: "Axios" },
    { icon: "🚂", name: "Express.js" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🍃", name: "Mongoose" },
    { icon: "🔬", name: "Prisma" },
    { icon: "🔺", name: "GraphQL" },
    { icon: "💾", name: "MongoDB" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🔀", name: "Git" },
    { icon: "▲", name: "Vercel" },
    { icon: "📦", name: "NPM" },
    { icon: "🧶", name: "Yarn" },
    { icon: "📮", name: "Postman" },
    { icon: "🖥️", name: "VS Code" },
  ];

  return (
    <div className="bg-[#0f0715] md:pt-32 lg:pt-20 pt-16 pb-20 transition-transform duration-1000 ease-in-out">
      <div className="w-full max-w-[1400px] px-[15px] mx-auto">
        <h1 className="md:text-4xl text-4xl lg:text-5xl text-center font-bold text-white mb-2 tracking-wider">
          Experience
        </h1>
        <div className="pb-4 pt-10 text-white">
          <div className="text-xl sm:text-2xl font-bold text-[#8ac9f4]">
            MERN Stack Developer
          </div>
          <div className="text-sm sm:text-base mt-5">
            ATC Tech Ltd, Hi-Tech Park, Rajshahi, Bangladesh (OnSite)
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-3">
            14 Oct 2024 - 28, Feb 2025
          </div>
        </div>
        <div>
          <div className="mb-4 mt-5 text-gray-50">
            <p className="text-sm sm:text-base">
              As a MERN Stack Developer at ATC Tech Ltd, I specialize in
              designing, building, and maintaining scalable and dynamic web
              applications. My expertise spans both frontend and backend
              development, leveraging technologies like JavaScript, TypeScript,
              React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, Mongoose,
              PostgreSQL, and Prisma. I also utilize tools and libraries such as
              Redux, TanStack Query, Postman, and GitHub, and integrate payment
              systems like Aamarpay and SSLCommerz to deliver seamless user
              experiences.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 mt-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 border rounded-md text-center 
                          transition-colors duration-200 
                         text-xs sm:text-sm"
              >
                <span className="mr-1 text-lg">{skill.icon}</span>
                <span className="text-gray-100"> {skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSkillsCard;
