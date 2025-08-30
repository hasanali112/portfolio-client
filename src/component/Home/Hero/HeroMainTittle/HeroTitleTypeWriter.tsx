"use client";
import { Typewriter } from "react-simple-typewriter";

const HeroTitleTypeWriter = () => {
  return (
    <div>
      <Typewriter
        words={["Developer"]}
        loop={true}
        typeSpeed={150}
        deleteSpeed={80}
        delaySpeed={1000}
      />
    </div>
  );
};

export default HeroTitleTypeWriter;
