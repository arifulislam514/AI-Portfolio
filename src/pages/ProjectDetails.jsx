import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  GithubLogo,
  LinkedinLogo,
  ArrowSquareOut,
  Image as ImageIcon,
  ChartBar,
  LockKey,
  FilePdf,
  DeviceMobile,
  Lightning,
  Check,
} from "@phosphor-icons/react";
import { projects } from "../data/projects";

const featureIconMap = {
  ChartBar,
  LockKey,
  FilePdf,
  DeviceMobile,
};

export default function ProjectDetails() {
  const { slug } = useParams(); // dynamic url param :contentReference[oaicite:2]{index=2}
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-zinc-300">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Link
          to="/#projects"
          className="text-zinc-400 hover:text-white underline mt-4 inline-block"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen text-zinc-300 bg-[#0d1117]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 h-16">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>

          <div className="flex gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <GithubLogo size={26} />
              </a>
            )}
            <a
              href="https://www.linkedin.com/in/ariful-islam-337247390/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinLogo size={26} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#58a6ff]/10 text-[#58a6ff] border border-[#58a6ff]/20">
                {project.badge}
              </span>
              <span className="text-zinc-500 text-sm">{project.dateRange}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              {project.title}{" "}
              <span className="text-zinc-600">{project.subtitle}</span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <ArrowSquareOut size={18} /> Live Demo
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
                >
                  <GithubLogo size={18} /> Source Code
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={`${project.title} hero`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon size={36} className="text-zinc-700 mx-auto mb-2" />
                  <p className="text-zinc-600 text-sm font-medium">
                    Project Screenshot
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="text-zinc-400 leading-relaxed space-y-4">
                {project.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Challenge / Solution */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4">
                  <Lightning size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  The Challenge
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-[#58a6ff]/10 rounded-lg flex items-center justify-center text-[#58a6ff] mb-4">
                  <Check size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  The Solution
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">
                Key Features
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((f) => {
                  const Icon = featureIconMap[f.icon] ?? ChartBar;
                  return (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-900/50 transition-colors border border-transparent hover:border-zinc-800"
                    >
                      <div className="mt-1 bg-[#58a6ff]/10 p-2 rounded text-[#58a6ff]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-200">
                          {f.title}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Gallery placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(project.gallery ?? []).slice(0, 2).map((img, idx) => (
                <div
                  key={img}
                  className="aspect-video bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* fallback if no images */}
              {(!project.gallery || project.gallery.length === 0) && (
                <>
                  <div className="aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
                    <span className="text-xs text-zinc-600">Mobile View</span>
                  </div>
                  <div className="aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
                    <span className="text-xs text-zinc-600">Admin Panel</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8">
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-6">
                  Technologies
                </h3>

                <div className="space-y-6">
                  <TechGroup
                    title="Frontend"
                    items={project.technologies.frontend}
                  />
                  <TechGroup
                    title="Backend"
                    items={project.technologies.backend}
                  />
                  <TechGroup
                    title="Infrastructure"
                    items={project.technologies.infra}
                  />
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-8">
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4">
                  Project Info
                </h3>
                <ul className="space-y-4 text-sm">
                  <InfoRow label="Role" value={project.info.role} />
                  <InfoRow label="Duration" value={project.info.duration} />
                  <InfoRow label="Team Size" value={project.info.teamSize} />
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function TechGroup({ title, items }) {
  return (
    <div>
      <span className="text-xs font-semibold text-zinc-500 mb-2 block">
        {title}
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <li className="flex justify-between text-zinc-400">
      <span>{label}</span>
      <span className="text-zinc-200">{value}</span>
    </li>
  );
}
