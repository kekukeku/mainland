export default function Credentials() {
  return (
    <section
      className="section section-alt"
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">證件與入境</span>
          <h2 className="section-title" id="credentials-title">
            除了臺胞證，只有臺胞證。
          </h2>
          <p className="section-lead">
            護照只有出境和入境中華民國海關用到兩次。從落地開始到離境，臺胞證是唯一的合法證件，一定隨時傍身唷！
          </p>
        </div>

        <div className="grid-cards">
          <article className="card">
            <h3 className="app-card-name">護照</h3>
            <p className="app-card-purpose">
              國際旅行的身分證明，出入臺灣與國際航段使用。
            </p>
            <p className="check-note">
              效期建議至少半年以上，姓名拼寫與機票一致。
              <span style={{ color: "#2563eb", display: "block", marginTop: "0.25rem", fontWeight: "bold" }}>
                入境大陸海關和辦理旅店入住時不用拿出來。
              </span>
            </p>
          </article>

          <article className="card">
            <h3 className="app-card-name">臺胞證</h3>
            <p className="app-card-purpose">
              入境中國大陸、住宿登記、高鐵實名購票與 App 驗證的主要證件。
            </p>
            <p className="check-note">
              一次有效臺胞證只能當緊急備案，旅遊上還有非常多不便與不適配的地方（Kevin親身經歷)，非到不得已，盡量事先申請好卡式臺胞證。
            </p>
          </article>

          <article className="card">
            <h3 className="app-card-name">入境通道</h3>
            <p className="app-card-purpose">
              依現場「港澳臺」標示的通道。
            </p>
            <p className="check-note">
              各口岸略有不同，臺灣居民地位身份等同香港居民，非中國公民也不是外國人，但走道可能與任一種歸類一起。如果沒寫，先走「中國公民」通道準沒錯。
            </p>
          </article>
        </div>

        <div className="note-box" style={{ marginTop: "1.5rem" }}>
          <strong>限定優惠政策（如首來族免費、臺胞景區免費、70歲以上免費)：</strong>
          具時效性與資格限制，實際適用期間、資格與各景區條件，
          以官方最新公告為準；本站僅在完成官方查核後才發布相關優惠。
        </div>
      </div>
    </section>
  );
}
