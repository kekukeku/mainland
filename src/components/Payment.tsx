import { useState } from "react";
import {
  paymentFailSteps,
  paymentNote,
  paymentTiers,
} from "../content/guide";
import { useInView } from "../hooks";

export default function Payment() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      className="section section-alt"
      id="payment"
      aria-labelledby="payment-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">支付</span>
          <h2 className="section-title" id="payment-title">
            主力＋副手＋實體備援
          </h2>
          <p className="section-lead">
            三層支付防線，任何一環失效都還能繼續消費。全部在出發前設定並小額測試。
          </p>
        </div>

        <div className="payment-deck" ref={ref}>
          {paymentTiers.map((tier) => (
            <article
              key={tier.id}
              className={`pay-card ${tier.variant}${inView ? " is-in" : ""}`}
            >
              <div>
                <span className="pay-card-chip" aria-hidden="true" />
                <p className="pay-tier" style={{ marginTop: "0.9rem" }}>
                  {tier.tier}
                </p>
                <p className="pay-name">{tier.name}</p>
                <p className="pay-role">{tier.role}</p>
              </div>
              <div className="pay-steps">
                {tier.steps.map((s, i) => (
                  <span key={i}>· {s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flip-wrap">
          <div className={`flip-card${flipped ? " is-flipped" : ""}`}>
            <div className="flip-face flip-front">
              <h3 className="app-card-name">付款失敗怎麼辦？</h3>
              <p className="app-card-purpose">
                手機沒電、斷網、帳號風控或飯店要押金時，照這四步驟排查，別慌。
              </p>
              <button
                className="btn btn-primary"
                type="button"
                aria-expanded={flipped}
                onClick={() => setFlipped(true)}
              >
                看排查四步驟
              </button>
            </div>
            <div className="flip-face flip-back" aria-hidden={!flipped}>
              <h3 className="app-card-name">付款失敗排查四步驟</h3>
              <div className="flip-steps">
                {paymentFailSteps.map((step, i) => (
                  <div className="flip-step" key={i}>
                    <span className="flip-step-num">{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <button
                className="btn btn-ghost"
                type="button"
                style={{ marginTop: "1rem" }}
                onClick={() => setFlipped(false)}
              >
                翻回正面
              </button>
            </div>
          </div>
        </div>

        {paymentNote && <p className="note-box">{paymentNote}</p>}
      </div>
    </section>
  );
}
