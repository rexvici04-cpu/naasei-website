const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="NaaSei — home">
            <img
              src="/assets/brand/NaaSei_Primary_Horizontal_Ivory.svg"
              alt="NaaSei"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#ideas">Ideas</a>
            <a href="#contact">Contact</a>
          </nav>

          <details className="mobile-menu">
            <summary>
              Menu <span aria-hidden="true">+</span>
            </summary>

            <nav aria-label="Mobile navigation">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#ideas">Ideas</a>
              <a href="#contact">Start a conversation</a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScN51Mf8s36dlDEeCgwS4Eaq2Qy_LbVR2wi6epASZLfdOGFcg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Nakuwa <Arrow />
              </a>
            </nav>
          </details>

          <div className="header-actions">
            <a
              className="header-join"
              href="https://docs.google.com/forms/d/e/1FAIpQLScN51Mf8s36dlDEeCgwS4Eaq2Qy_LbVR2wi6epASZLfdOGFcg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Nakuwa <Arrow />
            </a>

            <a className="header-cta" href="#contact">
              Start a conversation <Arrow />
            </a>
          </div>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Innovation · Purpose · Leadership
            </p>

            <h1 id="hero-title">
              Build beyond
              <em>your beginning.</em>
            </h1>

            <p className="hero-summary">
              I build leverage for people and organisations capable of more
              than their current conditions allow.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="#work">
                Explore the work <Arrow />
              </a>

              <a className="text-link" href="#about">
                Read my story <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of NaaSei">
            <div className="symbol-halo" aria-hidden="true">
              <img
                src="/assets/brand/NaaSei_Adinkrahene_Gold.svg"
                alt=""
              />
            </div>

            <div className="portrait-frame">
              <img
                className="hero-portrait"
                src="/assets/images/naasei-portrait.webp"
                alt="NaaSei in a dark suit, standing with his arms folded"
              />
            </div>

            <div className="proof-note">
              <span className="proof-index">01</span>
              <p>
                From welding
                <strong>to building systems.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="hero-footer" aria-hidden="true">
          <span>Accra, Ghana</span>
          <span className="hero-line" />
          <span>Scroll to become</span>
        </div>
      </section>

      <section
        className="manifesto"
        id="about"
        aria-labelledby="manifesto-title"
      >
        <div className="section-label">
          <span>02</span>
          <p>The belief</p>
        </div>

        <div className="manifesto-content">
          <h2 id="manifesto-title">
            Your beginning is context.
            <span>Not destiny.</span>
          </h2>

          <div className="manifesto-detail">
            <p>
              Human potential is far greater than most systems allow. The gap
              between what young Africans can do and what they achieve is not a
              talent deficit. It is a design problem.
            </p>

            <a className="text-link dark-link" href="#work">
              See how I build leverage <Arrow />
            </a>
          </div>
        </div>

        <div className="manifesto-proof">
          <article>
            <span>01</span>
            <h3>Craft</h3>
            <p>TVET-trained in welding and fabrication.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Systems</h3>
            <p>Governance, platforms and programmes built beyond title.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Enterprise</h3>
            <p>Muhalli, Plasture™ and product ideas made tangible.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Legacy</h3>
            <p>People and institutions equipped to continue without me.</p>
          </article>
        </div>
      </section>

      <section className="story" aria-labelledby="story-title">
        <div className="story-image-wrap">
          <img
            src="/assets/images/naasei-speaking.webp"
            alt="NaaSei speaking to a group in Accra"
            loading="lazy"
          />

          <div className="story-caption">
            <span>Konongo → Accra</span>
            <p>Grace. Hunger. Work.</p>
          </div>
        </div>

        <div className="story-copy">
          <div className="section-label light-label">
            <span>03</span>
            <p>The story</p>
          </div>

          <h2 id="story-title">
            Welding shaped
            <span>the way I lead.</span>
          </h2>

          <p className="story-lead">
            Before the boardroom, there was the workshop: heat, measurement,
            repetition and the humility to begin again.
          </p>

          <p>
            I came through technical and vocational education before university.
            That journey taught me that potential is often present long before
            opportunity can see it. Today, I carry the maker&apos;s discipline
            into governance, programme design, technology and enterprise.
          </p>

          <blockquote>
            “I am proof that where you start does not determine where you land.”
          </blockquote>

          <div className="story-signature">
            <div>
              <strong>Michael Osei Aboagye</strong>
              <span>NaaSei · Rex</span>
            </div>

            <img
              src="/assets/brand/NaaSei_Adinkrahene_Gold.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <div className="section-label">
            <span>04</span>
            <p>Selected work</p>
          </div>

          <h2 id="work-title">
            Leverage,
            <span>made visible.</span>
          </h2>

          <p>
            I work where people, systems and possibility meet—turning ambiguity
            into structures that can move.
          </p>
        </div>

        <article className="featured-case">
          <div className="case-image">
            <img
              src="/assets/images/naasei-presenting.webp"
              alt="NaaSei presenting an alumni programme framework"
              loading="lazy"
            />
            <span className="case-number">01</span>
          </div>

          <div className="case-copy">
            <p className="case-kicker">Digital systems · Alumni engagement</p>
            <h3>Nia</h3>

            <p className="case-subtitle">
              A purpose-built alumni engagement platform—from idea to a working
              system.
            </p>

            <p>
              Directed the product from concept through deployment, translating
              the needs of a one-person Alumni Relations Office into a clear
              operating and engagement tool.
            </p>

            <div className="case-metrics">
              <div>
                <strong>118</strong>
                <span>alumni records onboarded</span>
              </div>

              <div>
                <strong>01</strong>
                <span>connected engagement system</span>
              </div>
            </div>

            <p className="case-tags">Strategy / Product direction / Systems</p>
          </div>
        </article>

        <div className="work-grid">
          <article className="work-card governance-card">
            <div className="work-card-top">
              <img
                src="/assets/icons/NaaSei_Icon_Systems.svg"
                alt=""
                aria-hidden="true"
              />
              <span>02</span>
            </div>

            <div>
              <p className="case-kicker">Institution design</p>
              <h3>Governance that can outlive the founder.</h3>
              <p>
                A nine-document governance suite for the DTI Alumni Network,
                including an 18-seat advisory council and a dual-subgroup model.
              </p>
            </div>

            <dl>
              <div>
                <dt>9</dt>
                <dd>governance documents</dd>
              </div>

              <div>
                <dt>18</dt>
                <dd>council seats designed</dd>
              </div>
            </dl>
          </article>

          <article className="work-card community-card">
            <div className="community-image">
              <img
                src="/assets/images/naasei-community.webp"
                alt="NaaSei in conversation with young people"
                loading="lazy"
              />
            </div>

            <div className="community-card-copy">
              <div className="work-card-top">
                <img
                  src="/assets/icons/NaaSei_Icon_Community.svg"
                  alt=""
                  aria-hidden="true"
                />
                <span>03</span>
              </div>

              <p className="case-kicker">Youth voices &amp; agency</p>
              <h3>Making room for young people to shape TVET.</h3>
              <p>
                Leading Component 4 of the DTI × Mastercard Foundation
                partnership through programmes, reporting and platforms that
                move youth from participants to co-authors.
              </p>
            </div>
          </article>

          <article className="work-card muhalli-card">
            <div className="muhalli-symbol" aria-hidden="true">
              <img
                src="/assets/brand/NaaSei_Adinkrahene_Gold.svg"
                alt=""
              />
            </div>

            <div className="work-card-top">
              <img
                src="/assets/icons/NaaSei_Icon_Innovation.svg"
                alt=""
                aria-hidden="true"
              />
              <span>04</span>
            </div>

            <div>
              <p className="case-kicker">Circular design · Enterprise</p>
              <h3>Muhalli Design Studio</h3>
              <p>
                Building products and prototypes around Plasture™—recycled
                plastic composite boards designed to turn waste into useful,
                lasting objects.
              </p>
            </div>

            <p className="case-tags">
              Product design / Prototyping / Partnerships
            </p>
          </article>
        </div>
      </section>

      <section className="axes" aria-labelledby="axes-title">
        <div className="axes-intro">
          <div className="section-label inverse-label">
            <span>05</span>
            <p>The through-line</p>
          </div>

          <h2 id="axes-title">
            One life.
            <span>Three commitments.</span>
          </h2>
        </div>

        <div className="axes-grid">
          <article>
            <img
              src="/assets/icons/NaaSei_Icon_Innovation.svg"
              alt=""
              aria-hidden="true"
            />
            <span>01</span>
            <h3>Innovation</h3>
            <p>
              Build new tools, products and systems where inherited approaches
              limit possibility.
            </p>
          </article>

          <article>
            <img
              src="/assets/icons/NaaSei_Icon_Purpose.svg"
              alt=""
              aria-hidden="true"
            />
            <span>02</span>
            <h3>Purpose</h3>
            <p>
              Keep faith, service and human consequence at the centre of every
              ambitious decision.
            </p>
          </article>

          <article>
            <img
              src="/assets/icons/NaaSei_Icon_Leadership.svg"
              alt=""
              aria-hidden="true"
            />
            <span>03</span>
            <h3>Leadership</h3>
            <p>
              Create the conditions for people to become—and structures that
              remain useful after you leave.
            </p>
          </article>
        </div>
      </section>

      <section className="ideas" id="ideas" aria-labelledby="ideas-title">
        <div className="ideas-heading">
          <div className="section-label">
            <span>06</span>
            <p>Ideas in progress</p>
          </div>

          <h2 id="ideas-title">
            Thinking
            <span>out loud.</span>
          </h2>

          <p>
            Notes, frameworks and questions from the work of becoming—and
            helping others become.
          </p>
        </div>

        <div className="ideas-list">
          <article>
            <span className="idea-index">01</span>
            <div>
              <p>Framework</p>
              <h3>The gap is not talent. It is design.</h3>
            </div>
            <span className="idea-status">In progress</span>
          </article>

          <article>
            <span className="idea-index">02</span>
            <div>
              <p>Field note</p>
              <h3>What TVET taught me about becoming.</h3>
            </div>
            <span className="idea-status">In progress</span>
          </article>

          <article>
            <span className="idea-index">03</span>
            <div>
              <p>Essay</p>
              <h3>Build the institution, not the dependency.</h3>
            </div>
            <span className="idea-status">In progress</span>
          </article>
        </div>
      </section>

      <section className="rally" aria-label="Community rally">
        <img
          src="/assets/brand/NaaSei_Adinkrahene_Maroon.svg"
          alt=""
          aria-hidden="true"
        />
        <p>I become.</p>
        <span />
        <p>We become.</p>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-topline">
          <span>Accra, Ghana</span>
          <span>Open to meaningful collaborations</span>
        </div>

        <div className="contact-grid">
          <div>
            <p className="contact-kicker">Start a conversation</p>
            <h2 id="contact-title">
              Let&apos;s build what
              <span>outlives us.</span>
            </h2>
          </div>

          <div className="contact-action">
            <p>
              Reach out for institutional strategy, youth programmes, systems
              design, speaking, partnerships or a serious idea worth building.
            </p>

            <a
              className="email-link"
              href="mailto:oseiaboagyemichael@gmail.com"
            >
              oseiaboagyemichael@gmail.com <Arrow />
            </a>

            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/michael-aboagye"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home" aria-label="Back to top">
          <img
            src="/assets/brand/NaaSei_Primary_Horizontal_Ivory.svg"
            alt="NaaSei"
          />
        </a>

        <p>Innovation · Purpose · Leadership</p>
        <p>Build beyond your beginning.</p>
        <span>© 2026 NaaSei</span>
      </footer>
    </main>
  );
}
