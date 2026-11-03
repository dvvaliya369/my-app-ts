"use client";

import { FormEvent, useState } from "react";

const classes = [
  {
    title: "Strength Lab",
    category: "Strength",
    meta: "50 min · Intermediate",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Pulse Ride",
    category: "Cardio",
    meta: "45 min · All levels",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Form & Flow",
    category: "Mobility",
    meta: "55 min · All levels",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=85",
  },
];

const schedule = {
  MON: [
    ["06:30", "Morning Ignition", "Cardio · Maya R."],
    ["12:00", "Strength Lab", "Strength · Noah K."],
    ["18:30", "Form & Flow", "Mobility · Lena A."],
  ],
  TUE: [
    ["07:00", "Power Circuit", "Strength · Noah K."],
    ["12:30", "Pulse Ride", "Cardio · Maya R."],
    ["19:00", "Reset Yoga", "Mobility · Lena A."],
  ],
  WED: [
    ["06:30", "Athletic Engine", "Conditioning · Maya R."],
    ["17:30", "Strength Lab", "Strength · Noah K."],
    ["19:00", "Box & Burn", "Cardio · Andre T."],
  ],
  THU: [
    ["07:00", "Form & Flow", "Mobility · Lena A."],
    ["12:00", "Power Circuit", "Strength · Noah K."],
    ["18:30", "Pulse Ride", "Cardio · Maya R."],
  ],
  FRI: [
    ["06:30", "Morning Ignition", "Cardio · Andre T."],
    ["12:30", "Strength Lab", "Strength · Noah K."],
    ["17:30", "Weekend Reset", "Mobility · Lena A."],
  ],
};

