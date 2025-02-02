"use client";
import React, { useState } from "react";
import mastercard from "@/assets/icon/mastercard.png";
import card from "@/assets/icon/card.png";
import paypal from "@/assets/icon/paypal.png";
import Image from "next/image";
import product from "@/assets/products1.png";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: product,
    category: "Electronics",
    price: "$120",
    quantity: 2,
  },
  {
    id: 2,
    title: "Smartphone",
    image: product,
    category: "Mobile",
    price: "$999",
    quantity: 1,
  },
  {
    id: 3,
    title: "Gaming Laptop",
    image: product,
    category: "Computers",
    price: "$1500",
    quantity: 1,
  },
  {
    id: 4,
    title: "Running Shoes",
    image: product,
    category: "Fashion",
    price: "$80",
    quantity: 3,
  },
];

export default function Page() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="p-10">
      <div className="wrapper py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="p-6 border rounded-md">
              <h3 className="text-xl lg:text-2xl text-[#3A3A3F] font-semibold mb-4">
                Shipping Address
              </h3>
              <hr className="border-[#CECFD3] mb-4" />
              <form>
                <p className="text-[#4B4B53] text-start mb-2">Full Name</p>
                <input
                  type="text"
                  placeholder="Text here"
                  className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </form>
              <form>
                <p className="text-[#4B4B53] text-start mb-2">Phone Number</p>
                <input
                  type="number"
                  placeholder="Text here"
                  className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </form>
              <form>
                <p className="text-[#4B4B53] text-start mb-2">Email</p>
                <input
                  type="email"
                  placeholder="Text here"
                  className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </form>
              <form>
                <p className="text-[#4B4B53] text-start mb-2">Address</p>
                <input
                  type="text"
                  placeholder="Text here"
                  className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </form>
              <form>
                <p className="text-[#4B4B53] text-start mb-2">Zip Code</p>
                <input
                  type="text"
                  placeholder="Text here"
                  className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </form>
              <form>
                <select className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]">
                  <option>Select Country</option>
                  <option>Bangladesh</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </form>

              <div className="flex items-center gap-x-2 mt-4">
                <input
                  type="checkbox"
                  className="size-4 rounded text-[#4B4B53]"
                />
                <p className="text-body text-[#4B4B53]">Set as default</p>
              </div>
            </div>

            <div className="p-6 border rounded-md">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <hr className="border-[#CECFD3] my-3" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentMethodChange}
                      className="size-5"
                    />
                    <div>
                      <p className="text-base lg:text-lg text-[#3A3A3F] font-semibold">
                        Debit or Credit cards
                      </p>
                      <p className="text-[#4B4B53] text-small">
                        Pay with Debit or Credit cards
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      src={mastercard}
                      alt=""
                      className="object-cover w-10 border p-2 rounded-lg"
                    />

                    <Image
                      src={card}
                      alt=""
                      className="object-cover border w-10 p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {paymentMethod === "creditCard" && (
                <div className="mt-6">
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-[#4B4B53] text-start mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailsChange}
                      placeholder="Enter Card Number"
                      className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="expirationDate"
                        className="block text-[#4B4B53] text-start mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={cardDetails.expirationDate}
                        onChange={handleCardDetailsChange}
                        placeholder="MM/YY"
                        className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="cvv"
                        className="block text-[#4B4B53] text-start mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        placeholder="Text here"
                        className="w-full p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                      />
                    </div>
                  </div>
                </div>
              )}
              <hr className="border-[#CECFD3] my-3" />
              <h1 className="text-lg text-center lg:text-2xl text-[#4B4B53] font-medium">
                Or
              </h1>
              <hr className="border-[#CECFD3] my-3" />
              <div className="bg-[#CECFD3] flex justify-center">
                <Image
                  src={paypal}
                  alt=""
                  height={40}
                  width={120}
                  className="object-cover py-3 rounded-lg"
                />
              </div>
            </div>

            <div className="border-2 w-full bg-black text-center border-black py-4 rounded-lg ">
              <button className=" text-white text-lg lg:text-xl font-semibold">
                <a href="http://localhost:3000/cart/thankyou">
                  Place Your Order
                </a>
              </button>
              <p className="text-white text-body">Total: $2000.00</p>
            </div>
          </div>

          <div className="p-6 border h-[670px] rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl lg:text-2xl text-[#424348] font-bold">
                Order Summary
              </h3>
              <p className="text-[#0F0F11] text-body font-medium">4 Items</p>
            </div>
            <hr className="border-[#CECFD3] mb-4" />
            <div>
              <div className="grid grid-cols-1 gap-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b py-3"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        height={60}
                        width={60}
                        className="object-cover border p-2 rounded-lg"
                      />
                      <div>
                        <h3 className="text-base lg:text-lg text-[#0A0A0B] font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-[#414045] text-body">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-base lg:text-lg text-[#3A3A3F] font-semibold">
                        {product.price}
                      </p>
                      <p className="text-[#4B4B53] text-body">
                        Qty: {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-[#4B4B53] text-body font-medium">
                <span>Subtotal</span>
                <span>$2699.00</span>
              </div>
              <div className="flex justify-between items-center text-[#4B4B53] text-body font-medium">
                <span>Promo code?</span>

                <input
                  type="number"
                  placeholder="code"
                  className="w-1/3 p-3 mb-4 text-[#3A3A3F] text-body border border-[#EFEFF0] rounded bg-[#F5F5F6]"
                />
              </div>
              <div className="flex justify-between text-[#4B4B53] text-body font-medium">
                <span>Discount</span>
                <span>$499.00</span>
              </div>
              <hr className="border-[#CECFD3] mb-4" />
              <div className="flex justify-between font-bold text-base text-[#4B4B53] lg:text-lg">
                <span>Total</span>
                <span>2000.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
