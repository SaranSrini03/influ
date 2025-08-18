// app/influencers/page.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { value: 102000, label: "Total Audience" },
  { value: 92000, label: "Total Engagement" },
  { value: 12000, label: "Total Reach" },
  { value: 110, label: "Total Impression" },
  { value: 1000, label: "Avg. Daily Reach" },
];

// Hook to animate number counting
function useCountUp(end: number, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function InfluencersPage() {
  return (
    <div className="flex min-h-screen bg-white text-sm">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const count = useCountUp(stat.value, 2);
            return (
              <div
                key={idx}
                className="border rounded-lg p-5 flex flex-col justify-between shadow-sm"
              >
                <div className="text-3xl text-black font-semibold">
                  {count.toLocaleString()}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
