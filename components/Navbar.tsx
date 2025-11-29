import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <ul className="flex space-x-6 text-sm font-medium tracking-widest bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50">
        <li><a href="#about" className="hover:text-blue-600 transition">ABOUT</a></li>
        <li><a href="#research" className="hover:text-blue-600 transition">RESEARCH</a></li>
        <li><a href="#works" className="hover:text-blue-600 transition">WORKS</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition">CONTACT</a></li>
      </ul>
    </nav>
  );
}