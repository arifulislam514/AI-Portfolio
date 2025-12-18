import { Link } from "react-router-dom";
import homecarehubhome from "../assets/home-care-hub-home.jpeg"
import eventmanagmenthome from "../assets/event-management-home.jpeg"

function ProjectCard({ slug, title, desc, tags, img, github, live, githubLabel }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 group transition duration-300 hover:shadow-blue-500/50">
      {/* Click anywhere on image + text area to open details page */}
      <Link to={`/projects/${slug}`} className="block">
        <img
          src={img}
          alt={`${title} Screenshot`}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 mb-4 text-sm">{desc}</p>

          <div className="flex flex-wrap gap-2 text-xs mb-4">
            {tags.map((t) => (
              <span
                key={t.label}
                className={`${
                  t.primary ? "bg-[#58a6ff] text-gray-900" : "bg-gray-600 text-white"
                } px-3 py-1 rounded-full font-medium`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Buttons area (stop navigation when clicking these) */}
      <div className="px-6 pb-6 -mt-2">
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#58a6ff] hover:text-white transition duration-300 font-medium flex items-center"
            >
              {githubLabel ?? "GitHub"}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m-6-6L10 14"
                />
              </svg>
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-white transition duration-300 font-medium flex items-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 border-t border-gray-800">
      <h2 className="text-4xl section-title">Featured Projects</h2>
      <p className="mt-4 text-xl text-gray-400">
        Practical full-stack applications built and deployed using Python/Django and React.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          slug="homecare-hub"
          title="HomeCare Hub"
          desc="A full-stack web platform for managing services, cart system, user authentication, and order workflows for home-based services."
          img={homecarehubhome}
          tags={[
            { label: "Django REST", primary: true },
            { label: "React.js" },
            { label: "PostgreSQL" },
            { label: "Cloudinary" },
          ]}
          github="https://github.com/arifulislam514/HomeCareHubFrontend"
          githubLabel="GitHub (Client)"
          live="https://home-care-hub-frontend.vercel.app/"
        />

        <ProjectCard
          slug="event-management-system"
          title="Event Management System"
          desc="A role-based system utilizing Django for managing events, categories, and participant sign-ups with separate Admin/Manager/Participant dashboards."
          img={eventmanagmenthome}
          tags={[
            { label: "Django (Template-based)", primary: true },
            { label: "Tailwind CSS" },
            { label: "PostgreSQL" },
            { label: "Django ORM" },
          ]}
          github="https://github.com/arifulislam514/Event-Management-System"
          githubLabel="GitHub (Server)"
          live="https://event-management-system-tau-cyan.vercel.app/"
        />

        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-inner border border-gray-700 group transition duration-300 hover:shadow-gray-500/50 flex items-center justify-center p-6 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-2 text-gray-500">More Projects Soon</h3>
            <p className="text-sm text-gray-600">
              Archived or upcoming project slot. Check my GitHub for more detailed work!
            </p>
            <a
              href="https://github.com/arifulislam514"
              target="_blank"
              rel="noreferrer"
              className="text-[#58a6ff] hover:text-white transition duration-300 font-medium flex items-center justify-center pt-2"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
