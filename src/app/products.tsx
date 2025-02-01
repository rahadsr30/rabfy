"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import product from "@/assets/productImg.png";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: product,
    title: "Vibrant Sunset Mug",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.5,
  },
  {
    id: 2,
    image: product,
    title: "Vibrant Sunset Mug",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.7,
  },
  {
    id: 3,
    image: product,
    title: "Customizable Phone Case",
    price: 16.99,
    discountPrice: 8.49,
    rating: 4.5,
  },
  {
    id: 4,
    image: product,
    title: "Dream Big Notebook",
    price: 21.99,
    discountPrice: 14.59,
    rating: 4.2,
  },
  {
    id: 5,
    image: product,
    title: "Stay Positive T-Shirt",
    price: 25.2,
    discountPrice: 19.99,
    rating: 4.2,
  },
  {
    id: 6,
    image: product,
    title: "Dream Big Notebook",
    price: 21.99,
    discountPrice: 14.59,
    rating: 4.2,
  },
  {
    id: 7,
    image: product,
    title: "Vibrant Sunset Mug",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.5,
  },
  {
    id: 8,
    image: product,
    title: "Customizable Phone Case",
    price: 16.99,
    discountPrice: 8.49,
    rating: 4.5,
  },
];

export default function Products() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <div className="wrapper py-section">
        <div>
          <h1 className="text-[#3A3A3F] text-title">Our Latest Arrivals</h1>
          <p className="text-body text-[#585962] mt-3">
            Discover fresh and unique products added by our talented sellers
            every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 lg:gap-y-10 gap-x-6 mt-7 lg:mt-14">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-[#FAFAFA] p-4 mx-auto w-full rounded-xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  className=" object-cover w-auto mx-auto"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <h3 className="text-product text-[#424348]">{product.title}</h3>
                <span className="flex items-center gap-2">
                  <MdOutlineStar className="text-yellow-400" />
                  <span className="text-body text-[#424348]">
                    {product.rating}
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <span className="text-base lg:text-xl font-bold text-[#0A0A0B]">
                  ${product.discountPrice}
                </span>
                <span className="text-gray-500 text-sm lg:text-base line-through">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="border-2 border-black px-4 py-2 rounded-lg flex items-center gap-2 text-black hover:bg-black hover:text-white transition">
                  Add to Cart <IoCartOutline className="size-5" />
                </button>
                <button
                  onClick={() => toggleLike(product.id)}
                  className="text-2xl ml-4"
                >
                  {likedProducts.includes(product.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-all"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
