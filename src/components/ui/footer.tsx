"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import icon from "@/assets/footerLogo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] py-10 lg:py-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <Image src={icon} alt="" height={48} width={137} />
          <p className="mt-7 lg:mt-10 text-body text-white">
            Email:
            <span className="text-[#CECFD3] text-sm">support@rabfy.com</span>
          </p>
          <p className="mt-4 text-body text-white">
            Phone:
            <span className="text-[#CECFD3] text-sm">(123) 456-7890</span>
          </p>
          <p className="mt-4 text-body text-white">
            Address:
            <span className="text-[#CECFD3] text-sm">
              1234 Furniture St, Design City, DC 56789
            </span>
          </p>
        </div>

        <div>
          <h3 className="text-body font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm font-medium text-[#CECFD3]">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Best Sellers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-body font-semibold text-white">Legal Links</h3>
          <ul className="mt-4 space-y-3 text-sm font-medium text-[#CECFD3]">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-body font-semibold text-white">Stay Connected</h3>
          <p className="mt-4 text-sm text-[#CECFD3]">
            Join Our Community for Updates and Offers
          </p>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full bg-white text-[#CECFD3] rounded-md text-body focus:outline-none"
            />
            <button className="bg-white text-body font-semibold text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          <div className="mt-8 lg:mt-10 text-white">
            <h3 className="text-body font-semibold ">Follow Us</h3>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-3xl border border-[#CECFD3] p-2 hover:text-[#CECFD3] rounded-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl border border-[#CECFD3] p-2 hover:text-[#CECFD3] rounded-lg"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-3xl border border-[#CECFD3] p-2 hover:text-[#CECFD3] rounded-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-3xl border border-[#CECFD3] p-2 hover:text-[#CECFD3] rounded-lg"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10 text-[#CECFD3]" />
      <div className="mt-8 text-center text-[#CECFD3] text-body">
        Copyright©2025 Rabfy. All rights reserved
      </div>
    </footer>
  );
}
