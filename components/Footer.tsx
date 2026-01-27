"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const footerSections = {
  company: {
    title: "COMPANY",
    links: ["About Us", "Our Strategy", "Who We Are", "Join Our Community"],
  },
  customerSupport: {
    title: "CUSTOMER SUPPORT",
    links: ["+44485390483", "support@nexline.com"],
  },
  getInvolved: {
    title: "GET INVOLVED",
    links: ["Book an Appointment", "FAQs"],
  },
  products: {
    title: "PRODUCTS",
    links: ["Nexline Starter", "Nexline Advanced", "SEO AI"],
  },
  explore: {
    title: "EXPLORE",
    links: ["Services", "Web Infastructure"],
  },
};

const socialIcons = [
  { id: 1, icon: Twitter, name: "Twitter", href: "#" },
  { id: 2, icon: Facebook, name: "Facebook", href: "#" },
  { id: 3, icon: Instagram, name: "Instagram", href: "#" },
  { id: 4, icon: Linkedin, name: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg- text-white px-6 lg:px-16 py-12 z-30 relative">
      {/* Top Section with Logo and Social Icons */}
      <div className="flex items-center justify-between gap-5 mb-12 pb-4 md:pb-8 border-b border-dashed border-[#6B8580] border-opacity-30">
        <Image
          src="/logo.svg"
          alt="Nexline"
          width={180}
          height={60}
          className="max-sm:w-30"
        />

        {/* Social Icons */}
        <div className="flex gap-0 md:gap-4">
          {socialIcons.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.id}
                href={social.href}
                className="w-10 h-10 hover:bg-primary-4 hover:text-primary-2 rounded flex items-center justify-center transition-colors"
                aria-label={social.name}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {Object.entries(footerSections).map(([key, section]) => (
          <div key={key}>
            <h3 className="text-primary-4 text-sm font-semibold mb-4 tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary-4 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Office Addresses */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-dashed border-[#6B8580] border-opacity-30">
        <div>
          <h4 className="text-primary-4 text-sm font-semibold mb-3">
            Lagos Office
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            3rd Floor, Workcity, Plot 1, Maruwa Bus Stop,
            <br />
            128 Remi Olowude Street, Lekki Phase 1,
            <br />
            Lagos 105102, Lagos State, Nigeria.
          </p>
        </div>

        <div>
          <h4 className="text-primary-4 text-sm font-semibold mb-3">
            Akwa Ibom Office
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            No.3 Ikot Ekpene Road, Abak 520103,
            <br />
            Akwa Ibom State.
          </p>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between text-[#6B8580] text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Nexline. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/policies"
            className="hover:text-primary-4 transition-colors"
          >
            Privacy Policy
          </Link>
          <button className="hover:text-primary-4 transition-colors">
            Cookie Policy
          </button>
          <Link
            href="/policies"
            className="hover:text-primary-4 transition-colors"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
