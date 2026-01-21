"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    label: "Home",
    ariaLabel: "Learn about our story",
    targetId: "/",
  },
  {
    label: "About Us",
    ariaLabel: "Who we are",
    targetId: "about-us",
  },
  {
    label: "Services",
    ariaLabel: "Our Offer to you",
    targetId: "services",
  },
  { label: "FAQs", ariaLabel: "Frequently Asked Questions", targetId: "faqs" },
  {
    label: "Contact Us",
    ariaLabel: "Reach out to us",
    targetId: "contact-us",
  },
];



const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("/");
  return (
    <header
      className="w-full text-white fixed top-0 left-0 z-50  bg-primary-4 backdrop-blur-3xl
        transition-all duration-300 ease-in-out"
    >
      <div className="w-full p-6 rounded-full flex justify-between items-center">
        <Link href="/" className="rounded-full transition">
          <Image
            src="/logoblack.svg"
            alt="LSS Contractors"
            width={150}
            height={50}
            className="w-25 h-auto"
            priority
          />
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
          <Menu size={24} className="text-primary-2" />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary-1 backdrop-blur-lg flex flex-col p-5 text-lg font-medium transform transition-transform duration-700 ease-in-out md: ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary-3 backdrop-blur-lg flex flex-col p-5 text-lg font-medium transform transition-transform duration-900 ease-in-out md: ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary-2 backdrop-blur-lg flex flex-col p-5 text-lg font-medium transform transition-transform duration-1200 ease-in-out md: ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={200}
              className="w-25 h-25 object-contain"
            />
          </Link>

          <Button
            variant="ghost"
            className="bg-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-20 h-20" />
          </Button>
        </div>

        {menuItems.map((item) => (
          <Link
            key={item.targetId}
            href={`/#${item.targetId}`}
            className={`text-4xl font-bold py-4 transition-colors ${
              activeTab === item.targetId
                ? "text-primary-4"
                : "text-primary-3 hover:text-primary-4"
            }`}
            onClick={() => {
              setActiveTab(item.targetId);
              setIsMenuOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default MobileHeader;
