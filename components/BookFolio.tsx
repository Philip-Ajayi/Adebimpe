"use client";

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
import type { Hymn, ServiceItem } from "@/lib/types/liturgy";

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
        <span className="folio-overline">A HYMN OF FAITH</span>
        <h3>{hymn.titleEnglish}</h3>
        <p className="yoruba-title" lang="yo">
          {hymn.titleYoruba}
        </p>
        <span className="hymn-meta">
          {hymn.totalVerses} verses
          {hymn.hasChorus ? " · With chorus" : ""}
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
                <span className="language-label">CHORUS / ẸGBẸ</span>
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

      {!hymn.isConfirmed && (
        <p className="mock-note">
          Demonstration lyrics · Replace with the approved hymn text.
        </p>
      )}
    </div>
  );
}

function ServiceContent({ item }: { item: ServiceItem }) {
  const descriptions: Record<string, string> = {
    call_to_worship:
      "The congregation is invited to worship together in reverence, gratitude and hope.",
    prayer:
      "A time to pray together, give thanks and seek God's comfort and guidance.",
    biography:
      "The story of a life: family, faith, memories and the legacy left behind.",
    favourite_songs:
      "Songs cherished by the deceased, to be shared by the family.",
    goodnight_bid:
      "A quiet moment of remembrance as the church bids farewell to a beloved member.",
    scripture:
      "The selected Scripture passage will be displayed here once confirmed.",
    choir:
      "A musical offering from the choir.",
    thanksgiving:
      "The congregation joins in thanksgiving.",
    recognition:
      "Greetings and recognition of family members, ministers and guests.",
    appreciation:
      "Words of appreciation from the family.",
    benediction:
      "A closing prayer for peace, comfort and God's continued guidance.",
    interment:
      "The committal and interment service.",
  };

  return (
    <div className="service-content">
      <span className="folio-overline">ORDER OF SERVICE · {item.order}</span>
      <div className="service-emblem" aria-hidden="true">
        {item.type === "scripture" ? "✦" : "❧"}
      </div>
      <h3>{item.title}</h3>
      <p>{descriptions[item.type] ?? "The service details will appear here."}</p>

      <div className="service-anchor">
        <span>LED BY</span>
        <strong>{item.anchor}</strong>
      </div>

      {!item.isConfirmed && (
        <p className="mock-note">
          Programme detail awaiting confirmation.
        </p>
      )}
    </div>
  );
}

function BiographyContent() {
  return (
    <div className="service-content biography-content">
      <span className="folio-overline">A LIFE REMEMBERED</span>
      <h3>A Life of Meaning</h3>
      <p>
        A life story is best told by the people who shared it. This page is
        reserved for the approved biography of {memorial.displayName},
        including family history, faith, milestones and treasured memories.
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
      <p className="mock-note">
        Add the family's verified biography before publishing.
      </p>
    </div>
  );
}

