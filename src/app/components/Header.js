'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About' }, 
    { label: 'Services', href: '/Services' },
    { label: 'Blog', href: '/Blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#Contact' },     
  ];

  return (
    <header className="w-full bg-[#111111] p-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="w-full flex items-center justify-between px-4">
        
        <Link href="/" className="relative group">
          <div className="w-20 h-20 bg-white/10 rounded-full p-2 transition-all duration-500">
            <Image
              src="/whitelogo.png"
              alt="Yashah Media Logo"
              width={80}
              height={80}
              className="h-full w-full object-cover rounded-full transition-all duration-500"
            />
          </div>
        </Link>

      
        <nav className="hidden md:flex items-center space-x-5">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white capitalize px-2 py-1 transition-all duration-300 transform hover:text-red-500 hover:scale-110"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:bg-red-700 hover:scale-110"
          >
            Login / Signup
          </Link>
        </nav>

      
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-[#1a1a1a] py-4 rounded-xl shadow-inner">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeMenu}
              className="text-white capitalize text-lg transition-all duration-300 hover:text-red-500"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={closeMenu}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
          >
            Login / Signup
          </Link>
        </div>
      )}
    </header>
  );
}
