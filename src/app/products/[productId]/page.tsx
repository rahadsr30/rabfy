"use client";
import Image from "next/image";
import React, { useState } from "react";
import product from "@/assets/products1.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  HiOutlineLocationMarker,
  HiOutlineTruck,
  HiOutlineRefresh,
  HiOutlineCreditCard,
} from "react-icons/hi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const sections = [
  {
    id: 1,
    title: "Delivery",
    icon: <HiOutlineLocationMarker className="size-5 text-gray-500" />,
    content: (
      <p className="text-[#4B4B53] lg:text-base text-sm mt-2">
        To get accurate Delivery information,{" "}
        <a href="#" className="text-black underline">
          Edit Location
        </a>
        .
      </p>
    ),
  },
  {
    id: 2,
    title: "Shipping Charge",
    icon: <HiOutlineTruck className="size-5 text-gray-500" />,
    content: (
      <p className="text-[#4B4B53] lg:text-base text-sm mt-2">
        Shipping charges will be calculated at checkout.
      </p>
    ),
  },
  {
    id: 3,
    title: "Returns",
    icon: <HiOutlineRefresh className="size-5 text-gray-500" />,
    content: (
      <p className="text-[#4B4B53] lg:text-base text-sm mt-2">
        Easy 30-day returns.
      </p>
    ),
  },
  {
    id: 4,
    title: "Payments",
    icon: <HiOutlineCreditCard className="size-5 text-gray-500" />,
    content: (
      <p className="text-[#4B4B53] lg:text-base text-sm mt-2">
        We accept all major payment methods.
      </p>
    ),
  },
];

const reviews = [
  {
    id: 1,
    name: "Mahmudul Hasan",
    rating: 5,
    timeAgo: "1 hour ago",
    review:
      "Wonderful! I love this product. It's so comfortable and easy to wear.",
    images: [product, product, product],
    categories: ["Shoes"],
  },
  {
    id: 2,
    name: "Riaz Ahmad",
    rating: 4.5,
    timeAgo: "2 days ago",
    review: "Wow! I love this product. It's so comfortable and easy to wear.",
    images: [product, product, product, product],
    categories: ["Dress"],
  },
  {
    id: 3,
    name: "Rokibul Hasan",
    rating: 4.5,
    timeAgo: "1 week ago",
    review:
      "Exceeded expectations. I love this product. It's so comfortable and easy to wear.",
    images: [product, product, product, product, product, product],
    categories: ["Fresh Fruit", "Vegetables"],
  },
  {
    id: 4,
    name: "Devid",
    rating: 5.0,
    timeAgo: "1 weeks ago",
    review:
      "Awesome! I love this product. It's so comfortable and easy to wear.",
    images: [product, product],
    categories: ["Watches"],
  },
  {
    id: 5,
    name: "Jos Root",
    rating: 4.1,
    timeAgo: "2 weeks ago",
    review: "Exceeded expectations.",
    images: [product, product, product, product, product, product],
    categories: ["Cosmetics"],
  },
  {
    id: 6,
    name: "Frank",
    timeAgo: "2 weeks ago",
    rating: 5,
    review: "Fantastic!",
    images: [product, product],
    categories: ["Microphones", "Headphones"],
  },
  {
    id: 7,
    name: "Grace",
    timeAgo: "1 month ago",
    rating: 4,
    review: "Exceeded expectations.",
    images: [product, product, product, product],
    categories: ["Electronics"],
  },
];

