"use client";
import { lazy, Suspense} from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
const LazyProjects = lazy(() => import('@/components/Projects'));
const LazySkills = lazy(() => import('@/components/Skills'));
import { Experience } from "@/components/Experience";
import ZapierChatbot from "@/components/Chatbot";
const portfolioNavItems = [
    { name: "Profile", href: "#profile" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact Me", href: "#contact" }
  ]

 const ctaButton = { name: "Hire Me", href: "#contact" }

export default function Home() {


  return (
    <div className="overflow-x-hidden" >
 <NavBar
        navItems={portfolioNavItems}
        showTime={true}
        ctaButton={ctaButton}
        activeTracking={true}
      />
   <div className="sm:mt-0 flex flex-col gap-10 mt-20">
   <Profile />
      <Suspense fallback={<div className="text-center text">Loading Projects...</div>}>
        <LazyProjects />
      </Suspense>
    <Suspense fallback={<div className="text-center text">Loading Skills...</div>}>
        <LazySkills />
      </Suspense>
      <ZapierChatbot />
    <Experience />
    
      <Contact />
   </div>
    </div>
  );
}
