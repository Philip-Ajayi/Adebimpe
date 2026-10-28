import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Cross,
} from "lucide-react";
import {
  favouriteSongs,
  getHymn,
  hymns,
  memorial,
} from "@/lib/data/program-content";
import type { ServiceItem } from "@/lib/types/liturgy";

function HymnText({ id }: { id: string }) {
  const hymn = getHymn(id);

  if (!hymn) return null;

  return (
    <article className="accessible-hymn">
      <h3>{hymn.titleEnglish}</h3>
      <p className="accessible-yoruba-title" lang="yo">
        {hymn.titleYoruba}
      </p>
      <p className="accessible-meta">
        Led by {hymn.anchoredBy} · {hymn.totalVerses} verses
        {hymn.hasChorus ? " · Chorus after each verse" : ""}
      </p>

      {hymn.verses.map((verse) => (
        <section className="accessible-verse" key={verse.verseNumber}>
          <h4>Verse {verse.verseNumber}</h4>
          <div className="accessible-language-columns">
            <div>
              <h5>English</h5>
              {verse.englishLines.map((line, index) => (
                <p key={`en-${index}`}>{line}</p>
              ))}
            </div>
            <div lang="yo">
              <h5>Yorùbá</h5>
              {verse.yorubaLines.map((line, index) => (
                <p key={`yo-${index}`}>{line}</p>
              ))}
            </div>
          </div>

          {verse.englishChorus && verse.yorubaChorus && (
            <div className="accessible-chorus">
              <h5>Chorus / Ẹgbẹ́</h5>
              <div className="accessible-language-columns">
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

      {!hymn.isConfirmed && (
        <p className="accessible-mock-note">
          Sample lyrics for layout testing. Replace with approved lyrics
          before the event.
        </p>
      )}
    </article>
  );
}

function ServiceEntry({ item }: { item: ServiceItem }) {
  const descriptions: Record<string, string> = {
    call_to_worship:
      "The congregation is invited to worship together.",
    prayer:
      "Prayer text to be supplied by the appointed leader.",
    biography:
      "Insert the verified biography and life story of the deceased.",
    favourite_songs:
      "The family will supply the deceased's actual favourite songs and lyrics.",
    goodnight_bid:
      "Insert the approved words for the farewell.",
    scripture:
      "Scripture reference and reading to be confirmed.",
    choir:
      "Choir ministration details to be confirmed.",
    thanksgiving:
      "Thanksgiving led by the appointed leader.",
    recognition:
      "Greetings and recognition of ministers, family and guests.",
    appreciation:
      "Words of appreciation from the family.",
    benediction:
      "Closing prayer and benediction.",
    interment:
      "Interment and committal service.",
  };

  return (
    <section className="accessible-service-entry">
      <div className="accessible-service-number">{item.order}</div>
      <div className="accessible-service-body">
        <h3>{item.title}</h3>
        <p className="accessible-meta">Led by {item.anchor}</p>
        {item.hymnId ? (
          <HymnText id={item.hymnId} />
        ) : item.type === "biography" ? (
          <div className="accessible-placeholder">
            <p>
              The biography will include family history, important
              milestones, faith, cherished memories and the legacy of{" "}
              {memorial.displayName}.
            </p>
            <p>
              Born {memorial.birthDate}. Entered into glory{" "}
              {memorial.entryIntoGloryDate}.
            </p>
          </div>
        ) : item.type === "favourite_songs" ? (
          <div className="accessible-placeholder">
            {favouriteSongs.map((song) => (
              <section key={song.id}>
                <h4>{song.title}</h4>
                <p>{song.note}</p>
                {song.verses.map((verse) => (
                  <div key={verse.verseNumber}>
                    <h5>Verse {verse.verseNumber}</h5>
                    <div className="accessible-language-columns">
                      <div>
                        <h5>English</h5>
                        {verse.englishLines.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <div lang="yo">
                        <h5>Yorùbá</h5>
                        {verse.yorubaLines.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        ) : (
          <p className="accessible-placeholder">{descriptions[item.type]}</p>
        )}
      </div>
    </section>
  );
}

export default function AccessibleViewPage() {
  const parts = [
    {
      id: "part-one",
      title: "Part I — The Main Service",
      items: memorial.servicePartOne,
    },
    {
      id: "part-two",
      title: "Part II — At the Grave",
      items: memorial.servicePartTwo,
    },
    {
      id: "part-three",
      title: "Part III — At Home",
      items: memorial.servicePartThree,
    },
  ];

  return (
    <main className="accessible-document">
      <header className="accessible-header">
        <Link href="/" className="accessible-back">
          <ArrowLeft size={17} />
          Back to memorial
        </Link>
        <span className="accessible-brand">
          <Cross size={17} />
          THE MEMORIAL FOLIO
        </span>
      </header>

      <div className="accessible-title-block">
        <span className="accessible-overline">CELEBRATION OF LIFE</span>
        <h1>In Loving Memory of {memorial.displayName}</h1>
        <p className="accessible-full-name">{memorial.fullName}</p>
        <div className="accessible-dates">
          <CalendarDays size={17} />
          <span>{memorial.birthDate}</span>
          <span>—</span>
          <span>{memorial.entryIntoGloryDate}</span>
        </div>
        <p className="accessible-burial-date">
          Burial service: {memorial.burialDate}
        </p>
        <p className="accessible-intro">
          This is the text edition of the memorial programme. It is designed
          for easy reading, searching and printing.
        </p>
      </div>

      <nav className="accessible-contents" aria-label="Programme contents">
        <h2><BookOpen size={17} /> Contents</h2>
        {parts.map((part) => (
          <a href={`#${part.id}`} key={part.id}>{part.title}</a>
        ))}
        <a href="#ministers">Officiating ministers</a>
        <a href="#tributes">Tributes</a>
        <a href="#family-thanks">Family appreciation</a>
      </nav>

      {parts.map((part) => (
        <section
          className="accessible-part"
          id={part.id}
          key={part.id}
        >
          <header className="accessible-part-heading">
            <span>THE ORDER OF SERVICE</span>
            <h2>{part.title}</h2>
          </header>
          {part.items.map((item) => (
            <ServiceEntry item={item} key={item.id} />
          ))}
        </section>
      ))}

      <section className="accessible-part" id="ministers">
        <header className="accessible-part-heading">
          <span>WITH GRATITUDE</span>
          <h2>Officiating Ministers</h2>
        </header>
        <div className="accessible-ministers">
          {memorial.ministers.map((minister, index) => (
            <article key={minister.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{minister.name}</h3>
                <p>{minister.ecclesiasticalTitle}</p>
                <p>{minister.church}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="accessible-part" id="hymn-collection">
        <header className="accessible-part-heading">
          <span>THE HYMN COLLECTION</span>
          <h2>All Hymns</h2>
        </header>
        {hymns.map((hymn) => (
          <HymnText key={hymn.id} id={hymn.id} />
        ))}
      </section>

      <section className="accessible-part" id="tributes">
        <header className="accessible-part-heading">
          <span>WORDS FROM THE HEART</span>
          <h2>Tributes</h2>
        </header>
        {memorial.tributes.map((tribute) => (
          <article className="accessible-tribute" key={tribute.id}>
            <h3>{tribute.authorName}</h3>
            <p className="accessible-meta">{tribute.relationship}</p>
            <p>{tribute.bodyText}</p>
            {tribute.isMock && (
              <p className="accessible-mock-note">
                Demonstration text — replace with the approved tribute.
              </p>
            )}
          </article>
        ))}
      </section>

      <section className="accessible-part" id="family-thanks">
        <header className="accessible-part-heading">
          <span>FROM THE FAMILY</span>
          <h2>Thank You</h2>
        </header>
        <p>{memorial.familyThankYouMessage}</p>
      </section>

      <footer className="accessible-footer">
        <p>Remembered with love. Held in faith. Never forgotten.</p>
        <Link href="/">Return to the memorial experience</Link>
      </footer>
    </main>
  );
}
