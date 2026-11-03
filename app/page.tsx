"use client";

import { useState } from "react";
import styles from "./page.module.css";

const programs = [
  {
    number: "01",
    name: "Strength",
    description: "Build raw power with progressive coaching and deliberate movement.",
    meta: "45–60 min · All levels",
    className: styles.programStrength,
  },
  {
    number: "02",
    name: "Conditioning",
    description: "Raise your engine through intervals that sharpen speed and stamina.",
    meta: "35–50 min · High energy",
    className: styles.programConditioning,
  },
  {
    number: "03",
    name: "Mobility",
    description: "Move better, recover faster, and build resilience that lasts.",
    meta: "30–45 min · Restorative",
    className: styles.programMobility,
  },
];

const schedule = {
  Mon: [
    ["06:00", "Athletic Strength", "Mara K."],
    ["12:00", "Engine Room", "Leo S."],
    ["18:30", "Barbell Club", "Jon B."],
  ],
  Tue: [
    ["07:00", "Power Circuit", "Leo S."],
    ["17:30", "Mobility Reset", "Nia R."],
    ["19:00", "Conditioning Lab", "Mara K."],
  ],
  Wed: [
    ["06:00", "Lower Body", "Jon B."],
    ["12:00", "Core Control", "Nia R."],
    ["18:30", "Team Training", "Mara K."],
  ],
  Thu: [
    ["07:00", "Engine Room", "Leo S."],
    ["17:30", "Upper Body", "Jon B."],
    ["19:00", "Mobility Flow", "Nia R."],
  ],
  Fri: [
    ["06:00", "Full Body Power", "Mara K."],
    ["12:00", "Lunch Express", "Leo S."],
    ["17:30", "Friday Finish", "Jon B."],
  ],
};

