"use-client";
import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

const LazyProjects = lazy(() => import('@/app/components/Projects'));
const LazySkills = lazy(() => import('@/app/components/Skills'))

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
   </div>
    </div>
  );
}
