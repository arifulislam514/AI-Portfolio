export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center md:pb-0">
      <div className="max-w-4xl space-y-6">
        <p className="text-xl md:text-2xl text-gray-400">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">Ariful Islam</h1>
        <p className="text-3xl md:text-5xl font-light text-[#58a6ff]">Full-Stack Developer</p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Proficient in Django, Node.js, React.js, MySQL, and PostgreSQL, with hands-on experience in developing and
          deploying end-to-end web applications.
        </p>

        <div className="pt-8 space-x-4">
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-[#58a6ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#79a9e7] transition duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
