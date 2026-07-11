import { appItems } from "../content/guide";

export default function AppToolkit() {
  return (
    <section className="section" id="apps" aria-labelledby="apps-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">必備 App 工具箱</span>
          <h2 className="section-title" id="apps-title">
            用任務挑 App，不是狂下載
          </h2>
          <p className="section-lead">
            每張卡只看四件事：用途、是否必裝、是否建議在臺灣先驗證、沒有 +86 門號時怎麼辦。
            <strong style={{ color: "var(--color-primary)", display: "block", marginTop: "0.5rem" }}>
              💡 額外秘訣：強烈推薦在旅行期間於手機安裝簡體中文輸入法（如拼音或手寫），在搜尋地圖、叫車與填寫地址時會帶來極大方便！
            </strong>
          </p>
        </div>

        <div className="grid-cards">
          {appItems.map((app) => (
            <article className="app-card" key={app.id}>
              <div className="app-card-head">
                <span className="app-card-cat">{app.category}</span>
              </div>
              <h3 className="app-card-name">{app.name}</h3>
              <p className="app-card-purpose">{app.purpose}</p>
              <div className="app-meta">
                <span className={`app-pill${app.mustInstall ? " must" : ""}`}>
                  {app.mustInstall ? "必裝" : "選配"}
                </span>
                {app.verifyInTaiwan && (
                  <span className="app-pill verify">臺灣先驗證</span>
                )}
              </div>
              <p className="app-alt">{app.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
