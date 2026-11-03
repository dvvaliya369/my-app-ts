const projects = [
  {
    number: "01",
    title: "Noma Studio",
    category: "Brand system · Digital experience",
    description:
      "A new identity and digital home for an architecture practice shaping quieter, more human spaces.",
    result: "+42% qualified inquiries",
    tone: "bg-[#ff5c35]",
    artwork: (
      <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden bg-[#ff5c35] p-8 sm:min-h-96">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-[#171714]" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f5eddb]" />
        <div className="relative grid h-40 w-40 rotate-12 grid-cols-2 gap-3 sm:h-52 sm:w-52">
          <div className="bg-[#171714]" />
          <div className="rounded-full bg-[#f5eddb]" />
          <div className="rounded-full bg-[#171714]" />
          <div className="bg-[#f5eddb]" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Aster Finance",
    category: "Product design · Strategy",
    description:
      "A clear, confident investing experience that makes long-term wealth feel understandable and within reach.",
    result: "2.6× activation rate",
    tone: "bg-[#c7ff4a]",
    artwork: (
      <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden bg-[#c7ff4a] p-7 sm:min-h-96">
        <div className="absolute inset-x-8 top-10 flex justify-between font-mono text-xs font-bold uppercase tracking-widest text-[#171714]">
          <span>Aster / 24</span><span>Portfolio</span>
        </div>
        <div className="relative mt-8 w-full max-w-sm rounded-2xl border-2 border-[#171714] bg-[#f5eddb] p-5 shadow-[10px_10px_0_#171714]">
          <div className="mb-8 flex items-start justify-between">
            <span className="text-xs font-bold uppercase tracking-widest">Total balance</span>
            <span className="rounded-full bg-[#171714] px-3 py-1 text-xs text-white">+18.4%</span>
          </div>
          <p className="text-4xl font-semibold tracking-[-0.06em]">$48,280</p>
          <div className="mt-8 flex h-24 items-end gap-2" aria-hidden="true">
            {[38, 52, 45, 68, 61, 82, 74, 96].map((height, index) => (
              <span key={index} className="flex-1 bg-[#ff5c35]" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Field Notes",
    category: "Editorial · Creative direction",
    description:
      "An independent field journal documenting the people, places, and rituals behind modern craft.",
    result: "Sold out in 72 hours",
    tone: "bg-[#9aa8ff]",
    artwork: (
      <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden bg-[#9aa8ff] p-8 sm:min-h-96">
        <div className="absolute h-72 w-52 -rotate-6 border-2 border-[#171714] bg-[#f5eddb] shadow-[12px_12px_0_#171714]" />
        <div className="relative flex h-72 w-52 rotate-6 flex-col justify-between border-2 border-[#171714] bg-[#ff5c35] p-5">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase"><span>Vol. 04</span><span>2026</span></div>
          <p className="text-5xl font-black leading-[0.82] tracking-[-0.08em] text-[#f5eddb]">FIELD<br />NOTES</p>
          <div className="h-px bg-[#171714]" />
          <p className="text-xs font-bold uppercase tracking-widest">On making things that last</p>
        </div>
      </div>
    ),
  },
];

const services = [
  ["01", "Brand direction", "Positioning, identity systems, and art direction that make the right impression—and keep it."],
  ["02", "Digital design", "Distinctive websites and product experiences built around real people and clear outcomes."],
  ["03", "Creative partnership", "Embedded senior design support for ambitious teams navigating growth and change."],
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f5eddb] text-[#171714] selection:bg-[#ff5c35] selection:text-white">
      <a href="#content" className="sr-only z-50 bg-[#171714] px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>

      <header className="border-b-2 border-[#171714]">
        <nav aria-label="Primary navigation" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="text-xl font-black tracking-[-0.05em]">A/M®</a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="transition-opacity hover:opacity-50" href="#work">Work</a>
            <a className="transition-opacity hover:opacity-50" href="#about">About</a>
            <a className="transition-opacity hover:opacity-50" href="#services">Services</a>
          </div>
          <a href="mailto:hello@alexmorgan.design" className="rounded-full border-2 border-[#171714] px-4 py-2 text-sm font-bold transition-all hover:bg-[#171714] hover:text-white">Let&apos;s talk ↗</a>
        </nav>
      </header>

      <div id="content">
        <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-20">
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] sm:mb-12">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#ff5c35]" />
            Independent designer · New York / Worldwide
          </div>
          <h1 className="max-w-7xl text-[clamp(4rem,12vw,11rem)] font-semibold leading-[0.78] tracking-[-0.085em]">
            I make ideas<br />impossible<br className="hidden sm:block" /> to <span className="italic text-[#ff5c35]">ignore.</span>
          </h1>
          <div className="mt-12 grid gap-8 border-t-2 border-[#171714] pt-6 md:grid-cols-2 lg:mt-20">
            <p className="max-w-xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl">I&apos;m Alex Morgan, a multidisciplinary designer building bold brands and digital experiences for people moving culture forward.</p>
            <div className="flex items-end justify-between gap-6 md:justify-end">
              <a href="#work" className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#171714] text-center text-xs font-bold uppercase tracking-wider text-white transition-transform hover:rotate-6 hover:scale-105">See my<br />work ↓</a>
              <p className="max-w-40 text-sm leading-relaxed text-[#59584f]">Strategy-led.<br />Detail-obsessed.<br />Always curious.</p>
            </div>
          </div>
        </section>

        <section aria-label="Selected clients" className="border-y-2 border-[#171714] bg-[#171714] py-4 text-[#f5eddb]">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 text-xs font-bold uppercase tracking-[0.18em] sm:px-8 lg:px-12">
            <span className="text-[#ff5c35]">Selected clients</span><span>New Balance</span><span>Notion</span><span>Patagonia</span><span>Aesop</span><span>Vitra</span>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-12 flex items-end justify-between border-b-2 border-[#171714] pb-5 sm:mb-16">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">Selected work · 2024—26</p><h2 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Made with intent.</h2></div>
            <span className="hidden font-mono text-sm sm:block">(03 PROJECTS)</span>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project) => (
              <article key={project.title} className="group grid overflow-hidden border-2 border-[#171714] bg-[#f5eddb] lg:grid-cols-[0.85fr_1.15fr]">
                <div className="flex min-h-80 flex-col justify-between p-6 sm:p-9 lg:min-h-[30rem]">
                  <div className="flex items-start justify-between"><span className="font-mono text-sm">/{project.number}</span><span className="rounded-full border border-[#171714] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Case study ↗</span></div>
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#67665d]">{project.category}</p>
                    <h3 className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{project.title}</h3>
                    <p className="mt-5 max-w-md text-lg leading-relaxed">{project.description}</p>
                  </div>
                  <p className="mt-10 border-t border-[#171714] pt-4 font-mono text-sm font-bold uppercase">Impact: {project.result}</p>
                </div>
                <div className={`overflow-hidden border-t-2 border-[#171714] lg:border-l-2 lg:border-t-0 ${project.tone} transition-transform duration-500 group-hover:[&>div]:scale-[1.02]`}>{project.artwork}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="scroll-mt-8 border-y-2 border-[#171714] bg-[#c7ff4a]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]">What I do</p><h2 className="text-6xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-8xl">Big picture.<br /><span className="italic">Tiny</span> details.</h2></div>
              <div className="border-t-2 border-[#171714]">
                {services.map(([number, title, description]) => (
                  <div key={number} className="grid gap-4 border-b-2 border-[#171714] py-7 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-6">
                    <span className="font-mono text-sm">{number}</span><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="max-w-md leading-relaxed text-[#34342e]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-[1440px] scroll-mt-8 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">A little about me</p>
            <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-7xl">Design should feel clear, alive, and a little unexpected.</h2>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-6 text-xl leading-relaxed text-[#34342e]"><p>For the past decade, I&apos;ve helped startups find their voice and global teams sharpen theirs. I work where strategy, storytelling, and craft overlap.</p><p>Previously Design Director at North/West. Currently independent, partnering with thoughtful teams on ambitious work.</p></div>
            <div className="grid grid-cols-3 border-y-2 border-[#171714] py-6 text-center">
              <div><strong className="block text-4xl tracking-tight">10+</strong><span className="text-xs uppercase tracking-wider">Years</span></div>
              <div className="border-x-2 border-[#171714]"><strong className="block text-4xl tracking-tight">46</strong><span className="text-xs uppercase tracking-wider">Launches</span></div>
              <div><strong className="block text-4xl tracking-tight">11</strong><span className="text-xs uppercase tracking-wider">Awards</span></div>
            </div>
          </div>
        </section>

        <section className="border-t-2 border-[#171714] bg-[#ff5c35]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em]">Have a project in mind?</p>
            <h2 className="mx-auto max-w-5xl text-6xl font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-9xl">Let&apos;s make something matter.</h2>
            <a href="mailto:hello@alexmorgan.design" className="mt-12 inline-flex rounded-full border-2 border-[#171714] bg-[#f5eddb] px-7 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:bg-[#171714] hover:text-white">hello@alexmorgan.design ↗</a>
          </div>
        </section>
      </div>

      <footer className="bg-[#171714] text-[#f5eddb]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end lg:px-12">
          <div><p className="text-2xl font-black tracking-[-0.05em]">A/M®</p><p className="mt-2 text-sm text-[#aaa89d]">Independent designer. Available for select projects.</p></div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold"><a className="hover:text-[#ff5c35]" href="#top">Back to top ↑</a><a className="hover:text-[#ff5c35]" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="hover:text-[#ff5c35]" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
          <p className="font-mono text-xs text-[#aaa89d]">© 2026 Alex Morgan</p>
        </div>
      </footer>
    </main>
  );
}
