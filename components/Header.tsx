"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

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

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();

  const handleSectionNavigate = useCallback(
    (targetId: string) => {
      // If it's the home link, just navigate to home
      if (targetId === "/") {
        router.push("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const navigateHomeWithHash = () => {
        router.push(`/#${targetId}`);
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      };

      if (typeof document !== "undefined" && isHomePage) {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          navigateHomeWithHash();
        }
      } else {
        navigateHomeWithHash();
      }
    },
    [isHomePage, router],
  );

  return (
    <header className="w-full text-white fixed top-0 left-0 z-50 px-10 transition-all duration-300 ease-in-out">
      <div className="mx-auto mt-4 max-w-7xl bg-primary-2 w-full p-4 rounded-full flex justify-between items-center">
        <Link
          href="/"
          className="ml-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/logo.svg"
            alt="LSS Contractors"
            width={150}
            height={50}
            className="w-25 h-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 backdrop-blur-lg rounded-full shadow-md hover:shadow-lg transition">
          {menuItems.map((item, index) => (
            <button
              key={index}
              aria-label={item.ariaLabel}
              className="text-sm font-medium hover:text-primary-4 rounded-full transition"
              onClick={(event) => {
                event.preventDefault();
                handleSectionNavigate(item.targetId);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button className="bg-primary-4 hover:bg-primary-1/10 hover:text-primary-4 hover:border hover:border-primary-4 text-primary-2 p-4 rounded-full">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