const faqs = [
  ["Do I need experience to join?", "Not at all. Every session is coached and scaled to your current level, whether it is day one or year ten."],
  ["Can I try a class first?", "Yes. Your first session is complimentary and includes a short movement assessment with a coach."],
  ["What should I bring?", "Comfortable training clothes, water, and a willingness to work. We provide all specialist equipment."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<keyof typeof schedule>("Mon");
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={styles.siteShell}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#top" className={styles.logo} onClick={closeMenu} aria-label="Form Athletics home">
          FORM<span>.</span>
        </a>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <div id="main-menu" className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#schedule" onClick={closeMenu}>Schedule</a>
          <a href="#membership" onClick={closeMenu}>Membership</a>
          <a href="#about" onClick={closeMenu}>Our method</a>
          <a href="#membership" className={styles.navCta} onClick={closeMenu}>Start training</a>
        </div>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Performance training · Brooklyn, NY</p>
          <h1>Built for<br /><em>more.</em></h1>
          <p className={styles.heroCopy}>Expert coaching, purposeful training, and a community that expects your best.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#membership">Book a free session <span>↗</span></a>
            <a className={styles.textLink} href="#programs">Explore training <span>↓</span></a>
          </div>
        </div>
        <div className={styles.heroAside}>
          <span>Est.</span><strong>2018</strong>
          <div className={styles.verticalLine} />
          <span>Train with intent</span>
        </div>
        <a href="#programs" className={styles.scrollCue} aria-label="Scroll to programs">Scroll<br />to move</a>
      </section>

      <section className={styles.intro} id="about">
        <div className={styles.sectionLabel}><span>01</span> Our standard</div>
        <div className={styles.introCopy}>
          <h2>Training should change more than your body.</h2>
          <p>We combine intelligent programming, hands-on coaching, and an environment that makes showing up the best part of your day.</p>
        </div>
        <div className={styles.stats}>
          <div><strong>08</strong><span>Expert coaches</span></div>
          <div><strong>42</strong><span>Classes weekly</span></div>
          <div><strong>4.9</strong><span>Member rating</span></div>
        </div>
      </section>

      <section className={styles.programs} id="programs">
        <div className={styles.sectionHeading}>
          <div className={styles.sectionLabel}><span>02</span> Choose your work</div>
          <h2>Ways to train</h2>
          <p>One standard. Three distinct paths. All programmed to deliver measurable progress.</p>
        </div>
        <div className={styles.programGrid}>
          {programs.map((program) => (
            <article className={`${styles.programCard} ${program.className}`} key={program.name}>
              <div className={styles.cardOverlay} />
              <span className={styles.cardNumber}>{program.number}</span>
              <div className={styles.cardContent}>
                <p>{program.meta}</p>
                <h3>{program.name}</h3>
                <div className={styles.cardReveal}>
                  <p>{program.description}</p>
                  <a href="#schedule" aria-label={`View ${program.name} schedule`}>View schedule <span>↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.method}>
        <div className={styles.methodPhoto} role="img" aria-label="Athlete training with battle ropes" />
        <div className={styles.methodContent}>
          <div className={styles.sectionLabel}><span>03</span> The method</div>
          <h2>No guesswork.<br /><em>Just progress.</em></h2>
          <p>Every block is designed by our coaching team, grounded in proven principles and adapted to the humans in the room.</p>
          <ol>
            <li><span>01</span><div><strong>Assess</strong><p>We learn how you move and what you want.</p></div></li>
            <li><span>02</span><div><strong>Build</strong><p>Your coach creates a clear, progressive path.</p></div></li>
            <li><span>03</span><div><strong>Evolve</strong><p>We measure, refine, and keep raising the bar.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.scheduleSection} id="schedule">
        <div className={styles.scheduleTop}>
          <div>
            <div className={styles.sectionLabel}><span>04</span> This week</div>
            <h2>Make the time.</h2>
          </div>
          <p>Small-group sessions, quality coaching, and enough options to make consistency non-negotiable.</p>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Class days">
          {(Object.keys(schedule) as Array<keyof typeof schedule>).map((day) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeDay === day}
              className={activeDay === day ? styles.activeDay : ""}
              onClick={() => setActiveDay(day)}
              key={day}
            >{day}</button>
          ))}
        </div>
        <div className={styles.classList} aria-live="polite">
          {schedule[activeDay].map(([time, name, coach], index) => (
            <div className={styles.classRow} key={`${activeDay}-${time}`}>
              <span className={styles.classIndex}>0{index + 1}</span>
              <time>{time}</time>
              <strong>{name}</strong>
              <span>Coach {coach}</span>
              <a href="#membership" aria-label={`Book ${name}`}>Book <span>↗</span></a>
            </div>
          ))}
        </div>
        <a className={styles.scheduleLink} href="#membership">View full weekly schedule <span>→</span></a>
      </section>

      <section className={styles.quoteSection}>
        <figure>
          <blockquote>“I came for the workout. I stayed because this is the first place that made me believe I’m capable of more.”</blockquote>
          <figcaption><strong>Alex M.</strong><span>Member since 2021</span></figcaption>
        </figure>
        <div className={styles.quoteImage} role="img" aria-label="Gym member preparing for a workout" />
      </section>

      <section className={styles.membership} id="membership">
        <div className={styles.membershipHeading}>
          <div>
            <div className={styles.sectionLabel}><span>05</span> Membership</div>
            <h2>Commit to better.</h2>
          </div>
          <div className={styles.priceToggle} aria-label="Price cadence">
            <button type="button" className={!annual ? styles.toggleActive : ""} onClick={() => setAnnual(false)}>Monthly</button>
            <button type="button" className={annual ? styles.toggleActive : ""} onClick={() => setAnnual(true)}>Annual <span>Save 15%</span></button>
          </div>
        </div>
        <div className={styles.planGrid}>
          <article className={styles.planCard}>
            <p>Essential</p><h3><sup>$</sup>{annual ? "126" : "149"}<small>/ mo</small></h3>
            <span>For building a steady rhythm.</span>
            <ul><li>8 group sessions monthly</li><li>Open gym access</li><li>Monthly progress check-in</li></ul>
            <a href="mailto:hello@formathletics.com?subject=Essential membership">Choose essential</a>
          </article>
          <article className={`${styles.planCard} ${styles.featuredPlan}`}>
            <div className={styles.popular}>Most popular</div>
            <p>Unlimited</p><h3><sup>$</sup>{annual ? "169" : "199"}<small>/ mo</small></h3>
            <span>For making training a lifestyle.</span>
            <ul><li>Unlimited group sessions</li><li>24/7 open gym access</li><li>Quarterly performance review</li><li>Recovery room access</li></ul>
            <a href="mailto:hello@formathletics.com?subject=Unlimited membership">Choose unlimited</a>
          </article>
          <article className={styles.planCard}>
            <p>Personal</p><h3><sup>$</sup>{annual ? "288" : "340"}<small>/ mo</small></h3>
            <span>For a fully tailored approach.</span>
            <ul><li>4 personal training sessions</li><li>Unlimited group sessions</li><li>Individual programming</li><li>Direct coach support</li></ul>
            <a href="mailto:hello@formathletics.com?subject=Personal membership">Choose personal</a>
          </article>
        </div>
        <p className={styles.planNote}>All memberships begin with a free session. No contracts. No joining fees.</p>
      </section>

      <section className={styles.faqSection}>
        <div><div className={styles.sectionLabel}><span>06</span> Good to know</div><h2>Questions,<br />answered.</h2></div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer], index) => (
            <article className={styles.faqItem} key={question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                <span>{question}</span><strong>{openFaq === index ? "−" : "+"}</strong>
              </button>
              {openFaq === index && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <p>Your first session is on us.</p>
        <h2>Ready to see what<br />you’re made of?</h2>
        <a href="mailto:hello@formathletics.com?subject=Free first session">Book your free session <span>↗</span></a>
        <div className={styles.marquee} aria-hidden="true">MOVE WITH PURPOSE · MOVE WITH PURPOSE · MOVE WITH PURPOSE ·</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><a href="#top" className={styles.logo}>FORM<span>.</span></a><p>Strength for life.<br />Built in Brooklyn.</p></div>
        <div><strong>Visit</strong><p>128 Wythe Avenue<br />Brooklyn, NY 11249</p></div>
        <div><strong>Hours</strong><p>Mon–Fri 5:30–21:00<br />Sat–Sun 7:00–18:00</p></div>
        <div><strong>Follow</strong><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></div>
        <div className={styles.footerBottom}><span>© 2026 Form Athletics</span><a href="mailto:hello@formathletics.com">hello@formathletics.com</a><span>Train with intent.</span></div>
      </footer>
    </main>
  );
}
