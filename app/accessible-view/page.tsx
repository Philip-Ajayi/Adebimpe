import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Church,
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
      {hymn.hymnNumber && (
        <span className="accessible-overline" style={{ display: "block", marginBottom: "4px" }}>
          {hymn.hymnNumber}
        </span>
      )}
      <h3>{hymn.titleEnglish}</h3>
      <p className="accessible-yoruba-title" lang="yo">
        {hymn.titleYoruba}
      </p>
      <p className="accessible-meta">
        Led by {hymn.anchoredBy} · {hymn.totalVerses} verses
        {hymn.hasChorus ? " · Chorus after verse" : ""}
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
    </article>
  );
}

function ServiceEntry({ item }: { item: ServiceItem }) {
  const descriptions: Record<string, string> = {
    call_to_worship:
      "The congregation is invited to worship and consecration before Almighty God.",
    prayer:
      "Prayer of Praise, Thanksgiving and Invocation led by the appointed minister.",
    biography:
      "The official reading of the life and legacy of the deceased.",
    favourite_songs:
      "The deceased's cherished hymns and songs, ministered by the family.",
    goodnight_bid:
      "Words of farewell as the church and community bid our member goodnight in faith.",
    scripture:
      "The reading of the Holy Scripture.",
    choir:
      "Choral anthem and ministration by the Sanctuary Choir.",
    message:
      "The sermon and ministration of the Word of God.",
    thanksgiving:
      "Congregational and family thanksgiving led by the ministers.",
    recognition:
      "Greetings and recognition of ministers, dignitaries, and guests by the Church Secretary.",
    appreciation:
      "Words of appreciation from the family.",
    benediction:
      "Closing prayer and benediction.",
    interment:
      "The committal and interment service at the graveside.",
  };

  return (
    <section className="accessible-service-entry">
      <div className="accessible-service-number">{item.order}</div>
      <div className="accessible-service-body">
        <h3>{item.title}</h3>
        {item.titleYoruba && (
          <p className="accessible-yoruba-title" lang="yo" style={{ fontSize: "16px", margin: "2px 0 8px" }}>
            {item.titleYoruba}
          </p>
        )}
        <p className="accessible-meta">Led by {item.anchor}</p>

        {item.hymnId ? (
          <HymnText id={item.hymnId} />
        ) : item.type === "biography" ? (
          <div className="accessible-placeholder" style={{ display: "grid", gap: "14px" }}>
            <div className="accessible-dates" style={{ justifyContent: "flex-start", margin: "8px 0" }}>
              <span><strong>Born:</strong> {memorial.birthDate}</span>
              <span>—</span>
              <span><strong>Entered into Glory:</strong> {memorial.entryIntoGloryDate}</span>
            </div>
            {memorial.biographyParagraphs.map((para, index) => (
              <p key={index} style={{ margin: 0, lineHeight: 1.75 }}>
                {para}
              </p>
            ))}
          </div>
        ) : item.type === "favourite_songs" ? (
          <div className="accessible-placeholder">
            {favouriteSongs.map((song) => (
              <section key={song.id} style={{ marginBottom: "26px" }}>
                <h4 style={{ fontSize: "20px", margin: "14px 0 4px", color: "#3a3832" }}>
                  {song.title}
                </h4>
                <p className="accessible-yoruba-title" lang="yo" style={{ fontSize: "17px", margin: "0 0 6px" }}>
                  {song.titleYoruba}
                </p>
                <p style={{ fontStyle: "italic", fontSize: "12px", color: "#7a7263", margin: "0 0 14px" }}>
                  {song.note}
                </p>

                {song.verses.map((verse) => (
                  <div key={verse.verseNumber} style={{ marginBottom: "16px" }}>
                    <h5 style={{ margin: "0 0 8px", fontSize: "11px", color: "#92713c" }}>
                      Verse {verse.verseNumber}
                    </h5>
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
      title: "Part III — At Home (Ìsìn ní Ilé)",
      items: memorial.servicePartThree,
    },
  ];

  return (
    <main className="accessible-document">
      <header className="accessible-header">
        <Link href="/" className="accessible-back">
          <ArrowLeft size={17} />
          Back to memorial experience
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
          Burial Service: {memorial.burialDate} · {memorial.churchName}, {memorial.churchLocation}
        </p>
        <p style={{ fontSize: "13px", color: "#6c6657", margin: "6px 0 0" }}>
          <strong>Minister in Charge:</strong> {memorial.ministerInCharge} &nbsp;|&nbsp;{" "}
          <strong>Church Secretary:</strong> {memorial.churchSecretary} &nbsp;|&nbsp;{" "}
          <strong>Choir Director:</strong> {memorial.choirDirector}
        </p>
      </div>

      <nav className="accessible-contents" aria-label="Programme contents">
        <h2><BookOpen size={17} /> Contents</h2>
        {parts.map((part) => (
          <a href={`#${part.id}`} key={part.id}>{part.title}</a>
        ))}
        <a href="#ministers">Officiating ministers</a>
        <a href="#hymn-collection">All Hymns</a>
        <a href="#tributes">Tributes</a>
        <a href="#family-thanks">Family appreciation</a>
      </nav>

      {parts.map((part) => (
        <section className="accessible-part" id={part.id} key={part.id}>
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
          <h2>All Hymns (English & Yorùbá)</h2>
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
          </article>
        ))}
      </section>

      <section className="accessible-part" id="family-thanks">
        <header className="accessible-part-heading">
          <span>FROM THE FAMILY</span>
          <h2>Thank You</h2>
        </header>
        <p style={{ lineHeight: 1.8, fontSize: "18px", color: "#444" }}>
          {memorial.familyThankYouMessage}
        </p>
      </section>

      <footer className="accessible-footer">
        <p>Remembered with love. Held in faith. Never forgotten.</p>
        <Link href="/">Return to the memorial experience</Link>
      </footer>
    </main>
  );
}