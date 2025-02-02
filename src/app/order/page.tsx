"use client";
import React, { useEffect, useState } from "react";
import product from "@/assets/products1.png";
import Image, { StaticImageData } from "next/image";

interface Order {
  id: number;
  product: string;
  image: string | StaticImageData;
  price: number;
  orderDate: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  deliveryTime: string;
  trackingNumber: string;
}

const ordersData: Order[] = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    image: product, // Replace with actual image URL
    price: 999,
    orderDate: "2025-02-01",
    status: "Shipped",
    deliveryTime: "3-5 Business Days",
    trackingNumber: "123456789",
  },
  {
    id: 2,
    product: "Samsung Galaxy S24 Ultra",
    image: product,
    price: 1199,
    orderDate: "2025-01-28",
    status: "Delivered",
    deliveryTime: "2 Days",
    trackingNumber: "987654321",
  },
  {
    id: 3,
    product: "MacBook Pro 16-inch",
    image: product,
    price: 2499,
    orderDate: "2025-01-25",
    status: "Pending",
    deliveryTime: "7 Business Days",
    trackingNumber: "N/A",
  },
];

// Function to assign colors based on order status
const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "Pending":
      return "text-yellow-600";
    case "Shipped":
      return "text-blue-600";
    case "Delivered":
      return "text-green-600";
    case "Cancelled":
      return "text-red-600";
    default:
      return "";
  }
};

export default function Page() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulating API call (Replace with your backend API)
    setOrders(ordersData);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="w-full table-auto border-collapse text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Order Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Delivery Time</th>
              <th className="px-4 py-2 text-left">Tracking</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2 flex items-center gap-3">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={60}
                    height={60}
                    className="object-cover rounded"
                  />
                  {order.product}
                </td>
                <td className="px-4 py-2">${order.price}</td>
                <td className="px-4 py-2">{order.orderDate}</td>
                <td
                  className={`px-4 py-2 font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2">{order.deliveryTime}</td>
                <td className="px-4 py-2">
                  {order.trackingNumber !== "N/A" ? (
                    <a
                      href={`https://track.aftership.com/${order.trackingNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Track Order
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
