function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0F172A] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-blue-300 uppercase">
            <span className="h-px w-8 bg-blue-400" />
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Dani <span className="text-blue-400">Téllez</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
            Web Application Developer
          </h2>
          <p className="mt-2 text-base text-slate-400 sm:text-lg">
            Web Development Student with real-world IT experience.
          </p>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I am a Web Application Development student focused on building
            modern web applications, automating processes and creating
            efficient digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              View Projects
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 1.04 2.73 1.55.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
            </a>
            <a
              href="/Dani-Tellez-CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M10 2.5v10m0 0 3.75-3.75M10 12.5 6.25 8.75M3.75 13.75v2.5h12.5v-2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              </div>
              <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-blue-200 uppercase">
                Personal portfolio
              </span>
            </div>

            <div className="relative mt-6 flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-blue-300/25 bg-[#0F172A]/70 sm:min-h-[410px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.13),transparent_65%)]" />
              <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-blue-300/10" />
              <div className="absolute bottom-9 right-8 h-24 w-24 rounded-full border border-blue-300/10" />
              <div className="relative flex flex-col items-center px-6 text-center">
                <div className="mb-6 flex h-36 w-36 items-center justify-center rounded-full border border-blue-300/20 bg-gradient-to-br from-blue-400/15 to-slate-700/30 shadow-[0_0_60px_rgba(59,130,246,0.16)] sm:h-40 sm:w-40">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 120"
                    fill="none"
                    className="h-24 w-24 text-blue-200/70 sm:h-28 sm:w-28"
                  >
                    <circle
                      cx="60"
                      cy="42"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M24 105c3-22 17-34 36-34s33 12 36 34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  Your cartoon avatar
                </p>
                <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                  A personal illustration is on its way. This space is ready
                  for it.
                </p>
              </div>

              <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-[10px] tracking-wide text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                AVATAR IN PROGRESS
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-2xl border border-blue-400/10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
