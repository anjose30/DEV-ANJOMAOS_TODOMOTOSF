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

  }, [current, img.length]);

  return (
    <section className="w-full min-h-[calc(100vh-95px)]">
      <div className="">
        {img.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity lg:pt-15 duration-1000 ease-in-out xs:top-16 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.src}
              alt={`Slide ${item.id}`}
              className="w-full h- object-cover object-center "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
