"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Cross,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { memorial } from "@/lib/data/program-content";
import BookFolio from "@/components/BookFolio";
import PhotoGallery from "@/components/PhotoGallery";
import TributeWall from "@/components/TributeWall";

const navigation = [
  { label: "The story", href: "#story" },
  { label: "The service", href: "#book" },
  { label: "Memories", href: "#memories" },
  { label: "Tributes", href: "#tributes" },
  { label: "Thank you", href: "#family-thanks" },
];

export default function MemorialExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroImageFailed, setHeroImageFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openBook = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <main className="memorial-site">
      <header className="site-header">
        <a href="#home" className="brand-lockup" aria-label="Memorial home">
          <span className="brand-symbol" aria-hidden="true">
            <Cross size={19} strokeWidth={1.4} />
          </span>
          <span className="brand-copy">
            <strong>In Loving Memory</strong>
            <span>A CELEBRATION OF LIFE</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-book-link" href="/accessible-view">
          <BookOpen size={15} />
          Read the programme
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowRight size={15} />
            </a>
          ))}
          <a href="/accessible-view" onClick={() => setMenuOpen(false)}>
            Read the full programme
            <BookOpen size={15} />
          </a>
        </nav>
      )}

      <section className="hero" id="home">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="hero-kicker">
            <span />
            A LIFE REMEMBERED WITH LOVE
            <span />
          </div>

          <h1>
            A beautiful life.
            <br />
            <em>A lasting light.</em>
          </h1>

          <p className="hero-intro">
            In grateful remembrance of a life entrusted to us, a legacy
            cherished, and a love that will remain.
          </p>

          <div className="hero-name-block">
            <span className="hero-name-label">CELEBRATING THE LIFE OF</span>
            <h2>{memorial.displayName}</h2>
            <span className="hero-name-full">{memorial.fullName}</span>
          </div>

          <div className="hero-date-line">
            <CalendarDays size={16} strokeWidth={1.5} />
            <span>{memorial.birthDate}</span>
            <span className="hero-date-divider">—</span>
            <span>{memorial.entryIntoGloryDate}</span>
          </div>

          <div className="hero-actions">
            <button className="button-gold" onClick={openBook}>
              <BookOpen size={17} />
              Open the memorial book
              <ArrowRight size={16} />
            </button>
            <a className="button-text" href="/accessible-view">
              Read without animation
            </a>
          </div>

          <div className="hero-burial-note">
            <span className="hero-note-dot" />
            <span>BURIAL SERVICE</span>
            <strong>{memorial.burialDate}</strong>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art-orbit orbit-one" aria-hidden="true" />
          <div className="hero-art-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-image-wrap">
              {!heroImageFailed ? (
                <Image
                  src={memorial.heroPortraitUrl}
                  alt={`Celebration of life portrait of ${memorial.displayName}`}
                  fill
                  priority
                  sizes="(max-width: 800px) 70vw, 35vw"
                  className="hero-portrait"
                  onError={() => setHeroImageFailed(true)}
                />
              ) : (
                <div className="portrait-fallback">
                  <Cross size={30} strokeWidth={1} />
                  <span>IN LOVING MEMORY</span>
                  <strong>{memorial.displayName}</strong>
                  <small>Add the celebration portrait to public/images/memorial.</small>
                </div>
              )}
              <div className="portrait-vignette" />
            </div>

            <div className="portrait-corner corner-tl" />
            <div className="portrait-corner corner-tr" />
            <div className="portrait-corner corner-bl" />
            <div className="portrait-corner corner-br" />

            <div className="portrait-caption">
              <span className="portrait-caption-symbol">✧</span>
              <div>
                <span>FOREVER REMEMBERED</span>
                <strong>{memorial.displayName}</strong>
              </div>
              <Heart size={18} strokeWidth={1.2} />
            </div>
          </div>

          <div className="hero-art-caption">
            <span>✦</span>
            A LIFE THAT WILL ALWAYS MATTER
          </div>
        </div>

        <a className="hero-scroll-cue" href="#story">
          <span>SCROLL TO REMEMBER</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <section className="memorial-intro reveal" id="story">
        <div className="intro-decoration" aria-hidden="true">✧</div>
        <span className="eyebrow">
          <span className="eyebrow-line" />
          A LIFE · A LEGACY · A LOVE
          <span className="eyebrow-line" />
        </span>
        <h2>
          Some lives leave a mark
          <br />
          <em>that time cannot erase.</em>
        </h2>
        <p>
          We gather in faith and gratitude to remember {memorial.displayName},
          to celebrate the years that were given, and to hold close the
          stories, lessons and moments that made this life so meaningful.
        </p>
        <p>
          Through Scripture, song, prayer and shared memories, may this
          gathering bring comfort to the family and honour a life remembered
          with love.
        </p>
        <div className="intro-signoff">
          <span />
          <Heart size={15} />
          <span />
        </div>
      </section>

      <section className="memorial-timeline reveal">
        <div className="timeline-item">
          <span className="timeline-symbol">✧</span>
          <span className="timeline-label">BORN</span>
          <strong>{memorial.birthDate}</strong>
          <span className="timeline-note">The beginning of a life</span>
        </div>
        <div className="timeline-connector" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="timeline-item">
          <span className="timeline-symbol">♡</span>
          <span className="timeline-label">REMEMBERED</span>
          <strong>{memorial.displayName}</strong>
          <span className="timeline-note">A life held in our hearts</span>
        </div>
        <div className="timeline-connector" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="timeline-item">
          <span className="timeline-symbol">✦</span>
          <span className="timeline-label">ENTERED INTO GLORY</span>
          <strong>{memorial.entryIntoGloryDate}</strong>
          <span className="timeline-note">Resting in God's keeping</span>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span />
        <Cross size={17} strokeWidth={1.2} />
        <span />
      </div>

      <BookFolio />

      <section className="programme-shortcut">
        <div className="programme-shortcut-icon">
          <BookOpen size={22} strokeWidth={1.4} />
        </div>
        <div>
          <span>AN ACCESSIBLE ALTERNATIVE</span>
          <h3>Prefer a simple reading view?</h3>
          <p>
            Read every service item and hymn in a clean, accessible layout
            without the page-turn animation.
          </p>
        </div>
        <a href="/accessible-view" className="programme-shortcut-link">
          Read the programme
          <ArrowRight size={16} />
        </a>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span />
        <Heart size={17} strokeWidth={1.2} />
        <span />
      </div>

      <PhotoGallery />

      <div className="section-divider" aria-hidden="true">
        <span />
        <Heart size={17} strokeWidth={1.2} />
        <span />
      </div>

      <TributeWall />

      <section className="family-thanks" id="family-thanks">
        <div className="family-thanks-glow" aria-hidden="true" />
        <div className="family-thanks-inner">
          <div className="family-thanks-portrait">
            <Image
              src={memorial.closingPortraitUrl}
              alt={`A closing memorial portrait of ${memorial.displayName}`}
              fill
              sizes="(max-width: 800px) 80vw, 35vw"
              className="closing-portrait"
            />
            <span className="closing-portrait-frame" />
          </div>

          <div className="family-thanks-copy">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              WITH GRATEFUL HEARTS
            </span>
            <h2>
              Thank you
              <br />
              <em>for standing with us.</em>
            </h2>
            <p>{memorial.familyThankYouMessage}</p>
            <div className="family-thanks-signature">
              <span>With love,</span>
              <strong>{memorial.displayName}&apos;s Family</strong>
            </div>
            <div className="family-thanks-ornament" aria-hidden="true">
              ✧
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="footer-brand">
          <Cross size={19} strokeWidth={1.3} />
          <span>IN LOVING MEMORY</span>
        </a>
        <p>Remembered with love. Held in faith. Never forgotten.</p>
        <a href="/accessible-view">View the full programme</a>
        <span className="footer-copyright">
          A memorial created in honour of {memorial.displayName}.
        </span>
      </footer>
    </main>
  );
}
