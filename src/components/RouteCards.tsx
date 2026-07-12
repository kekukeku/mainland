import { routeCards } from "../content/guide";

export default function RouteCards() {
  return (
    <section className="section bg-birds-flowers" id="routes" aria-labelledby="routes-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">第一次去哪裡</span>
          <h2 className="section-title" id="routes-title">
            依旅行人格選，不做硬排名
          </h2>
          <p className="section-lead">
            左右滑動看六種路線。航班容易變動，這裡只給方向，實際班次請查航空公司與機場。
          </p>
        </div>

        <div className="route-scroll" role="list" aria-label="路線建議">
          {routeCards.map((r) => (
            <article className="route-card" key={r.id} role="listitem">
              <span className="route-tag">{r.tag}</span>
              <h3 className="route-name">{r.name}</h3>
              <p className="route-days">建議 {r.days}</p>
              <p className="route-desc">{r.desc}</p>
              <dl className="route-attrs">
                <dt>適合誰</dt>
                <dd>{r.who}</dd>
                <dt>體力</dt>
                <dd>{r.stamina}</dd>
                <dt>建議天數</dt>
                <dd>{r.days}</dd>
                <dt>交通難度</dt>
                <dd>{r.transport}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
