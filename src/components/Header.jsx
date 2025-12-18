import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnHashChange = () => setOpen(false);
    window.addEventListener("hashchange", closeOnHashChange);
    return () => window.removeEventListener("hashchange", closeOnHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117] bg-opacity-95 shadow-lg border-b border-gray-700 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-white hover:text-[#58a6ff] transition duration-300"
        >
          A<span className="text-[#58a6ff]">I</span>.Dev
        </a>

        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="text-gray-300 hover:text-[#58a6ff] transition duration-300">About</a>
          <a href="#skills" className="text-gray-300 hover:text-[#58a6ff] transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-[#58a6ff] transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-[#58a6ff] transition duration-300">Contact</a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      <div className={`${open ? "block" : "hidden"} md:hidden bg-[#0d1117] py-2`}>
        <a href="#about" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#58a6ff]">About</a>
        <a href="#skills" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#58a6ff]">Skills</a>
        <a href="#projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#58a6ff]">Projects</a>
        <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#58a6ff]">Contact</a>
      </div>
    </header>
  );
}
