import { Heart, Quote } from "lucide-react";
import { memorial } from "@/lib/data/program-content";

export default function TributeWall() {
  return (
    <section className="tributes-section" id="tributes">
      <div className="section-heading">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          WORDS FROM THE HEART
        </span>
        <h2>Love leaves <em>its own legacy.</em></h2>
        <p>
          A collection of words remembering a life, the moments we shared
          and the love that remains.
        </p>
      </div>

      <div className="tribute-grid">
        {memorial.tributes.map((tribute, index) => (
          <article
            className={`tribute-card tribute-card-${(index % 3) + 1}`}
            key={tribute.id}
          >
            <div className="tribute-card-top">
              <span className="tribute-quote-icon">
                <Quote size={18} />
              </span>
              <span className="tribute-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <blockquote>“{tribute.bodyText}”</blockquote>

            <div className="tribute-card-footer">
              <div className="tribute-author-mark" aria-hidden="true">
                {tribute.authorName.charAt(0)}
              </div>
              <div>
                <strong>{tribute.authorName}</strong>
                <span>{tribute.relationship}</span>
              </div>
              <Heart
                className="tribute-heart"
                size={17}
                aria-hidden="true"
              />
            </div>

            {tribute.isMock && (
              <span className="tribute-preview-label">
                PREVIEW · REPLACE WITH APPROVED TRIBUTE
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
