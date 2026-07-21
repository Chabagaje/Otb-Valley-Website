import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );

    const elements = Array.from(document.querySelectorAll(".reveal"));
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans overflow-x-hidden">
      <Navbar />
      <main className="relative flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
