"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import product from "@/assets/products1.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      price: 140,
      quantity: 1,
      image: product,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: 350,
      quantity: 1,
      image: product,
    },
    {
      id: 3,
      name: "Iphone 14",
      price: 599,
      quantity: 1,
      image: product,
    },
    {
      id: 4,
      name: "Polo Shirt",
      price: 30,
      quantity: 1,
      image: product,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setSelectedItems((prevSelected) =>
      prevSelected.filter((item) => item !== id)
    );
  };

  const selectedCart = cart.filter((item) => selectedItems.includes(item.id));
  const subtotal = selectedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 20;
  const discount = subtotal > 300 ? 50 : 0;
  const total = subtotal + shipping - discount;

  const numberOfItems = selectedCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="wrapper py-section grid gap-8 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        {cart.length === 0 ? (
          <p className="text-[#4B4B53]">Your cart is empty.</p>
        ) : (
          <div className="border-2 rounded-lg">
            <table className="w-full border-collapse">
              <thead className="border-b border-[#CECFD3] ">
                <tr className="text-left ">
                  <th className="p-4 text-[#28272A] text-body font-medium">
                    Select
                  </th>
                  <th className="p-4 text-[#28272A] text-body font-medium">
                    Product
                  </th>
                  <th className="p-4 text-[#28272A] text-body font-medium text-center">
                    Quantity
                  </th>
                  <th className="p-4 text-[#28272A] text-body font-medium text-center">
                    Total
                  </th>
                  <th className="p-4 text-[#28272A] text-body font-medium text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4  text-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="w-4 h-4  cursor-pointer"
                      />
                    </td>

                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="rounded-md border p-2"
                      />
                      <div>
                        <h3 className="text-base lg:text-lg text-[#0A0A0B] font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-body text-[#414045]">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-4 border w-max px-3 py-2 rounded-lg mt-4 text-[#4B4B53]">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-semibold">
                          {item.quantity}
                        </span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </td>

                    {/* Total Price per Item */}
                    <td className="p-4 text-center font-medium text-body text-[#28272A]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="p-6 h-[300] rounded-lg border">
        <h3 className="text-lg lg:text-2xl text-[#28272A] font-bold border-b mb-4">
          Order Summary
        </h3>
        {selectedItems.length === 0 ? (
          <p className="text-[#4B4B53]">No items selected.</p>
        ) : (
          <div>
            <div className="flex justify-between text-[#414045] text-body font-medium mb-2">
              <span>Items ({numberOfItems})</span>
              <span>{`$${subtotal.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-[#414045] text-body font-medium mb-2">
              <span>Discount:</span>
              <span className={discount > 0 ? "text-[#414045]" : ""}>
                {discount > 0 ? `- $${discount.toFixed(2)}` : "$0.00"}
              </span>
            </div>
            <div className="flex justify-between text-[#414045] text-body font-medium mb-2">
              <span>Shipping:</span>
              <span className={shipping === 0 ? "text-[#414045]" : ""}>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-base text-[#28272A] lg:text-lg font-semibold mt-4 border-t pt-2">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className={`w-full mt-4 py-3 rounded-md transition ${
                selectedItems.length > 0
                  ? "bg-black text-white"
                  : "bg-white text-black cursor-not-allowed"
              }`}
              disabled={selectedItems.length === 0}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
