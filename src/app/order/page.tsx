"use client";
import React, { useEffect, useState } from "react";
import product from "@/assets/products1.png";
import Image, { StaticImageData } from "next/image";

interface Order {
  id: number;
  product: string;
  quantity: number;
  image: string | StaticImageData;
  price: number;
  orderDate: string;
  time: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  deliveryTime: string;
  trackingNumber: string;
}

const ordersData: Order[] = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    quantity: 1,
    image: product,
    price: 999,
    orderDate: "2025-02-01",
    time: "3:45 pm",
    status: "Shipped",
    deliveryTime: "3-5 Days",
    trackingNumber: "123456789",
  },
  {
    id: 2,
    product: "Smart Watch",
    quantity: 2,
    image: product,
    price: 1199,
    orderDate: "2025-01-28",
    time: "7:21 pm",
    status: "Delivered",
    deliveryTime: "2 Days",
    trackingNumber: "987654321",
  },
  {
    id: 3,
    product: "T-Shirt",
    quantity: 4,
    image: product,
    price: 449,
    orderDate: "2025-01-25",
    time: "10:57 am",
    status: "Pending",
    deliveryTime: "7 Days",
    trackingNumber: "N/A",
  },
];

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
    setOrders(ordersData);
  }, []);

  return (
    <div className="wrapper py-section">
      <div className="hidden md:block border-2 p-2 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Product
              </th>
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Price
              </th>
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Order Date
              </th>
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Status
              </th>
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Delivery Time
              </th>
              <th className="px-4 py-2 text-body text-[#424348] font-medium text-left">
                Tracking
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center gap-3">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={50}
                    height={50}
                    className="rounded-md border p-2 object-cover"
                  />
                  <div>
                    <p className="text-base lg:text-lg font-semibold text-[#0A0A0B]">
                      {order.product}
                    </p>
                    <p className="text-[12px] lg:text-sm text-[#4B4B53]">
                      Qty: <span>{order.quantity}</span>
                    </p>
                  </div>
                </td>
                <td className="px-4 py-2 text-body text-[#424348] font-medium">
                  ${order.price}
                </td>
                <td className="px-4 py-2">
                  <div>
                    <p className="text-body text-[#424348] font-medium">
                      {order.orderDate}
                    </p>
                    <p className="text-body text-[#585962]">{order.time}</p>
                  </div>
                </td>
                <td
                  className={`px-4 py-2 text-body font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2 text-[#424348] text-body font-medium">
                  {order.deliveryTime}
                </td>
                <td className="px-4 py-2">
                  {order.trackingNumber !== "N/A" ? (
                    <a
                      href={order.trackingNumber}
                      className="text-black underline"
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

      {/* Mobile Layout (Card View) */}
      <div className="md:hidden flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow-md">
            {/* Product & Image */}
            <div className="flex items-center gap-4">
              <Image
                src={order.image}
                alt={order.product}
                width={60}
                height={60}
                className="rounded border p-2"
              />
              <div>
                <p className="text-lg font-semibold">{order.product}</p>
                <p className="text-sm text-gray-600">Qty: {order.quantity}</p>
              </div>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
              <p>
                <span className="font-medium">Price:</span> ${order.price}
              </p>
              <p>
                <span className="font-medium">Order Date:</span>{" "}
                {order.orderDate}
              </p>
              <p>
                <span className="font-medium">Time:</span> {order.time}
              </p>
              <p className={`font-medium ${getStatusColor(order.status)}`}>
                Status: {order.status}
              </p>
              <p>
                <span className="font-medium">Delivery:</span>{" "}
                {order.deliveryTime}
              </p>
              <p>
                <span className="font-medium">Tracking:</span>{" "}
                {order.trackingNumber !== "N/A" ? (
                  <a
                    href={order.trackingNumber}
                    className="text-blue-600 underline"
                  >
                    Track Order
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
