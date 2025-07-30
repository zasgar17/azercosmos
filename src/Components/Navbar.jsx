import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const languages = ['AZE', 'ENG', 'TUR', 'RUS'];

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#CCE6E8] text-white shadow fixed w-full top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left - Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Logo / Title */}
        <div className="text-lg lg:text-2xl font-bold tracking-widest text-center">
          Torpağın<span className="text-yellow-400">Səsi</span>
        </div>

        {/* Right - Desktop Nav + Language */}
        <div className="hidden md:flex items-center space-x-4 text-sm lg:text-base relative">
          <Link to="/page1" className="hover:text-yellow-400">1</Link>
          <Link to="/page2" className="hover:text-yellow-400">2</Link>
          <Link to="/page3" className="hover:text-yellow-400">3</Link>

          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)} 
              className="px-2 py-1 border border-white rounded hover:bg-yellow-400 hover:text-black text-xs"
            >
              LANG
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow w-[100px] text-center z-50">
                {languages.map((lang) => (
                  <div 
                    key={lang} 
                    className="px-3 py-1 hover:bg-yellow-400 cursor-pointer"
                    onClick={() => {
                      setLangOpen(false);
                      // TODO: language switch logic here
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile - Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d={menuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-[#0F172A] text-white text-sm">
          <Link to="/" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/aboutus" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/page1" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>1</Link>
          <Link to="/page2" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>2</Link>
          <Link to="/page3" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>3</Link>
          
          {/* Mobile Language Selection */}
          <div className="mt-3">
            <p className="text-gray-300 mb-1">Language</p>
            <div className="flex gap-2 flex-wrap">
              {languages.map(lang => (
                <span 
                  key={lang} 
                  className="cursor-pointer px-2 py-1 bg-white text-black rounded text-xs hover:bg-yellow-400"
                  onClick={() => {
                    setMenuOpen(false);
                    // TODO: Language switch logic
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;
