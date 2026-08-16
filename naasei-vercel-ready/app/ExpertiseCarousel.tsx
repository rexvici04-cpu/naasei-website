"use client";

import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";

const capabilities = [
  {
    number: "01", short: "Strategy", title: "Strategy, programmes & systems",
    copy: "I turn broad intentions into practical programmes, structures and systems—grounded in the problem, the people affected and the change the work is meant to create.",
    services: "Strategy development · Programme design · Governance · Implementation · M&E",
    image: "/assets/images/naasei-facilitating.webp", alt: "NaaSei presenting a programme framework to a group", position: "50% 42%",
    accent: "#c58b42", glow: "#6f321f",
  },
  {
    number: "02", short: "Entrepreneurship", title: "Business & entrepreneurship development",
    copy: "I help early-stage founders clarify the problem, sharpen the offer and communicate the venture with enough confidence and evidence to move it forward.",
    services: "Business models · Value propositions · Pitch coaching · Startup mentoring · Judging",
    image: "/assets/images/naasei-in-conversation.webp", alt: "NaaSei coaching young people in a close group conversation", position: "45% 48%",
    accent: "#cf5138", glow: "#48131d",
  },
  {
    number: "03", short: "Storytelling", title: "Marketing, communication & storytelling",
    copy: "I help people and organisations say what they do, why it matters and why anyone should care—in language that earns understanding, trust and action.",
    services: "Positioning · Messaging · Content strategy · Campaigns · Presentations · Storytelling",
    image: "/assets/images/naasei-on-stage.webp", alt: "NaaSei speaking to an audience on stage", position: "50% 32%",
    accent: "#e16a3d", glow: "#5a111c",
  },
  {
    number: "04", short: "Facilitation", title: "Facilitation, moderation & corporate MC",
    copy: "I create rooms where people can think clearly, participate honestly and reach a useful outcome—without losing the energy that makes the gathering memorable.",
    services: "Design thinking · Leadership workshops · Strategy sessions · Panels · Corporate MC",
    image: "/assets/images/naasei-leading.webp", alt: "NaaSei leading a workshop conversation", position: "50% 34%",
    accent: "#b7a04a", glow: "#234232",
  },
  {
    number: "05", short: "AI workflows", title: "Digital & AI-enabled workflows",
    copy: "I help teams simplify repetitive or unclear work by applying digital tools and AI to information, communication, reporting and everyday decisions.",
    services: "Workflow analysis · AI-assisted content · Reporting systems · Knowledge management",
    image: "/assets/images/naasei-ai-reflection.webp", alt: "NaaSei listening thoughtfully during a technology discussion", position: "50% 33%",
    accent: "#4d9b88", glow: "#173c38",
  },
] as const;

export default function ExpertiseCarousel() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const capability = capabilities[active];
  const next = capabilities[(active + 1) % capabilities.length];

  const select = (index: number, requestedDirection?: 1 | -1) => {
    const normalized = (index + capabilities.length) % capabilities.length;
    if (normalized === active) return;
    setPrevious(active);
    setDirection(requestedDirection ?? (normalized > active ? 1 : -1));
    setActive(normalized);
  };

  const move = (step: 1 | -1) => select(active + step, step);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setPrevious(active);
      setDirection(1);
      setActive((active + 1) % capabilities.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  const moveScene = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    event.currentTarget.style.setProperty("--pointer-x", `${x.toFixed(2)}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y.toFixed(2)}px`);
  };

  const style = { "--value-accent": capability.accent, "--value-glow": capability.glow } as CSSProperties;

  return (
    <div className="value-experience" aria-label="NaaSei's connected professional capabilities">
      <div
        className={`value-stage direction-${direction === 1 ? "next" : "previous"}${paused ? " is-paused" : ""}`}
        style={style}
        tabIndex={0}
        onPointerMove={moveScene}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--pointer-x", "0px");
          event.currentTarget.style.setProperty("--pointer-y", "0px");
          setPaused(false);
        }}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}
      >
        <div className="value-ambient" key={`ambient-${capability.number}`} aria-hidden="true" />
        <div className="value-orbit value-orbit-back" aria-hidden="true" />
        <div className="value-orbit value-orbit-front" aria-hidden="true" />

        <div className="value-copy" key={`copy-${capability.number}`} aria-live="polite">
          <p className="value-kicker"><span>{capability.number}</span> How I create value</p>
          <h3>{capability.title}</h3>
          <p className="value-description">{capability.copy}</p>
          <p className="value-services">{capability.services}</p>
        </div>

        <div className="value-visual" aria-hidden="true">
          {previous !== null && previous !== active && (
            <div className="value-image value-image-out" key={`previous-${previous}`}>
              <img src={capabilities[previous].image} alt="" style={{ objectPosition: capabilities[previous].position }} />
            </div>
          )}
          <div className="value-image value-image-in" key={`active-${capability.number}`}>
            <img src={capability.image} alt="" style={{ objectPosition: capability.position }} />
          </div>
          <div className="value-visual-ring" />
        </div>

        <button className="value-next" type="button" onClick={() => move(1)} aria-label={`Next: ${next.title}`}>
          <span>Next</span><strong>{next.short}</strong><i aria-hidden="true">→</i>
        </button>

        <div className="value-counter" aria-hidden="true">
          <strong>{capability.number}</strong><span>/</span><small>{String(capabilities.length).padStart(2, "0")}</small>
        </div>
      </div>

      <nav className="value-timeline" aria-label="Choose a capability">
        {capabilities.map((item, index) => (
          <button type="button" className={active === index ? "is-active" : ""} onClick={() => select(index)} key={item.number} aria-current={active === index ? "true" : undefined}>
            <span>{item.number}</span><strong>{item.short}</strong><i aria-hidden="true" />
          </button>
        ))}
      </nav>
    </div>
  );
}
