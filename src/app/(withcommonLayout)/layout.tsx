import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";
import BottomNav from "@/component/shared/BottomNav";
import ScrollToTop from "@/component/ui/ScrollToTop";
import React from "react";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="pb-16 md:pb-0 pt-20">
        {children}
      </div>
      <Footer />
      <BottomNav />
      <ScrollToTop />
    </div>
  );
};

export default WithCommonLayout;
