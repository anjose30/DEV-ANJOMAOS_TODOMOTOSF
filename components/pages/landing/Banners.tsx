"use client";
import { useState, useEffect } from "react";

export default function Banners() {
  const img = [
    { id: 1, src: "/BAN1.png", alt: "Banner" },
    { id: 2, src: "/BAN2.png", alt: "Banner" },
    { id: 3, src: "/BAN3.png", alt: "Banner" },
  ];

  const duration = 4500;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % img.length);
    }, duration);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative w-full " style={{ aspectRatio: "96/35" }}>
        {img.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
