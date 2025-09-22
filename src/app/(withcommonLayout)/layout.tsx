import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";
import React from "react";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithCommonLayout;
