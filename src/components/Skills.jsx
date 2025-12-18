function Pill({ icon, children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border ${className}`}>
      <i className={`${icon} mr-2`} />
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 border-t border-gray-800">
      <h2 className="text-4xl section-title">Technical Skills</h2>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-[#58a6ff]">Programming & Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            <Pill icon="fab fa-python" className="bg-blue-600/20 text-blue-300 border-blue-700">Python</Pill>
            <Pill icon="fab fa-js" className="bg-yellow-600/20 text-yellow-300 border-yellow-700">JavaScript</Pill>
            <Pill icon="fab fa-react" className="bg-cyan-600/20 text-cyan-300 border-cyan-700">React.js</Pill>
            <Pill icon="fas fa-leaf" className="bg-green-600/20 text-green-300 border-green-700">Django</Pill>
            <Pill icon="fas fa-network-wired" className="bg-orange-600/20 text-orange-300 border-orange-700">Django REST Framework</Pill>
            <Pill icon="fas fa-paint-brush" className="bg-purple-600/20 text-purple-300 border-purple-700">Tailwind / Bootstrap</Pill>
          </div>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-[#58a6ff]">Backend, API & Database</h3>
          <div className="flex flex-wrap gap-3">
            <Pill icon="fab fa-node-js" className="bg-green-600/20 text-green-300 border-green-700">Node.js / Express</Pill>
            <Pill icon="fas fa-exchange-alt" className="bg-red-600/20 text-red-300 border-red-700">REST API Dev</Pill>
            <Pill icon="fas fa-database" className="bg-sky-600/20 text-sky-300 border-sky-700">PostgreSQL</Pill>
            <Pill icon="fas fa-database" className="bg-blue-600/20 text-blue-300 border-blue-700">MySQL</Pill>
            <Pill icon="fas fa-shield-alt" className="bg-yellow-600/20 text-yellow-300 border-yellow-700">JWT / RBAC Auth</Pill>
            <Pill icon="fas fa-code" className="bg-gray-600/20 text-gray-300 border-gray-700">Django ORM</Pill>
          </div>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-[#58a6ff]">Dev Tools & Deployment</h3>
          <div className="flex flex-wrap gap-3">
            <Pill icon="fab fa-github" className="bg-gray-600/20 text-gray-300 border-gray-700">Git / GitHub</Pill>
            <Pill icon="fas fa-cloud-upload-alt" className="bg-blue-600/20 text-blue-300 border-blue-700">Cloudinary</Pill>
            <Pill icon="fas fa-server" className="bg-green-600/20 text-green-300 border-green-700">Vercel / Render</Pill>
            <Pill icon="fab fa-npm" className="bg-red-600/20 text-red-300 border-red-700">NPM</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
