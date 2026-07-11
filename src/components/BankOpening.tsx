export default function BankOpening() {
  return (
    <section className="section" id="bank" aria-labelledby="bank-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">金融開戶與金流指引</span>
          <h2 className="section-title" id="bank-title">
            如果我想在銀行開戶
          </h2>
          <p className="section-lead">
            短期旅遊使用支付寶、微信綁定臺灣信用卡已極為方便。但若有長天數旅居、商務、理財、銀聯卡方便國外旅遊等等需求，開立大陸本地銀行帳戶能帶來許多的便利性，能大幅開通支付寶與微信的所有功能。
          </p>
        </div>

        <div className="grid-cards">
          {/* 卡片 1 */}
          <article className="card" style={{ borderTop: "3px solid var(--color-primary)" }}>
            <h3 className="app-card-name" style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
              🪪 基礎必備資料（全國通用）
            </h3>
            <p className="check-note" style={{ marginBottom: "0.5rem" }}>
              前往任何大陸銀行開戶，以下三項是最基本的門檻：
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.9rem" }}>
              <li>
                <strong>有效期內臺胞證</strong>：必須為卡式臺胞證實體本。
              </li>
              <li>
                <strong>大陸實名手機號碼</strong>：最核心關鍵。必須持臺胞證親自前往大陸三大電信（移動、聯通、電信）的直營營業廳辦理實名卡。不可以使用臺灣漫遊卡或機場臨時卡。
              </li>
              <li>
                <strong>居住地址證明</strong>：部分分行會要求飯店住宿登記表、租房合約或大陸稅籍編號等額外文件。
              </li>
            </ul>
          </article>

          {/* 卡片 2 */}
          <article className="card" style={{ borderTop: "3px solid var(--color-secondary)" }}>
            <h3 className="app-card-name" style={{ color: "var(--color-secondary)", marginBottom: "0.5rem" }}>
              ⚠️ 嚴格審核與二類戶限制
            </h3>
            <p className="check-note" style={{ marginBottom: "0.5rem" }}>
              由於嚴格防範金融詐騙，近年開戶審核標準非常嚴格，且各城市、分行間標準天差地遠：
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.9rem" }}>
              <li>
                無當地工作、在學證明的散客，行員有權拒絕受理，開戶非常考驗運氣與耐心。
              </li>
              <li>
                即使開戶成功，無長期居留證明的遊客帳戶通常會被限制為「<strong>二類帳戶</strong>」，每日有小額轉帳與消費限額（約 500 至 2000 元人民幣），需要持卡一段時間且流水正常後才能向銀行申請調額。
              </li>
            </ul>
          </article>

          {/* 卡片 3 */}
          <article className="card" style={{ borderTop: "3px solid var(--color-primary)", boxShadow: "var(--shadow-md)" }}>
            <h3 className="app-card-name" style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
              🌊 對臺友善開戶通道（最寬鬆推薦）
            </h3>
            <p className="check-note" style={{ marginBottom: "0.5rem" }}>
              若不想碰釘子，推薦以下兩個最容易成功的綠色通道：
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
              <li>
                <strong>廈門所有銀行（極力推薦）</strong>：廈門因對臺政策窗口，所有分行對臺胞開戶限制特別寬鬆。幾乎<strong>只要準備好臺胞證與大陸實名手機號碼</strong>就能順利辦理開戶，極適合搭乘小三通專程前往開戶。
              </li>
              <li>
                <strong>富邦華一銀行（臺資背景）</strong>：作為臺商專門銀行，對臺灣同胞的開戶政策同樣相當寬鬆，通常只要攜帶<strong>臺胞證</strong>與實名號碼即可受理開戶，在各大一線城市（如上海、深圳等）均有設點。
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
