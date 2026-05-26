const pillars = [
  {
    title: 'Events',
    description: 'Build, promote, register, and analyze hackathons, meetups, and hiring events.'
  },
  {
    title: 'Communities',
    description: 'Create public or private spaces with posts, announcements, and member workflows.'
  },
  {
    title: 'Resume AI',
    description: 'Generate ATS-ready resumes, optimize for job descriptions, and track scores.'
  },
  {
    title: 'AI Interviews',
    description: 'Run mock interviews, capture feedback, and prepare candidates for real hiring loops.'
  }
];

const stats = [
  { value: '4', label: 'core product modules' },
  { value: '1', label: 'shared identity and data model' },
  { value: '∞', label: 'scalable feature expansion path' }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.1),_transparent_25%)]" />
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">UpToHack</p>
            <h1 className="mt-2 text-lg font-semibold text-white">Career + Community OS</h1>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:block">
            Next.js 15 · Prisma · PostgreSQL · AI-first
          </div>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Startup-ready architecture foundation
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              One platform for events, resumes, interviews, and communities.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This scaffold is built to evolve into a modular ecosystem with role-based auth,
              scalable APIs, AI workflows, analytics, and enterprise-grade UI foundations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pillars"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore architecture
              </a>
              <a
                href="#roadmap"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See build roadmap
              </a>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <dt className="text-sm text-slate-400">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-soft backdrop-blur-xl">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <span className="text-sm text-cyan-200">0{index + 1}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>

        <section id="pillars" className="grid gap-4 border-t border-white/10 py-10 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{pillar.description}</p>
            </div>
          ))}
        </section>

        <section id="roadmap" className="grid gap-6 border-t border-white/10 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Build order</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Architecture-first delivery sequence</h3>
          </div>
          <ol className="grid gap-4 text-sm leading-6 text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">1. Finalize folder architecture and shared primitives.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">2. Expand Prisma schema for auth, events, communities, resumes, interviews, and analytics.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">3. Add authentication, onboarding, and role guards.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">4. Ship module-by-module UI, API routes, validation, and tests.</li>
          </ol>
        </section>
      </section>
    </main>
  );
}