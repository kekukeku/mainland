import { useState } from "react";
import { pitfalls } from "../content/guide";

export default function Pitfalls() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section
      className="section section-alt"
      id="pitfalls"
      aria-labelledby="pitfalls-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">踩雷避坑</span>
          <h2 className="section-title" id="pitfalls-title">
            新手最常踩的 8 個雷
          </h2>
          <p className="section-lead">
            點開每張卡看正確解法。遵守當地法律與平臺規範，避免傳播未核實或可能違法的內容。
          </p>
        </div>

        <div className="pitfall-grid">
          {pitfalls.map((p) => {
            const isOpen = !!open[p.id];
            return (
              <button
                key={p.id}
                type="button"
                className={`pitfall${isOpen ? " is-open" : ""}`}
                aria-expanded={isOpen}
                onClick={() => toggle(p.id)}
              >
                <span className="pitfall-stamp" aria-hidden="true">
                  雷
                </span>
                <span className="pitfall-myth">{p.myth}</span>
                <span className="pitfall-reveal">
                  <span className="pitfall-reveal-inner">
                    <span className="pitfall-fix">✓ {p.fix}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
