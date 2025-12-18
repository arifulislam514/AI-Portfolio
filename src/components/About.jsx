export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-gray-800">
      <h2 className="text-4xl section-title">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
        <div className="space-y-6 text-gray-300">
          <p>
            I am a Full-stack developer with a strong backend focus, proficient in Django, Node.js, React.js, MySQL, and
            PostgreSQL. I have hands-on experience in developing and deploying full-stack web applications, emphasizing
            back-end logic, secure data handling, and robust API development.
          </p>
          <p>
            Supported by solid frontend capabilities using modern UI frameworks like React.js and Tailwind CSS, I ensure
            clean data flow and high-quality user experience across all devices.
          </p>
          <p>
            I am dedicated to continuous technical expansion, especially in backend architecture, and am seeking a
            collaborative environment to apply my expertise and start my career.
          </p>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-[#58a6ff]">Education & Core Strengths</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            <li>Diploma in Engineering (CST) from Brahmanbaria Polytechnic Institute (2024 - 2027).</li>
            <li>Strong foundation in computer science basics: algorithms, programming, and database management.</li>
            <li>Gained extensive hands-on experience in full-stack projects using Django, Node.js, React.js, MySQL, and PostgreSQL.</li>
            <li>Soft Skills: Adaptability, Critical Thinking, Learning Agility, Fast Learner, Self-Motivated.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
