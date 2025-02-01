"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import product from "@/assets/productImg.png";

const topPicks = [
  {
    id: 1,
    image: product,
    title: "Personalized Coffee Mug",
    price: 25.49,
    discountPrice: 19.99,
    rating: 4.7,
  },
  {
    id: 2,
    image: product,
    title: "Classic Tote Bag",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.7,
  },
  {
    id: 3,
    image: product,
    title: "Full Sleeve T-shirt",
    price: 21.99,
    discountPrice: 14.49,
    rating: 4.7,
  },
  {
    id: 4,
    image: product,
    title: "Vibrant Sunset Mug",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.7,
  },
];

export default function TopPicks() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  return (
    <section className="py-section">
      <div className="wrapper">
        <div>
          <h1 className="text-[#3A3A3F] text-title">Top Picks</h1>
          <p className="text-body text-[#585962] mt-3">
            Discover the products our customers love the most. Handpicked for
            quality, style, and value!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 lg:gap-y-10 gap-x-6 mt-7 lg:mt-14">
          {topPicks.map((topPicks) => (
            <div key={topPicks.id}>
              <div className="bg-[#FAFAFA] p-4 mx-auto w-full rounded-xl">
                <Image
                  src={topPicks.image}
                  alt={topPicks.title}
                  className=" object-cover w-auto mx-auto"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <h3 className="text-product text-[#424348]">
                  {topPicks.title}
                </h3>
                <span className="flex items-center gap-2">
                  <MdOutlineStar className="text-yellow-400" />
                  <span className="text-body text-[#424348]">
                    {topPicks.rating}
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <span className="text-base lg:text-xl font-bold text-[#0A0A0B]">
                  ${topPicks.discountPrice}
                </span>
                <span className="text-gray-500 text-sm lg:text-base line-through">
                  ${topPicks.price}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="border-2 border-black px-4 py-2 rounded-lg flex items-center gap-2 text-black hover:bg-black hover:text-white transition">
                  Add to Cart <IoCartOutline className="size-5" />
                </button>
                <button
                  onClick={() => toggleLike(topPicks.id)}
                  className="text-2xl ml-4"
                >
                  {likedProducts.includes(topPicks.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
