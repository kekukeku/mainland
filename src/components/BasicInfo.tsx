export default function BasicInfo() {
  const items = [
    {
      title: "💵 貨幣與支付",
      desc: "貨幣為人民幣，正式縮寫為 CNY，民間俗稱 RMB。",
    },
    {
      title: "🔌 電壓與插座",
      desc: "電壓為 220V，插座種類其中一種與臺灣通用（雙平腳），除吹風機等高功率電器外，一般手機/電腦電器都能接受寬電壓。",
    },
    {
      title: "🚬 吸菸普及",
      desc: "大城市漸漸有室內禁菸條例，但現場落實率遠低於全世界，對菸味敏感者需稍微注意。",
    },
    {
      title: "📱 景點預約",
      desc: "大部分熱門景點與博物館皆需要透過「微信小程式」提前預約。",
    },
    {
      title: "📞 緊急求助",
      desc: "遇到問題請多多利用：報警電話 110、市民專線 12345，全國通用。",
    },
    {
      title: "🔋 充電寶規範",
      desc: "凡是搭乘大陸國內線航班，充電寶（行動電源）一定要有清晰的 3C 認證標示 (CCC) 才能攜帶登機。",
    },
  ];

  return (
    <section className="section" id="basic-info" aria-labelledby="basic-info-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">行前速覽</span>
          <h2 className="section-title" id="basic-info-title">
            基本資訊
          </h2>
          <p className="section-lead">
            出發前快速看一眼，這些當地常識與規則能幫你少走彎路。
          </p>
        </div>

        <div className="grid-cards">
          {items.map((item, index) => (
            <article className="card" key={index}>
              <h3 className="app-card-name" style={{ marginBottom: "0.5rem", color: "var(--color-primary)" }}>
                {item.title}
              </h3>
              <p className="check-note" style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
