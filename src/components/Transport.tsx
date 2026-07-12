import { officialSources } from "../content/sources";

const rail = officialSources.find((s) => s.id === "12306");

export default function Transport() {
  return (
    <section
      className="section section-alt"
      id="transport"
      aria-labelledby="transport-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">交通與住宿</span>
          <h2 className="section-title" id="transport-title">
            最容易在現場卡住的兩關
          </h2>
          <p className="section-lead">
            住宿與交通是新手最常出錯的地方，提前確認就能省下大量現場焦慮。
          </p>
        </div>

        <div className="grid-cards" id="lodging">
          <article className="card">
            <h3 className="app-card-name">🏨 住宿</h3>
            <p className="app-card-purpose">
              去年起全國已全面取消涉外飯店資質限制，所有旅宿大體上都能接待所有旅客。
            </p>
            <p className="check-note">
              偶爾仍有極少數旅宿不熟悉法規或設備不足（如無讀卡機），非到必要不用過度擔心身份問題，若有疑慮訂房前簡單確認即可。
            </p>
          </article>

          <article className="card">
            <h3 className="app-card-name">🚄 高鐵</h3>
            <p className="app-card-purpose">
              比較 12306（官方、價格直接）與 攜程旅行/去哪兒旅行（新手友善、可能有服務費）。
            </p>
            <p className="check-note">
              需臺胞證實名購票、進站與安檢，記得走人工通道。進站和安檢常常會大排長龍，發車前幾分鐘就會關閘門，預留出發前一小時到車站較佳（Kevin大量血淚經驗)。
              {rail && (
                <>
                  {" "}
                  官方購票：
                  <a href={rail.url} target="_blank" rel="noopener noreferrer">
                    {rail.publisher}
                  </a>
                  。
                </>
              )}
            </p>
          </article>

          <article className="card">
            <h3 className="app-card-name">🚕 叫車</h3>
            <p className="app-card-purpose">
              保存飯店中文地址，確認上車點與車牌；機場／車站優先用官方排班或叫車 App。
            </p>
            <p className="check-note">
              支付寶／微信內都有叫車小程式，未必要另裝獨立 App。
            </p>
          </article>

          <article className="card">
            <h3 className="app-card-name">🏙️ 城市尺度</h3>
            <p className="app-card-purpose">
              大型城市轉乘與步行時間常超出臺灣旅客直覺，行程別排太密。
            </p>
            <p className="check-note">
              預留轉乘、安檢與塞車緩衝，比硬塞景點更能玩得順。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
