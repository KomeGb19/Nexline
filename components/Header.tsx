"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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

// Scroll distance (px) after which the header switches to "compact" mode
const SCROLL_THRESHOLD = 80;

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set initial state in case the page loads already scrolled
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`w-full text-white fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "px-4 sm:px-10" : "px-10"
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between rounded-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "mt-2 max-w-2xl p-4 bg-primary-2/60 backdrop-blur-xl shadow-lg border border-white/10"
            : "mt-4 max-w-7xl p-4 bg-primary-2 shadow-md"
        }`}
      >
        <Link
          href="/"
          className={`transition-all duration-500 ease-in-out ${
            isScrolled ? "ml-2" : "ml-10"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/logo.svg"
            alt="LSS Contractors"
            width={150}
            height={50}
            className={`h-auto transition-all duration-500 ease-in-out ${
              isScrolled ? "w-25" : "w-25"
            }`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 rounded-full transition">
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

        <Button
          className={`bg-primary-4 hover:bg-primary-1/10 hover:text-primary-4 hover:border hover:border-primary-4 text-primary-2 rounded-full transition-all duration-500 ease-in-out ${
            isScrolled ? "p-4 text-sm" : "p-4"
          }`}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
