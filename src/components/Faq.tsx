import { useState } from "react";
import { faqs } from "../content/guide";

export default function Faq() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">常見問題</span>
          <h2 className="section-title" id="faq-title">
            出發前最想問的幾件事
          </h2>
        </div>

        <div>
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <div key={f.id} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${f.id}`}
                  onClick={() => setOpen(isOpen ? null : f.id)}
                >
                  <span>{f.q}</span>
                  <svg
                    className="faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="faq-a" id={`faq-${f.id}`} role="region">
                  <div className="faq-a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