export default function Page() {
  const [liked, setLiked] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [openSection, setOpenSection] = useState<number | null>(1);

  const [activeTab, setActiveTab] = useState("description");

  const [visibleReviews, setVisibleReviews] = useState(3);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, boolean>>({});

  const handleSeeMore = () => {
    setVisibleReviews(10);
  };

  const handleHelpfulClick = (id: number) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="wrapper py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="border-2 rounded-lg flex justify-center gap-8 p-16 items-center">
            <span className="text-[#ACADB4] text-5xl bg-white shadow-md p-2 rounded-full">
              <IoIosArrowRoundBack />
            </span>
            <Image src={product} alt="" width={330} height={300} />
            <span className="text-[#ACADB4] text-5xl bg-white shadow-md p-2 rounded-full">
              <IoIosArrowRoundForward />
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-7">
            <Image
              src={product}
              alt=""
              width={125}
              height={100}
              className="border-2 rounded-lg p-4"
            />
            <Image
              src={product}
              alt=""
              width={125}
              height={100}
              className="border-2 rounded-lg p-4"
            />
            <Image
              src={product}
              alt=""
              width={125}
              height={100}
              className="border-2 rounded-lg p-4"
            />
            <Image
              src={product}
              alt=""
              width={125}
              height={100}
              className="border-2 rounded-lg p-4"
            />
          </div>
        </div>
        <div>
          <p className="bg-[#FAFAFA] w-max px-3 py-2 rounded-3xl text-[#26F853] text-sm font-medium ">
            In Stock
          </p>
          <h1 className="text-title text-[#3A3A3F]">Stay Positive T-Shirt</h1>
          <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-2 text-[#4B4B53] text-body font-medium">
              4.7
              <span className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <MdOutlineStar key={i} className="text-yellow-400" />
                ))}
                (349)
              </span>
            </p>

            <button onClick={() => setLiked(!liked)} className="text-2xl">
              {liked ? <FcLike /> : <CiHeart />}
            </button>
          </div>

          <p className="text-base lg:text-xl font-bold text-[#0A0A0B] mt-2">
            $17.99
          </p>
          <div className="mt-2 flex items-center space-x-2">
            <p className="text-[#4B4B53] text-sm lg:text-base line-through">
              $21.99
            </p>
            <span className="text-[#0F0F11] text-sm font-medium">Save 40%</span>
          </div>

          <hr className="border-[#CECFD3] mt-4" />
          <div className="flex items-center space-x-2 mt-6">
            <p className="text-body text-[#4B4B53] font-medium">Size:</p>
            <div className="flex gap-3">
              <p className="text-body text-[#424348] hover:bg-[#F7F5FE] font-medium border py-2 px-4 rounded-lg">
                S
              </p>
              <p className="text-body text-[#424348] font-medium border hover:bg-[#F7F5FE] py-2 px-4  rounded-lg">
                M
              </p>
              <p className="text-body text-[#424348] font-medium border hover:bg-[#F7F5FE] py-2 px-4  rounded-lg">
                L
              </p>
              <p className="text-body text-[#424348] font-medium border hover:bg-[#F7F5FE] py-2 px-4  rounded-lg">
                XL
              </p>
              <p className="text-body text-[#424348] font-medium border hover:bg-[#F7F5FE] py-2 px-4  rounded-lg">
                XLL
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-body text-[#4B4B53] font-medium">Quantity:</p>
            <div className="flex items-center gap-4 border w-max px-3 py-2 rounded-lg mt-4 text-[#4B4B53]">
              <button onClick={decreaseQuantity}>
                <AiOutlineMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button onClick={increaseQuantity}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="border-2 w-full border-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-black">
              Add to Cart <IoCartOutline className="size-5" />
            </button>
            <button className="border-2 w-full bg-black border-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white transition">
              Buy Now <IoCartOutline className="size-5" />
            </button>
          </div>
          <div className="border-b  divide-y mt-10 lg:mt-16">
            {sections.map((section) => (
              <div key={section.id} className="py-4">
                <button
                  onClick={() =>
                    setOpenSection(
                      openSection === section.id ? null : section.id
                    )
                  }
                  className="w-full flex justify-between items-center text-left font-semibold text-xl text-[#424348]"
                >
                  <span className="flex items-center gap-3">
                    {section.icon}
                    {section.title}
                  </span>
                  {openSection === section.id ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </button>
                {openSection === section.id && (
                  <div className="mt-2">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-16 bg-[#FAFAFA] p-7 rounded-lg">
        <div className="border-b flex space-x-10 text-lg lg:text-2xl font-semibold text-[#424348]">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 border-b-2 ${
              activeTab === "description"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 border-b-2 flex items-center gap-1 ${
              activeTab === "reviews"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Customer Review
            <span className="bg-[#F7F5FE] px-2 rounded-full text-[#424348] text-sm">
              13
            </span>
          </button>
        </div>

        {activeTab === "description" && (
          <div className="mt-6 text-[#4B4B53] text-body leading-relaxed">
            <p className="mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <ul className="mt-4 list-disc ">
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.l
              </li>
              <li>
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </li>
              <li>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mt-6 flex flex-col lg:flex-row gap-10">
            {/* Rating Summary */}
            <div>
              <div className="space-y-4">
                <div className="text-lg lg:text-2xl font-medium text-[#424348]">
                  <span className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <MdOutlineStar key={i} className="text-yellow-400" />
                    ))}
                    (13)
                  </span>
                </div>
                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-sm">{star}</span>
                      <div className="w-40 h-2 bg-gray-200 rounded-full">
                        <div
                          className="bg-black h-2 rounded-full"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
                Leave a Review
              </button>
            </div>

            <div className="space-y-6">
              {reviews.slice(0, visibleReviews).map((review) => (
                <div key={review.id} className="border-b">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-base lg:text-xl text-[#424348]">
                        {review.name}
                      </p>
                      <p className="text-[#424348] text-body">
                        {review.timeAgo}
                      </p>
                    </div>
                    <div className="flex mt-3">
                      {[...Array(5)].map((_, index) => {
                        if (index + 1 <= review.rating) {
                          return (
                            <FaStar key={index} className="text-yellow-400" />
                          );
                        } else if (index + 0.5 <= review.rating) {
                          return (
                            <FaStarHalfAlt
                              key={index}
                              className="text-yellow-400"
                            />
                          );
                        } else {
                          return (
                            <FaRegStar key={index} className="text-gray-400" />
                          );
                        }
                      })}
                    </div>
                  </div>

                  <p className="mt-2 text-[#4B4B53] text-body">
                    {review.review}
                  </p>

                  <div className="mt-3 flex gap-6">
                    {review.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt="review"
                        width={80}
                        height={100}
                        className="rounded-md p-3 border object-cover"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <p className="text-body text-[#4B4B53]">
                      Categories:
                      <span className="text-body font-medium text-[#424348]">
                        {review.categories.join(", ")}
                      </span>
                    </p>
                    <button
                      onClick={() => handleHelpfulClick(review.id)}
                      className={`flex items-center gap-1 text-gray-600 ${
                        helpfulVotes[review.id] ? "text-blue-500" : ""
                      }`}
                    >
                      <AiOutlineLike
                        className={`transition ${
                          helpfulVotes[review.id] ? "text-blue-500" : ""
                        }`}
                      />
                      {helpfulVotes[review.id] ? "Helpful (1)" : "Helpful?"}
                    </button>
                  </div>
                </div>
              ))}

              {visibleReviews < reviews.length && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSeeMore}
                    className="text-base lg:text-xl text-[#4B4B53] hover:underline"
                  >
                    See more reviews
                  </button>
                  <span>
                    <MdKeyboardArrowRight className="text-xl text-[#4B4B53]" />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
