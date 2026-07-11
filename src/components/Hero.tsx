import { passCards } from "../content/guide";
import { LAST_CHECKED } from "../content/sources";

interface HeroProps {
  onOpenSos: () => void;
}

export default function Hero({ onOpenSos }: HeroProps) {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <p className="hero-stamp">資料最後查核：{LAST_CHECKED}</p>
        <h1>首次赴陸就內行 —— 臺灣人的一頁聖經</h1>
        <p className="hero-sub">
          證件、網路、APP、住宿、交通，一頁準備到能出發。
          <br />
          別急著規劃景點和必吃美食，先搞定這 5 件事！
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#checklist">
            開始 30 天倒數檢查
          </a>
          <button className="btn btn-ghost" type="button" onClick={onOpenSos}>
            我已經在當地，查看緊急備援
          </button>
        </div>

        <ul className="pass-cards" aria-label="行前五大通關卡">
          {passCards.map((card) => (
            <li key={card.id}>
              <a className="pass-card" href={card.target}>
                <span className="pass-card-icon" aria-hidden="true">
                  {card.icon}
                </span>
                <span className="pass-card-num">{card.num}</span>
                <span className="pass-card-title">{card.title}</span>
                <span className="pass-card-desc">{card.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
