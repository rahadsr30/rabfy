import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function page() {
  return (
    <div className="wrapper py-section">
      <div>
        <IoCheckmarkCircle className="size-24 mx-auto text-green-500 mb-6" />
      </div>
      <div className="text-center">
        <h2 className="text-title text-[#3A3A3F] mb-3">Thank you</h2>
        <p className="text-body text-[#4B4B53] mb-6">
          Thank you for your purchase! Your order has been placed and is being
          processed.
        </p>
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        <button className="border-2  border-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-black">
          <a href="http://localhost:3000/order">View Order</a>
        </button>
        <button className="border-2 bg-black border-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
