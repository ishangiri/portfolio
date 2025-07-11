"use client";
import { lazy, Suspense} from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import DialogComponent from "@/components/DialogComponent";

const LazyProjects = lazy(() => import('@/components/Projects'));
const LazySkills = lazy(() => import('@/components/Skills'));


export default function Home() {


  return (
    <div className="overflow-x-hidden" >
   <NavBar />
   <div className="sm:mt-0 flex flex-col gap-10 mt-20">
   <Profile />
      <Suspense fallback={<div className="text-center text">Loading Projects...</div>}>
        <LazyProjects />
      </Suspense>
    <Suspense fallback={<div className="text-center text">Loading Projects...</div>}>
        <LazySkills />
      </Suspense>
      <Contact />
   </div>
    </div>
  );
}
