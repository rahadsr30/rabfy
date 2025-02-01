"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment Successful!");
    router.push("/order-success");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Billing Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </form>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
