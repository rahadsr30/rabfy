"use client";
import { useState } from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import product from "@/assets/productImg.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

const allProducts = [
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
    title: "Customizable Phone Case",
    price: 16.99,
    discountPrice: 8.49,
    rating: 4.7,
  },
  {
    id: 3,
    image: product,
    title: "Dream Big Notebook",
    price: 21.99,
    discountPrice: 14.59,
    rating: 4.2,
  },
  {
    id: 4,
    image: product,
    title: "Stay Positive T-Shirt",
    price: 25.2,
    discountPrice: 19.99,
    rating: 4.3,
  },
  {
    id: 5,
    image: product,
    title: "Wireless Headphones",
    price: 99.99,
    discountPrice: 79.99,
    rating: 4.6,
  },
  {
    id: 6,
    image: product,
    title: "Smart Watch",
    price: 150,
    discountPrice: 120,
    rating: 4.5,
  },
  {
    id: 7,
    image: product,
    title: "Gaming Mouse",
    price: 60,
    discountPrice: 45,
    rating: 4.4,
  },
  {
    id: 8,
    image: product,
    title: "Bluetooth Speaker",
    price: 90,
    discountPrice: 70,
    rating: 4.2,
  },
  {
    id: 9,
    image: product,
    title: "Coffee Maker",
    price: 75,
    discountPrice: 50,
    rating: 4.3,
  },
  {
    id: 10,
    image: product,
    title: "Noise Cancelling Earbuds",
    price: 130,
    discountPrice: 100,
    rating: 4.8,
  },
  {
    id: 11,
    image: product,
    title: "Laptop Stand",
    price: 40,
    discountPrice: 30,
    rating: 4.2,
  },
  {
    id: 12,
    image: product,
    title: "Portable Charger",
    price: 35,
    discountPrice: 25,
    rating: 4.5,
  },
  {
    id: 13,
    image: product,
    title: "Vibrant Sunset Mug",
    price: 21.99,
    discountPrice: 15.0,
    rating: 4.5,
  },
  {
    id: 14,
    image: product,
    title: "Customizable Phone Case",
    price: 16.99,
    discountPrice: 8.49,
    rating: 4.7,
  },
  {
    id: 15,
    image: product,
    title: "Dream Big Notebook",
    price: 21.99,
    discountPrice: 14.59,
    rating: 4.2,
  },
  {
    id: 16,
    image: product,
    title: "Stay Positive T-Shirt",
    price: 25.2,
    discountPrice: 19.99,
    rating: 4.3,
  },
  {
    id: 17,
    image: product,
    title: "Wireless Headphones",
    price: 99.99,
    discountPrice: 79.99,
    rating: 4.6,
  },
  {
    id: 18,
    image: product,
    title: "Smart Watch",
    price: 150,
    discountPrice: 120,
    rating: 4.5,
  },
  {
    id: 19,
    image: product,
    title: "Gaming Mouse",
    price: 60,
    discountPrice: 45,
    rating: 4.4,
  },
  {
    id: 20,
    image: product,
    title: "Bluetooth Speaker",
    price: 90,
    discountPrice: 70,
    rating: 4.2,
  },
  {
    id: 21,
    image: product,
    title: "Coffee Maker",
    price: 75,
    discountPrice: 50,
    rating: 4.3,
  },
  {
    id: 22,
    image: product,
    title: "Noise Cancelling Earbuds",
    price: 130,
    discountPrice: 100,
    rating: 4.8,
  },
  {
    id: 23,
    image: product,
    title: "Laptop Stand",
    price: 40,
    discountPrice: 30,
    rating: 4.2,
  },
  {
    id: 24,
    image: product,
    title: "Airbrush",
    price: 35,
    discountPrice: 25,
    rating: 4.5,
  },
];

const ITEMS_PER_PAGE = 12;

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section>
      <div className="bg-[#FAFAFA] p-4">
        <div className="wrapper mx-auto flex justify-between items-center ">
          <div className="flex items-center gap-x-2 text-lg lg:text-2xl font-medium text-[#3A3A3F]">
            <h2>Categories</h2>
            <MdOutlineKeyboardArrowDown />
          </div>

          <div className="flex items-center gap-x-4">
            <button className="border-2 bg-white border-black px-4 py-2 rounded-lg flex items-center gap-x-2 text-lg lg:text-2xl font-medium text-[#3A3A3F]">
              Filter
              <FiFilter />
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 lg:gap-y-10 gap-x-6 mt-7 lg:mt-14">
          {currentProducts.map((product) => (
            <div key={product.id}>
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
                <button className="border-2 border-black px-4 py-2 rounded-xl flex items-center gap-x-2 text-base font-medium text-black">
                  Add to Cart
                  <IoCartOutline className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full transition ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            <IoIosArrowBack size={24} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  currentPage === pageNumber
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full transition ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
