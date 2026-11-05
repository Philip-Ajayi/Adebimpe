"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  List,
  RotateCcw,
} from "lucide-react";
import {
  favouriteSongs,
  getHymn,
  hymns,
  memorial,
} from "@/lib/data/program-content";
import type { Hymn, ServiceItem, TributeItem } from "@/lib/types/liturgy";

type FolioPage = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

function HymnContent({ hymn }: { hymn: Hymn }) {
  return (
    <div className="hymn-content">
      <div className="hymn-title-block">
        <span className="folio-overline">
          {hymn.hymnNumber ? hymn.hymnNumber : "A HYMN OF FAITH"}
        </span>
        <h3>{hymn.titleEnglish}</h3>
        <p className="yoruba-title" lang="yo">
          {hymn.titleYoruba}
        </p>
        <span className="hymn-meta">
          Led by {hymn.anchoredBy} · {hymn.totalVerses} verses
          {hymn.hasChorus ? " · Chorus included" : ""}
        </span>
      </div>

      <div className="hymn-verses">
        {hymn.verses.map((verse) => (
          <section className="hymn-verse" key={verse.verseNumber}>
            <span className="verse-number">
              {String(verse.verseNumber).padStart(2, "0")}
            </span>

            <div className="verse-columns">
              <div>
                <span className="language-label">ENGLISH</span>
                {verse.englishLines.map((line, index) => (
                  <p key={`${verse.verseNumber}-en-${index}`}>{line}</p>
                ))}
              </div>

              <div lang="yo">
                <span className="language-label">ÈDÈ YORÙBÁ</span>
                {verse.yorubaLines.map((line, index) => (
                  <p key={`${verse.verseNumber}-yo-${index}`}>{line}</p>
                ))}
              </div>
            </div>

            {verse.englishChorus && verse.yorubaChorus && (
              <div className="chorus-block">
                <span className="language-label">CHORUS / ẸGBẸ́</span>
                <div className="verse-columns">
                  <div>
                    {verse.englishChorus.map((line, index) => (
                      <p key={`chorus-en-${index}`}>{line}</p>
                    ))}
                  </div>
                  <div lang="yo">
                    {verse.yorubaChorus.map((line, index) => (
                      <p key={`chorus-yo-${index}`}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

function ServiceContent({ item }: { item: ServiceItem }) {
  const descriptions: Record<string, string> = {
    call_to_worship:
      "The congregation is led in solemn consecration and invited into the reverent worship of Almighty God.",
    prayer:
      "Prayer of praise, thanksgiving, and invocation.",
    biography:
      "The formal reading of the life history and legacy of the deceased.",
    favourite_songs:
      "Hymns and cherished songs of the deceased.",
    goodnight_bid:
      "A quiet, tender moment as the church and community bid farewell in hope of the resurrection dawn.",
    scripture:
      "The reading of the Holy Scriptures.",
    choir:
      "A musical offering and anthem rendered by the Sanctuary Choir.",
    message:
      "The ministration of the Word of God.",
    thanksgiving:
      "Joyful thanksgiving.",
    recognition:
      "Greetings, recognition of family, visiting ministers, and guests.",
    appreciation:
      "Words of gratitude from the Adebimpe family to all who have supported in prayers and presence.",
    benediction:
      "The closing prayer and pronouncement of God's grace and blessings.",
    interment:
      "The committal, prayer, and final rites at the graveside.",
  };

  return (
    <div className="service-content">
      <span className="folio-overline">ORDER OF SERVICE · {item.order}</span>
      <div className="service-emblem" aria-hidden="true">
        {item.type === "scripture" ? "✦" : item.type === "message" ? "✝" : "❧"}
      </div>
      <h3 lang={item.titleYoruba ? "yo" : undefined}>
        {item.titleYoruba ?? item.title}
      </h3>
      <p>{descriptions[item.type] ?? "The service details will appear here."}</p>

      <div className="service-anchor">
        <span>LED BY</span>
        <strong>{item.anchor}</strong>
      </div>
    </div>
  );
}

function FlierContent() {
  return (
    <div className="service-content flier-content" style={{ padding: "4px 2px" }}>
      <span className="folio-overline">IN LOVING MEMORY</span>
      <h3 lang="yo" style={{ margin: "6px 0 10px" }}>Àwòrán Ìrántí Olóògbé</h3>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          height: "430px",
          margin: "0 auto",
          borderRadius: "4px",
          overflow: "hidden",
          border: "1px solid rgba(155, 120, 58, 0.35)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Image
          src="/images/memorial/flier.jpeg"
          alt="Celebration of Life Flier of Pa Bayo Emmanuel Adebimpe"
          fill
          sizes="(max-width: 800px) 90vw, 420px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function BiographyContent() {
  return (
    <div className="service-content biography-content" style={{ textAlign: "left" }}>
      <span className="folio-overline" style={{ textAlign: "center", display: "block" }}>
        A LIFE REMEMBERED · ÌTÀN ÌGBÉSÍ AYÉ OLÓÒGBÉ
      </span>
      <h3 style={{ textAlign: "center", marginBottom: "4px" }}>
        {memorial.fullName}
      </h3>
      <p style={{ textAlign: "center", color: "#877958", fontStyle: "italic", margin: "0 0 14px" }}>
        {memorial.displayName} (1951 — 2026)
      </p>

      <div className="biography-dates">
        <div>
          <span>BORN</span>
          <strong>{memorial.birthDate}</strong>
        </div>
        <div>
          <span>ENTERED INTO GLORY</span>
          <strong>{memorial.entryIntoGloryDate}</strong>
        </div>
      </div>

      <div style={{ display: "grid", gap: "10px", marginTop: "14px" }}>
        {memorial.biographyParagraphs.map((para, index) => {
          if (para.startsWith("•")) {
            return (
              <p
                key={index}
                style={{
                  margin: "0 0 0 14px",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  color: "#3a3832",
                }}
              >
                {para}
              </p>
            );
          }
          return (
            <p
              key={index}
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#3a3832",
                textIndent: index > 0 && !para.startsWith("In demonstrating") ? "1.2em" : "0",
              }}
            >
              {para}
            </p>
          );
        })}
      </div>
    </div>
  );
}

function FavouriteSongsContent() {
  return (
    <div className="service-content favourite-songs-content">
      <span className="folio-overline">SONGS HELD CLOSE</span>
      <h3 lang="yo">Àwọn Orin tí Olóògbé Fẹ́ràn</h3>
      <p className="folio-intro">
        Songs cherished by Pa Bayo Emmanuel Adebimpe throughout his pilgrimage of faith.
      </p>

      {favouriteSongs.map((song) => (
        <section className="favourite-song" key={song.id}>
          <h4>{song.title}</h4>
          <p className="yoruba-title" lang="yo" style={{ margin: "2px 0 6px" }}>
            {song.titleYoruba}
          </p>
          <p className="song-note">{song.note}</p>

          {song.verses.map((verse) => (
            <div className="hymn-verse" key={verse.verseNumber}>
              <span className="verse-number">
                {String(verse.verseNumber).padStart(2, "0")}
              </span>
              <div className="verse-columns">
                <div>
                  <span className="language-label">ENGLISH</span>
                  {verse.englishLines.map((line, index) => (
                    <p key={`fav-en-${index}`}>{line}</p>
                  ))}
                </div>
                <div lang="yo">
                  <span className="language-label">YORÙBÁ</span>
                  {verse.yorubaLines.map((line, index) => (
                    <p key={`fav-yo-${index}`}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function WifeTributeContent({ tribute }: { tribute: TributeItem }) {
  const paragraphs = tribute.bodyText.split("\n\n");

  return (
    <div className="service-content" style={{ textAlign: "left" }}>
      <span className="folio-overline" style={{ textAlign: "center", display: "block" }}>
        FROM THE BELOVED WIFE
      </span>
      <h3 lang="yo" style={{ textAlign: "center", marginBottom: "8px" }}>
        Ọ̀rọ̀ Ìrántí láti Ọwọ́ Ìyàwó Olùfẹ́
      </h3>
      <p style={{ textAlign: "center", color: "#877958", fontStyle: "italic", margin: "0 0 16px" }}>
        “My love, the father of my children, the head and face of the family...”
      </p>

      <div className="book-tribute-list" style={{ marginTop: "4px" }}>
        <blockquote style={{ padding: "16px 14px" }}>
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                margin: "0 0 10px",
                lineHeight: 1.68,
                fontSize: "13.5px",
                fontStyle: p.startsWith("“Fading") ? "italic" : "normal",
                color: p.startsWith("“Fading") ? "#705c3b" : "#444",
              }}
            >
              {p}
            </p>
          ))}
          <footer style={{ marginTop: "14px" }}>
            <strong style={{ fontSize: "17px" }}>{tribute.authorName}</strong>
            <span>{tribute.relationship}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

function TributeSpreadContent({
  tributesList,
  sectionHeading,
}: {
  tributesList: TributeItem[];
  sectionHeading: string;
}) {
  return (
    <div className="service-content">
      <span className="folio-overline">WORDS FROM THE HEART</span>
      <h3>{sectionHeading}</h3>
      <p>Words of remembrance honoring the memory of Pa Bayo Emmanuel Adebimpe.</p>

      <div className="book-tribute-list">
        {tributesList.map((tribute) => (
          <blockquote key={tribute.id}>
            <p style={{ whiteSpace: "pre-line" }}>“{tribute.bodyText}”</p>
            <footer>
              <strong>{tribute.authorName}</strong>
              <span>{tribute.relationship}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

function MinisterContent() {
  return (
    <div className="service-content">
      <span className="folio-overline">WITH GRATITUDE</span>
      <h3 lang="yo">Àwọn Ìránṣẹ́ Ọlọ́run Olùdarí</h3>
      <p>
        Ministers and leaders officiating at {memorial.churchName}, Oyediji-Monatan, Ibadan.
      </p>

      <div className="book-minister-list">
        {memorial.ministers.map((minister, index) => (
          <div key={minister.id} className="book-minister">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{minister.name}</strong>
              <p>{minister.ecclesiasticalTitle}</p>
              <p>{minister.church}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThankYouContent() {
  return (
    <div className="service-content thank-you-content">
      <span className="folio-overline">FROM THE FAMILY</span>
      <div className="service-emblem" aria-hidden="true">♡</div>
      <h3 lang="yo">Ọ̀rọ̀ Ìdúpẹ́ láti Ọwọ́ Ìdílé</h3>
      <p>{memorial.familyThankYouMessage}</p>
      <p className="thank-you-signature">With love and gratitude,</p>
      <p className="thank-you-name">The Adebimpe Family</p>
    </div>
  );
}

export default function BookFolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [turnDirection, setTurnDirection] = useState<"next" | "prev">("next");
  const [isTurning, setIsTurning] = useState(false);
  const [showIndex, setShowIndex] = useState(false);

  const pages = useMemo<FolioPage[]>(() => {
    const result: FolioPage[] = [
      {
        id: "welcome",
        eyebrow: "THE MEMORIAL FOLIO",
        title: "A Life Remembered",
        subtitle: "A celebration of life",
        content: (
          <div className="book-cover-inner">
            <div className="cover-ornament" aria-hidden="true">✧</div>
            <span className="cover-small-label">CELEBRATION OF LIFE</span>
            <h2>{memorial.displayName}</h2>
            <span className="cover-rule" />
            <p className="cover-full-name">{memorial.fullName}</p>
            <p className="cover-scripture">
              “The memory of the righteous is a blessing.”
            </p>
            <p className="cover-reference">PROVERBS 10:7</p>
            <div className="cover-dates">
              <span>{memorial.birthDate}</span>
              <span className="cover-date-dash">—</span>
              <span>{memorial.entryIntoGloryDate}</span>
            </div>
            <span className="cover-bottom-label">
              {memorial.churchName.toUpperCase()} · OYEDIJI-MONATAN, IBADAN
            </span>
          </div>
        ),
      },
      {
        id: "welcome-note",
        eyebrow: "A WORD OF WELCOME",
        title: "Gathered in Love",
        subtitle: `${memorial.churchName}, Oyediji-Monatan, Ibadan`,
        content: (
          <div className="service-content">
            <span className="folio-overline">WELCOME</span>
            <div className="service-emblem" aria-hidden="true">✧</div>
            <h3 lang="yo">Ìsìn Ìrántí àti Ìyìn</h3>
            <p>
              Today, family, church members, and friends assemble at{" "}
              <strong>{memorial.churchName}</strong>, Oyediji-Monatan, Ibadan,
              to celebrate the life of <strong>{memorial.fullName}</strong>.
            </p>
            <p style={{ fontSize: "14px", color: "#615746", lineHeight: 1.6 }}>
              <strong>Minister in Charge:</strong> {memorial.ministerInCharge}
              <br />
              <strong>Church Secretary:</strong> {memorial.churchSecretary}
              <br />
              <strong>Choir Director:</strong> {memorial.choirDirector}
            </p>
            <div className="service-anchor">
              <span>BURIAL SERVICE</span>
              <strong>{memorial.burialDate}</strong>
            </div>
          </div>
        ),
      },
      {
        id: "ministers",
        eyebrow: "THE OFFICIATING MINISTERS",
        title: "Those Who Lead Us",
        subtitle: "Ministers of the Gospel",
        content: <MinisterContent />,
      },
    ];

    const addService = (items: ServiceItem[], partTitle: string) => {
      for (const item of items) {
        const hymn = item.hymnId ? getHymn(item.hymnId) : undefined;
        const content = hymn ? (
          <HymnContent hymn={hymn} />
        ) : item.type === "biography" ? (
          <BiographyContent />
        ) : item.type === "favourite_songs" ? (
          <FavouriteSongsContent />
        ) : item.type === "flier" ? (
          <FlierContent />
        ) : (
          <ServiceContent item={item} />
        );

        result.push({
          id: item.id,
          eyebrow: partTitle,
          title: item.title,
          subtitle: item.type === "flier" ? "The Adebimpe Family" : `Led by ${item.anchor}`,
          content,
        });
      }
    };

    addService(memorial.servicePartOne, "PART I · THE MAIN SERVICE");

    result.push({
      id: "grave-divider",
      eyebrow: "PART II",
      title: "At the Grave",
      subtitle: "Committal and final rites",
      content: (
        <div className="book-cover-inner section-divider-inner">
          <div className="cover-ornament" aria-hidden="true">✧</div>
          <span className="cover-small-label">PART TWO</span>
          <h2 lang="yo">Ní Ìtẹ́</h2>
          <span className="cover-rule" />
          <p className="cover-scripture">
            “For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.”
          </p>
          <p className="cover-reference">1 THESSALONIANS 4:14</p>
        </div>
      ),
    });

    addService(memorial.servicePartTwo, "PART II · AT THE GRAVE");

    result.push({
      id: "home-divider",
      eyebrow: "PART III",
      title: "At Home",
      subtitle: "Ìsìn ní Ilé",
      content: (
        <div className="book-cover-inner section-divider-inner">
          <div className="cover-ornament" aria-hidden="true">✧</div>
          <span className="cover-small-label">PART THREE</span>
          <h2 lang="yo">Ìsìn ní Ilé</h2>
          <span className="cover-rule" />
          <p className="cover-scripture">
            May peace, fellowship, and divine comfort abide upon every heart and home.
          </p>
        </div>
      ),
    });

    addService(memorial.servicePartThree, "PART III · AT HOME");

    // 1. Wife Tribute Spread
    result.push({
      id: "tribute-wife",
      eyebrow: "TRIBUTE · FROM THE WIFE",
      title: "My Lovely Husband",
      subtitle: "Deaconess Alice Oyebisi Adebimpe",
      content: <WifeTributeContent tribute={memorial.tributes[0]} />,
    });

    // 2. Children Tributes spread 1
    result.push({
      id: "tributes-children-1",
      eyebrow: "TRIBUTES · FROM THE CHILDREN",
      title: "Beloved Father",
      subtitle: "Cherished memories from sons and daughters (Part I)",
      content: (
        <TributeSpreadContent
          sectionHeading="From the Children"
          tributesList={memorial.tributes.slice(1, 4)}
        />
      ),
    });

    // 3. Children Tributes spread 2
    result.push({
      id: "tributes-children-2",
      eyebrow: "TRIBUTES · FROM THE CHILDREN",
      title: "Treasured Memories",
      subtitle: "Cherished memories from sons and daughters (Part II)",
      content: (
        <TributeSpreadContent
          sectionHeading="From the Children"
          tributesList={memorial.tributes.slice(4, 6)}
        />
      ),
    });

    // 4. Siblings Tributes spread
    result.push({
      id: "tributes-siblings",
      eyebrow: "TRIBUTES · FROM SIBLINGS",
      title: "Special Brother",
      subtitle: "Words of love from brothers and sisters",
      content: (
        <TributeSpreadContent
          sectionHeading="From the Siblings"
          tributesList={memorial.tributes.slice(6, 9)}
        />
      ),
    });

    // 5. Fellowship & Church Tributes spread
    result.push({
      id: "tributes-community",
      eyebrow: "TRIBUTES · FELLOWSHIP & CHURCH",
      title: "A Life in Service",
      subtitle: "From brethren and community",
      content: (
        <TributeSpreadContent
          sectionHeading="Fellowship & Church"
          tributesList={memorial.tributes.slice(9)}
        />
      ),
    });

    result.push(
      {
        id: "hymn-index",
        eyebrow: "THE HYMN COLLECTION",
        title: "Hymns of Faith",
        subtitle: "All hymns for the service",
        content: (
          <div className="service-content">
            <span className="folio-overline">THE HYMN COLLECTION</span>
            <h3 lang="yo">Àkójọpọ̀ Àwọn Orin Ìsìn</h3>
            <div className="hymn-index-list">
              {hymns.map((hymn, index) => (
                <div key={hymn.id} className="hymn-index-entry">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>
                      {hymn.hymnNumber ? `${hymn.hymnNumber} · ` : ""}
                      {hymn.titleEnglish}
                    </strong>
                    <p lang="yo">{hymn.titleYoruba}</p>
                    <small>
                      {hymn.totalVerses} verses · Led by {hymn.anchoredBy}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "final-thanks",
        eyebrow: "WITH GRATITUDE",
        title: "Thank You",
        subtitle: "From the Adebimpe Family",
        content: <ThankYouContent />,
      },
    );

    return result;
  }, []);

  const lastPage = pages.length - 1;

  const turnTo = useCallback(
    (nextPage: number) => {
      if (isTurning || nextPage < 0 || nextPage > lastPage || nextPage === currentPage) {
        return;
      }

      setTurnDirection(nextPage > currentPage ? "next" : "prev");
      setIsTurning(true);

      window.setTimeout(() => {
        setCurrentPage(nextPage);
        setIsTurning(false);
      }, 420);
    },
    [currentPage, isTurning, lastPage],
  );

  const nextPage = useCallback(() => {
    turnTo(Math.min(currentPage + 1, lastPage));
  }, [currentPage, lastPage, turnTo]);

  const previousPage = useCallback(() => {
    turnTo(Math.max(currentPage - 1, 0));
  }, [currentPage, turnTo]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight") nextPage();
      if (event.key === "ArrowLeft") previousPage();
      if (event.key === "Escape") setShowIndex(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, previousPage]);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const active = pages[currentPage];

  return (
    <section className="folio-section" id="book" aria-label="Interactive memorial book">
      <div className="folio-heading">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          THE MEMORIAL FOLIO
          <span className="eyebrow-line" />
        </span>
        <h2>A story held <em>in every page.</em></h2>
        <p>
          Turn the pages to follow the service at {memorial.churchName}, read the bilingual hymns, and share in this celebration of life.
        </p>
      </div>

      <div className="folio-stage">
        <div className="book-ambient-glow" aria-hidden="true" />

        <div
          className={`book-shell ${isTurning ? `is-turning turn-${turnDirection}` : ""}`}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStart === null) return;
            const delta = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;

            if (delta < -45) nextPage();
            if (delta > 45) previousPage();

            setTouchStart(null);
          }}
          aria-live="polite"
        >
          <div className="book-back-cover" aria-hidden="true" />

          <div className="book-pages-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <article className="book-page" key={active.id}>
            <div className="page-inner">
              <div className="page-topline">
                <span>✧</span>
                <span>{active.eyebrow}</span>
                <span>✧</span>
              </div>

              <div className="page-heading">
                <h3>{active.title}</h3>
                <p>{active.subtitle}</p>
              </div>

              <div className="page-content">{active.content}</div>

              <div className="page-footer">
                <span>IN LOVING MEMORY OF {memorial.displayName.toUpperCase()}</span>
                <span className="page-number">
                  {String(currentPage + 1).padStart(2, "0")}
                  <i> / </i>
                  {String(pages.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>

          <div className="book-spine" aria-hidden="true">
            <span>✧</span>
          </div>
        </div>

        <div className="folio-controls">
          <button
            className="folio-arrow"
            onClick={previousPage}
            disabled={currentPage === 0 || isTurning}
            aria-label="Previous page"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="folio-progress">
            <div className="folio-progress-label">
              <span>PAGE</span>
              <strong>{String(currentPage + 1).padStart(2, "0")}</strong>
              <span>OF {String(pages.length).padStart(2, "0")}</span>
            </div>
            <div
              className="folio-progress-track"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={pages.length}
              aria-valuenow={currentPage + 1}
              aria-label="Book reading progress"
            >
              <span style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }} />
            </div>
          </div>

          <button
            className="folio-arrow"
            onClick={nextPage}
            disabled={currentPage === lastPage || isTurning}
            aria-label="Next page"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="folio-secondary-controls">
          <button
            className="folio-text-button"
            onClick={() => setShowIndex((value) => !value)}
            aria-expanded={showIndex}
          >
            <List size={15} />
            {showIndex ? "Close contents" : "Browse contents"}
          </button>
          <span className="control-separator" />
          <button
            className="folio-text-button"
            onClick={() => turnTo(0)}
            disabled={currentPage === 0 || isTurning}
          >
            <RotateCcw size={14} />
            Start again
          </button>
        </div>

        {showIndex && (
          <div className="chapter-index">
            <div className="chapter-index-heading">
              <BookOpen size={17} />
              <div>
                <strong>Contents</strong>
                <span>Choose a service page</span>
              </div>
            </div>

            {pages.map((page, index) => (
              <button
                key={page.id}
                className={`chapter-index-item ${index === currentPage ? "active" : ""}`}
                onClick={() => {
                  turnTo(index);
                  setShowIndex(false);
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{page.title}</span>
                {index === currentPage && <i aria-hidden="true">●</i>}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="folio-hint">
        <span aria-hidden="true">↔</span>
        Use the arrows, swipe on mobile, or press keyboard arrow keys.
      </p>
    </section>
  );
}