function FavouriteSongsContent() {
  return (
    <div className="service-content favourite-songs-content">
      <span className="folio-overline">SONGS HELD CLOSE</span>
      <h3>Favourite Songs</h3>
      <p className="folio-intro">
        Songs selected by the family, presented one line at a time.
      </p>

      {favouriteSongs.map((song) => (
        <section className="favourite-song" key={song.id}>
          <h4>{song.title}</h4>
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

      <p className="mock-note">
        All song titles and lyrics must be checked and approved by the family.
      </p>
    </div>
  );
}

function TributeContent() {
  return (
    <div className="service-content">
      <span className="folio-overline">WORDS FROM THE HEART</span>
      <h3>Tributes</h3>
      <p>
        Family and friends are invited to remember a life through their own
        words and shared experiences.
      </p>

      <div className="book-tribute-list">
        {memorial.tributes.map((tribute) => (
          <blockquote key={tribute.id}>
            <p>“{tribute.bodyText}”</p>
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
      <h3>Officiating Ministers</h3>
      <p>
        We acknowledge the ministers who will lead the service and support
        the family in worship and prayer.
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
      <p className="mock-note">Minister names and churches are placeholders.</p>
    </div>
  );
}

function ThankYouContent() {
  return (
    <div className="service-content thank-you-content">
      <span className="folio-overline">FROM THE FAMILY</span>
      <div className="service-emblem" aria-hidden="true">♡</div>
      <h3>Thank You</h3>
      <p>{memorial.familyThankYouMessage}</p>
      <p className="thank-you-signature">With love and gratitude</p>
      <p className="thank-you-name">{memorial.displayName}’s Family</p>
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
            <span className="cover-bottom-label">A LIFE · A LEGACY · A LOVE</span>
          </div>
        ),
      },
      {
        id: "welcome-note",
        eyebrow: "A WORD OF WELCOME",
        title: "Gathered in Love",
        subtitle: "A moment of remembrance",
        content: (
          <div className="service-content">
            <span className="folio-overline">WELCOME</span>
            <div className="service-emblem" aria-hidden="true">✧</div>
            <h3>A Gathering of Gratitude</h3>
            <p>
              Today, family, friends and the church come together to give
              thanks for a life shared, to honour cherished memories, and to
              find comfort in faith and one another.
            </p>
            <p>
              May every hymn, prayer and word of remembrance bring peace to
              those who mourn and honour the life we celebrate.
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
        subtitle: "A ministry of faith and service",
        content: <MinisterContent />,
      },
    ];

    const addService = (items: ServiceItem[], partTitle: string) => {
      for (const item of items) {
        const hymn = item.hymnId ? getHymn(item.hymnId) : undefined;
        const content = hymn
          ? <HymnContent hymn={hymn} />
          : item.type === "biography"
            ? <BiographyContent />
            : item.type === "favourite_songs"
              ? <FavouriteSongsContent />
              : <ServiceContent item={item} />;

        result.push({
          id: item.id,
          eyebrow: partTitle,
          title: item.title,
          subtitle: `Led by ${item.anchor}`,
          content,
        });
      }
    };

    addService(memorial.servicePartOne, "PART I · THE MAIN SERVICE");

    result.push({
      id: "grave-divider",
      eyebrow: "PART II",
      title: "At the Grave",
      subtitle: "A final act of love and committal",
      content: (
        <div className="book-cover-inner section-divider-inner">
          <div className="cover-ornament" aria-hidden="true">✧</div>
          <span className="cover-small-label">PART TWO</span>
          <h2>At the Grave</h2>
          <span className="cover-rule" />
          <p className="cover-scripture">
            In faith, in hope, and in the peace of God.
          </p>
        </div>
      ),
    });

    addService(memorial.servicePartTwo, "PART II · AT THE GRAVE");

    result.push({
      id: "home-divider",
      eyebrow: "PART III",
      title: "At Home",
      subtitle: "Family gathering and prayer",
      content: (
        <div className="book-cover-inner section-divider-inner">
          <div className="cover-ornament" aria-hidden="true">✧</div>
          <span className="cover-small-label">PART THREE</span>
          <h2>At Home</h2>
          <span className="cover-rule" />
          <p className="cover-scripture">
            May peace rest upon every heart and every home.
          </p>
        </div>
      ),
    });

    addService(memorial.servicePartThree, "PART III · AT HOME");

    result.push(
      {
        id: "tributes",
        eyebrow: "TRIBUTES",
        title: "Words of Remembrance",
        subtitle: "Memories that remain",
        content: <TributeContent />,
      },
      {
        id: "hymn-index",
        eyebrow: "THE HYMN COLLECTION",
        title: "Hymns of Faith",
        subtitle: "The complete hymn collection",
        content: (
          <div className="service-content">
            <span className="folio-overline">THE HYMN COLLECTION</span>
            <h3>Hymns for the Journey</h3>
            <div className="hymn-index-list">
              {hymns.map((hymn, index) => (
                <div key={hymn.id} className="hymn-index-entry">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{hymn.titleEnglish}</strong>
                    <p lang="yo">{hymn.titleYoruba}</p>
                    <small>
                      {hymn.totalVerses} verses
                      {hymn.hasChorus ? " · Chorus included" : ""}
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
        subtitle: "From the family",
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
          Turn the pages to follow the service, read the hymns and share in
          this celebration of life.
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

              <div className="page-content">
                {active.content}
              </div>

              <div className="page-footer">
                <span>IN LOVING MEMORY</span>
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
                <span>Choose a page to read</span>
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
        Use the arrows, swipe on mobile, or press your keyboard arrow keys.
      </p>
    </section>
  );
}
