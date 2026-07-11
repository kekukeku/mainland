import { useState } from "react";
import {
  networkConclusion,
  networkPlans,
  networkScenarios,
} from "../content/guide";

export default function DecisionTable() {
  const [scenario, setScenario] = useState(networkScenarios[0]);

  const recommended = scenario.recommend;

  return (
    <section className="section" id="network" aria-labelledby="network-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">網路決策器</span>
          <h2 className="section-title" id="network-title" style={{ textWrap: "balance" }}>
            我需要當地號碼嗎？
          </h2>
          <p className="section-lead">
            先選一個最接近你的情境，下面會幫你把最合適的方案高亮起來。
          </p>
        </div>

        <div className="scenario-tabs" role="tablist" aria-label="旅行情境">
          {networkScenarios.map((s) => (
            <button
              key={s.id}
              role="tab"
              type="button"
              aria-selected={scenario.id === s.id}
              className={`scenario-tab${scenario.id === s.id ? " is-active" : ""}`}
              onClick={() => setScenario(s)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="matrix-table-wrap card" style={{ padding: 0 }}>
          <table className="matrix">
            <thead>
              <tr>
                <th scope="col">方案</th>
                <th scope="col">適合誰</th>
                <th scope="col">優點</th>
                <th scope="col">風險／限制</th>
              </tr>
            </thead>
            <tbody>
              {networkPlans.map((plan) => {
                const hl = plan.id === recommended;
                return (
                  <tr
                    key={plan.id}
                    className={`matrix-row${hl ? " is-highlight" : " is-dim"}`}
                  >
                    <td>
                      <span className="matrix-plan-name">{plan.name}</span>
                    </td>
                    <td>{plan.fit}</td>
                    <td>{plan.pros}</td>
                    <td>{plan.cons}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="matrix-cards" aria-hidden={false}>
          {networkPlans.map((plan) => {
            const hl = plan.id === recommended;
            return (
              <dl
                key={plan.id}
                className={`matrix-card${hl ? " is-highlight" : " is-dim"}`}
              >
                <dt style={{ marginTop: 0 }}>方案</dt>
                <dd className="matrix-plan-name">
                  {plan.name}
                </dd>
                <dt>適合誰</dt>
                <dd>{plan.fit}</dd>
                <dt>優點</dt>
                <dd>{plan.pros}</dd>
                <dt>風險／限制</dt>
                <dd>{plan.cons}</dd>
              </dl>
            );
          })}
        </div>
        <p className="matrix-conclusion">{networkConclusion}</p>
      </div>
    </section>
  );
}