type Day = keyof typeof schedule;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<Day>("MON");
  const [annual, setAnnual] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Forge Fitness home">
          <span className="brand-mark">F</span>
          FORGE<span>FITNESS</span>
        </a>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#classes" onClick={() => setMenuOpen(false)}>Classes</a>
          <a href="#coaches" onClick={() => setMenuOpen(false)}>Coaches</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a>
        </nav>
        <a className="header-cta" href="#membership">Start training <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Built for more</p>
          <h1>Earn your<br /><em>strong.</em></h1>
          <p className="hero-copy">
            Training that meets you where you are—then takes you further than you thought possible.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#membership">Claim a free session <ArrowIcon /></a>
            <a className="text-link" href="#classes">Explore classes <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-side-label">BROOKLYN · EST. 2018</div>
        <div className="hero-stat">
          <strong>01</strong>
          <div><b>One team.</b><span>Every goal.</span></div>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO DISCOVER</div>
      </section>

      <section className="ticker" aria-label="Gym features">
        <div>
          <span>STRENGTH</span><i>✦</i><span>CONDITIONING</span><i>✦</i><span>MOBILITY</span><i>✦</i>
          <span>COMMUNITY</span><i>✦</i><span>STRENGTH</span><i>✦</i><span>CONDITIONING</span>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="section-number">[ 01 ]</div>
        <div className="intro-copy">
          <p className="eyebrow dark"><span /> This is Forge</p>
          <h2>We don&apos;t do shortcuts.<br />We build <em>strength</em> that lasts.</h2>
        </div>
        <div className="intro-detail">
          <p>Expert coaching, intentional programming, and a community that shows up. Everything you need to move better, feel stronger, and keep progressing.</p>
          <a className="text-link dark-link" href="#coaches">Our approach <ArrowIcon /></a>
        </div>
      </section>

      <section className="classes section-pad" id="classes">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Find your training</p>
            <h2>Move with <em>purpose.</em></h2>
          </div>
          <p>Small-group sessions. Big individual attention. Choose your challenge and we&apos;ll help you own it.</p>
        </div>
        <div className="class-grid">
          {classes.map((item, index) => (
            <article className="class-card" key={item.title}>
              <div className="class-image" style={{ backgroundImage: `url(${item.image})` }}>
                <span>0{index + 1}</span>
                <a href="#schedule" aria-label={`View ${item.title} schedule`}><ArrowIcon /></a>
              </div>
              <div className="class-info">
                <div><p>{item.category}</p><h3>{item.title}</h3></div>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image" />
        <div className="manifesto-content">
          <span className="quote-mark">“</span>
          <blockquote>Your body can do more than your mind believes. We&apos;re here to prove it.</blockquote>
          <div className="quote-author"><span /><p><b>NOAH KIM</b>Head Coach &amp; Co-founder</p></div>
        </div>
      </section>

      <section className="coaches section-pad" id="coaches">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Meet the team</p>
            <h2>Coaches who <em>care.</em></h2>
          </div>
          <p>Great coaching is personal. Our team brings deep expertise, real energy, and a commitment to your progress.</p>
        </div>
        <div className="coach-grid">
          <article className="coach coach-one"><div><p>HEAD COACH · STRENGTH</p><h3>Noah Kim</h3></div></article>
          <article className="coach coach-two"><div><p>CONDITIONING · RIDE</p><h3>Maya Rivera</h3></div></article>
          <article className="coach coach-three"><div><p>MOBILITY · YOGA</p><h3>Lena Adams</h3></div></article>
        </div>
      </section>

      <section className="schedule section-pad" id="schedule">
        <div className="schedule-heading">
          <div>
            <p className="eyebrow"><span /> Weekly lineup</p>
            <h2>Make time for<br /><em>yourself.</em></h2>
          </div>
          <p>Choose a day and find the session that fits your rhythm. New members train free for their first class.</p>
        </div>
        <div className="day-tabs" role="tablist" aria-label="Class schedule days">
          {(Object.keys(schedule) as Day[]).map((day) => (
            <button key={day} className={activeDay === day ? "active" : ""} onClick={() => setActiveDay(day)} role="tab" aria-selected={activeDay === day}>{day}</button>
          ))}
        </div>
        <div className="schedule-list">
          {schedule[activeDay].map((session) => (
            <div className="schedule-row" key={session[0] + session[1]}>
              <time>{session[0]}</time>
              <div><h3>{session[1]}</h3><p>{session[2]}</p></div>
              <a href="#membership" aria-label={`Book ${session[1]}`}>Book spot <ArrowIcon /></a>
            </div>
          ))}
        </div>
      </section>

      <section className="membership section-pad" id="membership">
        <div className="membership-heading">
          <div>
            <p className="eyebrow dark"><span /> Membership</p>
            <h2>Invest in<br /><em>your strength.</em></h2>
          </div>
          <div className="billing-toggle">
            <span className={!annual ? "active" : ""}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} aria-label="Toggle annual billing" aria-pressed={annual}><i className={annual ? "annual" : ""} /></button>
            <span className={annual ? "active" : ""}>Annual <b>Save 15%</b></span>
          </div>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <p>ESSENTIAL</p><h3><sup>$</sup>{annual ? "83" : "98"}<small>/ month</small></h3>
            <span>Everything you need to build a consistent training habit.</span>
            <ul><li>8 classes per month</li><li>Open gym access</li><li>Movement assessment</li><li>Member app access</li></ul>
            <a className="button button-outline" href="#join">Choose Essential <ArrowIcon /></a>
          </article>
          <article className="price-card featured">
            <div className="popular">MOST POPULAR</div>
            <p>UNLIMITED</p><h3><sup>$</sup>{annual ? "126" : "148"}<small>/ month</small></h3>
            <span>Unlimited access and full support to accelerate your progress.</span>
            <ul><li>Unlimited classes</li><li>24/7 open gym access</li><li>Quarterly progress review</li><li>1 guest pass per month</li></ul>
            <a className="button button-primary" href="#join">Choose Unlimited <ArrowIcon /></a>
          </article>
          <article className="price-card">
            <p>DROP-IN</p><h3><sup>$</sup>28<small>/ class</small></h3>
            <span>Train on your terms. No commitment, all the Forge energy.</span>
            <ul><li>Any single group class</li><li>Full facility access</li><li>Towel service</li><li>Valid for 30 days</li></ul>
            <a className="button button-outline" href="#join">Book a class <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="join" id="join">
        <div className="join-content">
          <p className="eyebrow"><span /> Your first move</p>
          <h2>Ready to see what<br />you&apos;re made of?</h2>
          <p>Claim your complimentary first session. No pressure. Just a great workout and a team ready to meet you.</p>
          {submitted ? (
            <div className="success-message">You&apos;re on the list. We&apos;ll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label><span className="sr-only">Email address</span><input type="email" placeholder="Enter your email address" required /></label>
              <button type="submit" className="button button-primary">Get started <ArrowIcon /></button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">F</span>FORGE<span>FITNESS</span></a>
          <p>STRONGER STARTS HERE.</p>
          <div className="socials"><a href="#top">IG</a><a href="#top">YT</a><a href="#top">TK</a></div>
        </div>
        <div className="footer-grid">
          <div><p>VISIT</p><address>247 Wythe Avenue<br />Brooklyn, NY 11249</address></div>
          <div><p>HOURS</p><span>Mon–Fri &nbsp; 5:30–22:00<br />Sat–Sun &nbsp; 7:00–20:00</span></div>
          <div><p>CONTACT</p><a href="mailto:hello@forgefitness.co">hello@forgefitness.co</a><br /><a href="tel:+17185550184">+1 718 555 0184</a></div>
          <div><p>EXPLORE</p><a href="#classes">Classes</a><br /><a href="#coaches">Coaches</a><br /><a href="#membership">Membership</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 FORGE FITNESS</span><span>PRIVACY &nbsp; · &nbsp; TERMS</span><span>BUILT IN BROOKLYN</span></div>
      </footer>
    </main>
  );
}
