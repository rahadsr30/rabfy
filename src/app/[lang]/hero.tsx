"use client";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannar1 from "@/assets/banner.png";
import bannar2 from "@/assets/heroBanner.png";
import bannar3 from "@/assets/banner1.png";

const banners = [
  {
    image: bannar3,
    title: "Shop Our Bestsellers",
    description:
      "From trendy apparel to unique gifts, explore our most popular products loved by customers worldwide.",
    buttonText: "Start Shopping",
    link: "/shop",
  },
  {
    image: bannar1,
    title: "New Arrivals Just Dropped!",
    description: "Check out the latest trends in fashion.",
    buttonText: "Explore",
    link: "/new-arrivals",
  },
  {
    image: bannar2,
    title: "Exclusive Deals for You!",
    description: "Limited time offers on our best collections.",
    buttonText: "Get Discount",
    link: "/offers",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <header>
      <Navbar />
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
                priority
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-6">
                <h2 className="text-heading text-white mb-3">{item.title}</h2>
                <p className="text-hero text-[#F5F5F6] mb-6">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="bg-white px-6 py-3 rounded-md text-hero hover:bg-gray-100 transition text-[#0A0A0B]"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-10 h-2 rounded-xl transition-all ${
                currentIndex === index ? "bg-white w-16" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
