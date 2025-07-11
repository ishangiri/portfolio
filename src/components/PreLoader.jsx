'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 10 ? "" : prev + "."));
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (<div className="md:text-2xl text-sm">
    Loading Ishan's Portfolio{dots}
  </div>)
}

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // ~2.2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-green-500 font-mono text-lg"
        >
          <LoadingDots />
        </motion.div>
      )}
    </AnimatePresence>
  );
}