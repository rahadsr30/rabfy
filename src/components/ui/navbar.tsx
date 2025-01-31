"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/rabfyLogo.png";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="wrapper flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="" width={137} height={48} />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-[#4B4B53]  text-base font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-black transition-colors">
            Products
          </Link>
          <Link
            href="/categories"
            className="hover:text-black transition-colors"
          >
            Categories
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>
        <div className="md:flex items-center space-x-6 hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-[#CECFD3] text-[#82848E] text-base font-medium"
            />
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/signup"
              className="text-[#4B4B53] transition-colors text-base font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-all"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-[#4B4B53] text-base font-medium space-y-6 py-6 px-8">
          <Link href="/" className="hover:text-black transition-colors block">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-black transition-colors block"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="hover:text-black transition-colors block"
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className="hover:text-black transition-colors block"
          >
            Contact Us
          </Link>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-[#CECFD3] text-[#82848E] text-sm lg:text-base font-medium  bg-white w-full"
            />
          </div>

          <div className="flex justify-center items-center space-x-6">
            <Link
              href="/signup"
              className="text-[#4B4B53] transition-colors text-base font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
