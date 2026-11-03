const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const projects = [
  {
    number: "01",
    title: "Monocle Health",
    type: "Product design · 2025",
    description:
      "A calmer way to understand your health data, built around clarity, trust, and useful daily rituals.",
    art: "health",
    tone: "coral",
  },
  {
    number: "02",
    title: "Sunday Supply",
    type: "Brand & commerce · 2024",
    description:
      "An expressive digital flagship for a homeware brand that believes the everyday should feel special.",
    art: "supply",
    tone: "blue",
  },
  {
    number: "03",
    title: "Field Notes",
    type: "Mobile experience · 2024",
    description:
      "A field guide for curious people—collecting local stories, overlooked places, and beautiful details.",
    art: "field",
    tone: "green",
  },
];

const experience = [
  ["2023—Now", "Independent", "Designer & developer"],
  ["2020—2023", "North Studio", "Senior product designer"],
  ["2018—2020", "Common Ground", "Digital designer"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Alex Morgan, home">
          AM<span>•</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:hello@alexmorgan.design">
          <span /> Available for work
        </a>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow reveal">Independent designer & developer</p>
        <h1 className="reveal delay-one">
          I make digital
          <br />
          things feel <em>human.</em>
        </h1>
        <div className="hero-bottom reveal delay-two">
          <p>
            I&apos;m Alex, a multidisciplinary designer creating thoughtful
            brands and digital products for people and planet.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <Arrow />
          </a>
        </div>
        <div className="scribble" aria-hidden="true">
          <svg viewBox="0 0 150 70">
            <path d="M4 54C34 18 83 8 142 13M120 3l23 10-17 18" />
          </svg>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <p>(03 projects)</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-art ${project.tone}`}>
                <div className={`artwork ${project.art}`} aria-hidden="true">
                  {project.art === "health" && (
                    <>
                      <div className="health-card card-back">
                        <span>Today</span>
                        <strong>8,204</strong>
                      </div>
                      <div className="health-card card-front">
                        <div className="card-top"><span>Monocle</span><i /></div>
                        <p>Good morning, Alex</p>
                        <div className="health-ring">82<small>%</small></div>
                        <div className="health-bars"><b /><b /><b /><b /><b /></div>
                      </div>
                    </>
                  )}
                  {project.art === "supply" && (
                    <>
                      <div className="sun" />
                      <div className="vase"><span /><span /><span /></div>
                      <div className="poster-copy">SUNDAY<br />SUPPLY</div>
                      <div className="stamp">EST.<br />2019</div>
                    </>
                  )}
                  {project.art === "field" && (
                    <>
                      <div className="phone phone-back"><div className="map-lines" /></div>
                      <div className="phone phone-front">
                        <div className="phone-photo" />
                        <small>FIELD NOTE 024</small>
                        <strong>The quiet<br />side of town</strong>
                        <span>Read the story →</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="project-copy">
                <span className="project-number">{project.number}</span>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <a href={`mailto:hello@alexmorgan.design?subject=${encodeURIComponent(project.title)}`} aria-label={`Ask about ${project.title}`}>
                  <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <p>(Based in Brighton, UK)</p>
        </div>
        <div className="about-grid">
          <h2>
            Equal parts strategy,
            <br /> craft & <em>curiosity.</em>
          </h2>
          <div className="about-copy">
            <p>
              I partner with ambitious teams to turn complex ideas into clear,
              useful, and memorable experiences.
            </p>
            <p>
              My practice moves between identity, interface, and code. I like
              getting close to the problem, asking better questions, and making
              the details count.
            </p>
            <div className="skills">
              <span>Art direction</span><span>Product design</span>
              <span>Brand identity</span><span>Creative development</span>
            </div>
          </div>
        </div>
        <div className="experience">
          {experience.map(([year, company, role]) => (
            <div className="experience-row" key={company}>
              <span>{year}</span><strong>{company}</strong><span>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make something<br /><em>worth remembering.</em></h2>
          <a className="email-link" href="mailto:hello@alexmorgan.design">
            hello@alexmorgan.design <Arrow />
          </a>
          <div className="footer-bottom">
            <span>© 2026 Alex Morgan</span>
            <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
