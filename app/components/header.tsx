"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track active link
  const [showSocialLinks, setShowSocialLinks] = useState(true); // State to control social media visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link: string) => {
    setIsOpen(false); // Close the menu (for mobile view)
    setActiveLink(link); // Set the active link to the clicked one

    // Hide social media links if the Home button is pressed
    if (link === "/") {
      setShowSocialLinks(false);
    }
  };

  return (
    <header className="flex items-center justify-between px-5 text-2xl font-light tracking-tight md:justify-between" id="header">
      <nav
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:translate-x-0 gap-8 md:gap-16`}
      >
        <button onClick={toggleMenu} className="md:hidden absolute top-4 right-4">
          <X className="w-8 h-8" />
        </button>
        <Link
          href="/work"
          onClick={() => handleClick("/work")}
          className={activeLink === "/work" ? "font-bold" : ""}
        >
          projects
        </Link>
        <Link
          href="/information"
          onClick={() => handleClick("/information")}
          className={activeLink === "/information" ? "font-bold" : ""}
        >
          experience
        </Link>
        <Link
          href="/contact"
          onClick={() => handleClick("/contact")}
          className={activeLink === "/contact" ? "font-bold" : ""}
        >
          contact
        </Link>
        <Link
          href="/ShriyanGoteResume.pdf"
          onClick={() => handleClick("/ShriyanGoteResume.pdf")}
          className={activeLink === "/ShriyanGoteResume.pdf" ? "font-bold" : ""}
        >
          resume
        </Link>
      </nav>

      <div className="flex items-center gap-6">
        {/* Social Media Buttons */}
        {showSocialLinks && (
          <div className="flex gap-4 items-center text-sm">
            <a
              href="https://www.linkedin.com/in/shriyan-gote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shriyangote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/shriyangote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              Instagram
            </a>
          </div>
        )}

        <Link
          href="/"
          onClick={() => handleClick("/")}
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold text-3xl"
        >
          Home
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
