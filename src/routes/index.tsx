import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const plans = [
  { name: "Foundation", note: "For a focused training routine", price: "₹7,500", period: "/ month", items: ["Full club access", "Movement assessment", "Locker and towel service"] },
  { name: "Apex", note: "For consistent measurable progress", price: "₹12,500", period: "/ month", featured: true, items: ["Everything in Foundation", "Four coaching sessions", "Recovery suite access"] },
  { name: "Private", note: "For a fully tailored experience", price: "₹24,000", period: "/ month", items: ["Everything in Apex", "Unlimited 1:1 coaching", "Nutrition and recovery plan"] },
];

const trainers = [
  { name: "Arjun Subramanian", role: "Strength and conditioning", detail: "Barbell mechanics, athletic performance and long-term progression." },
  { name: "Nivedita Raman", role: "Movement and mobility", detail: "Posture, mobility and strength foundations for confident movement." },
  { name: "Karthik Iyer", role: "Performance coaching", detail: "Structured training for members who want a clear path to better output." },
];

const facilities = [
  ["Strength floor", "Purpose-built racks, platforms and calibrated equipment.", "facility-main"],
  ["Private coaching", "Quiet zones for focused sessions with your coach.", "facility-coach"],
  ["Recovery suite", "A considered space to downshift, restore and return stronger.", "facility-recovery"],
  ["Mind and body", "Pilates, mobility and guided movement for a complete practice.", "facility-mind"],
];

function Index() {
  return (
    <main className="apex-site">
      <header className="site-nav">
        <a href="#top" className="wordmark" aria-label="The Apex Club home"><span className="wordmark-mark" aria-hidden="true"><svg className="bull-mark" viewBox="0 0 64 40" role="presentation"><path d="M8 12 2 6l2-2 10 5c5-5 12-7 18-7s13 2 18 7l10-5 2 2-6 6c1 3 1 6 0 9-2 8-9 14-18 15v4h-5v-4h-4v4h-5v-4C16 34 9 28 7 20c-1-3 0-6 1-8Zm12 10c2 2 5 3 12 3s10-1 12-3c-1 6-5 10-12 10s-11-4-12-10Zm3-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm18 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /></svg></span><span>THE APEX CLUB</span></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#club">The club</a><a href="#membership">Membership</a><a href="#coaches">Coaches</a><a href="#facilities">Facilities</a>
        </nav>
        <a href="#contact" className="nav-cta">Book a private tour <span>↗</span></a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">CHENNAI / PRIVATE FITNESS CLUB</p>
          <h1>Rise above<br /><em>ordinary.</em></h1>
          <p className="hero-intro">A considered place to train with intent, guided by coaches who know how progress is built.</p>
          <div className="hero-actions"><a href="#contact" className="orange-button">Book a private tour <span>↗</span></a><a href="#membership" className="text-link">Explore memberships <span>↓</span></a></div>
        </div>
        <div className="hero-image" role="img" aria-label="Apex Club premium strength floor in Chennai"><div className="hero-image-caption">ECR / CHENNAI<br />THE APEX STANDARD</div></div>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section className="proof-rail" aria-label="Club highlights"><div><strong>01</strong><span>Private club environment</span></div><div><strong>02</strong><span>Coach-led programming</span></div><div><strong>03</strong><span>Training and recovery</span></div><div><strong>04</strong><span>South Chennai location</span></div></section>

      <section id="club" className="club-section section-pad">
        <div className="section-heading"><p className="eyebrow">THE CLUB</p><h2>Training is only<br /><span>part of the picture.</span></h2></div>
        <div className="club-grid"><div className="club-lead"><p>THE APEX CLUB is a private fitness and wellness club for people who want more from the hour they put into themselves.</p><a href="#contact" className="line-link">Meet the club <span>↗</span></a></div><div className="club-body"><p>Every detail is built around a better training experience. Intelligent programming. Quiet confidence. A team that pays attention.</p><p>From your first assessment to your next personal best, the aim is simple: make progress feel considered, consistent and yours.</p></div><div className="club-image" aria-label="Premium Apex Club training space" role="img" /></div>
      </section>

      <section id="membership" className="membership-section section-pad"><div className="section-heading"><p className="eyebrow">MEMBERSHIP</p><h2>Choose your<br /><span>level of intent.</span></h2><p className="section-note">Start with the structure that fits your life. Your coach will help you shape what comes next.</p></div><div className="plan-grid">{plans.map((plan) => <article className={`plan-card ${plan.featured ? "plan-featured" : ""}`} key={plan.name}><div className="plan-top"><p className="plan-name">{plan.name}</p>{plan.featured && <span className="plan-badge">Most chosen</span>}</div><p className="plan-note">{plan.note}</p><div className="plan-price">{plan.price}<small>{plan.period}</small></div><ul>{plan.items.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul><a href="#contact" className={plan.featured ? "dark-button" : "outline-button"}>Request a consultation <span>↗</span></a></article>)}</div></section>

      <section id="coaches" className="coaches-section section-pad"><div className="section-heading"><p className="eyebrow">THE COACHES</p><h2>Expertise that<br /><span>stays personal.</span></h2></div><div className="coach-list">{trainers.map((trainer, index) => <article className="coach-row" key={trainer.name}><span className="coach-number">0{index + 1}</span><div className="coach-initial">{trainer.name.split(" ").map((n) => n[0]).join("")}</div><div className="coach-name"><h3>{trainer.name}</h3><p>{trainer.role}</p></div><p className="coach-detail">{trainer.detail}</p><a href="#contact" className="round-arrow" aria-label={`Contact ${trainer.name}`}>↗</a></article>)}</div></section>

      <section id="facilities" className="facilities-section section-pad"><div className="section-heading"><p className="eyebrow">THE SPACE</p><h2>Built for the<br /><span>whole practice.</span></h2></div><div className="facility-grid">{facilities.map(([name, detail, cls], index) => <article className={`facility-card ${cls}`} key={name}><div className="facility-overlay"><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></div></article>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-copy"><p className="eyebrow">COME SEE THE CLUB</p><h2>Your next chapter<br /><span>starts here.</span></h2><p>Visit THE APEX CLUB in Chennai and experience a more considered way to train.</p><div className="contact-details"><a href="tel:+914412345678">+91 44 1234 5678</a><a href="mailto:hello@theapexclub.in">hello@theapexclub.in</a><span>East Coast Road, Chennai</span></div></div><form className="contact-form" action="mailto:hello@theapexclub.in" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Phone or email<input name="contact" required /></label><label>What are you looking for?<select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Private coaching</option><option>Club membership</option><option>Recovery and wellness</option></select></label><button type="submit" className="orange-button">Request a consultation <span>↗</span></button><p className="form-note">We will get back to you within one working day.</p></form></section>

      <footer className="site-footer"><a href="#top" className="wordmark"><span className="wordmark-mark" aria-hidden="true"><svg className="bull-mark" viewBox="0 0 64 40" role="presentation"><path d="M8 12 2 6l2-2 10 5c5-5 12-7 18-7s13 2 18 7l10-5 2 2-6 6c1 3 1 6 0 9-2 8-9 14-18 15v4h-5v-4h-4v4h-5v-4C16 34 9 28 7 20c-1-3 0-6 1-8Zm12 10c2 2 5 3 12 3s10-1 12-3c-1 6-5 10-12 10s-11-4-12-10Zm3-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm18 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /></svg></span><span>THE APEX CLUB</span></a><p>Elite fitness and wellness, Chennai.</p><a href="#top" className="back-top">Back to top ↑</a></footer>
    </main>
  );
}
