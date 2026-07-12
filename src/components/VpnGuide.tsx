export default function VpnGuide() {
  return (
    <section className="section section-alt" id="vpn" aria-labelledby="vpn-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">科學上網指南</span>
          <h2 className="section-title" id="vpn-title">
            VPN 好簡單
          </h2>
          <p className="section-lead">
            若打算申辦大陸的 SIM 卡和使用當地 WiFi，這篇指南能帶你搞懂所有翻牆技巧。
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* 主力大卡片：最推薦方式（應用層 App + 訂閱服務合併） */}
          <article className="card" style={{ borderTop: "4px solid var(--color-primary)", padding: "2rem", boxShadow: "var(--shadow-md)" }}>
            
            <h3 className="app-card-name" style={{ color: "var(--color-primary)", fontSize: "1.6rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              🚀 最推薦方式：應用層 App + 訂閱服務
            </h3>
            <p className="check-note" style={{ fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              使用 Shadowrocket / Clash Mi / Loon Lite 等等應用層 app，速度最快，分流最科學。<br />雖然要買斷 app ，還要另外訂閱服務供應商，但都很便宜，是一般人體驗最佳的翻牆方式。
            </p>

            {/* 內部左右並排網格（App 與 服務商） */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
              
              {/* 左側：🤖 應用層 App */}
              <div>
                <h4 style={{ fontSize: "1.25rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.5rem" }}>
                  🤖 應用層 App
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  
                  {/* iOS 推薦 */}
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                      <img 
                        src={`${import.meta.env.BASE_URL}shadowrocket-logo.webp`}
                        alt="Shadowrocket Logo" 
                        style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} 
                      />
                      <img 
                        src={`${import.meta.env.BASE_URL}loon-logo.jpg`}
                        alt="Loon Lite Logo" 
                        style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} 
                      />
                    </div>
                    <div>
                      <strong style={{ fontSize: "1.05rem", display: "block" }}>蘋果裝置 (iOS/macOS)</strong>
                      <span style={{ fontSize: "1rem", color: "var(--color-text-secondary)" }}>
                        原生最適合 <strong><a href="https://apps.apple.com/tw/app/shadowrocket/id932747118" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-primary)" }}>Shadowrocket</a></strong> 或 <strong><a href="https://apps.apple.com/app/id6444029612" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-primary)" }}>Loon Lite</a></strong>，用其他的 app 可能會上不了 LINE。
                      </span>
                    </div>
                  </div>

                  {/* Android/Windows 推薦 */}
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <img 
                      src={`${import.meta.env.BASE_URL}clashmi-cat.png`}
                      alt="ClashMi Logo" 
                      style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover", backgroundColor: "#f0fdf4", padding: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", flexShrink: 0 }} 
                    />
                    <div>
                      <strong style={{ fontSize: "1.05rem", display: "block" }}>Android / Windows</strong>
                      <span style={{ fontSize: "1rem", color: "var(--color-text-secondary)", display: "block" }}>
                        推薦使用 <strong><a href="https://github.com/clash-verge-rev/clash-verge-rev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-primary)" }}>ClashVerge</a></strong> 或 <strong><a href="https://github.com/KaringX/clashmi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-primary)" }}>ClashMi</a></strong>。
                      </span>
                      <span style={{ fontSize: "1rem", color: "var(--color-text-secondary)", display: "block", marginTop: "0.35rem", opacity: 0.8 }}>
                        *任何 app 都能搭配任何一家供應商
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 右側：👑 推薦服務供應商 */}
              <div>
                <h4 style={{ fontSize: "1.25rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.5rem" }}>
                  👑 聲譽卓越的服務供應商
                </h4>
                <p className="check-note" style={{ fontSize: "1.05rem", lineHeight: "1.5", marginBottom: "1.25rem" }}>
                  有時俗稱「機場」，任選應用層 app 都能載入其訂閱節點，付費後就能拿到訂閱連結/QR code，用 app 一鍵導入。
                </p>
                
                <ul style={{ margin: 0, paddingLeft: "1.25rem", listStyleType: "circle", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "1.05rem" }}>
                  <li>
                    <strong>首推薦 <a href="https://www.xfltd.org/#/register?code=Kq53T8tE" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--color-primary)", fontSize: "1.05rem" }}>XFLTD</a></strong>：一般服務商都是每個月計價且有流量限制，這家是買了流量後<strong>「永遠存在」</strong>，不限時間，毫不浪費，非常適合還會赴陸好幾次者。費用也相當低廉（48 元/ 250G）。
                  </li>
                  <li>
                    <strong>次推薦 <a href="https://tagss.pro/#/auth/azA5IoDg" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--color-primary)", fontSize: "1.05rem" }}>TAG</a></strong>：歷史非常悠久，能找到上百個伺服器遍佈世界大部分國家，滿足有時候特定國家的跳板需求。價格也便宜（185元/季），每月 250 GB 額度也非常夠用。
                  </li>
                </ul>
              </div>

            </div>

          </article>

          {/* 下排輔助卡（緊急使用與傳統VPN） */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            
            <article className="card" style={{ borderTop: "2px solid var(--color-secondary)", padding: "1.25rem" }}>
              <h3 className="app-card-name" style={{ color: "var(--color-secondary)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                ⚠️ 緊急使用
              </h3>
              <p className="check-note" style={{ fontSize: "1rem" }}>
                已在大陸來不及在外網先設定的話，手機可安裝「<strong>夏時國際加速器</strong>」，其免費的伺服器雖然選擇極少也緩慢，但能當做救急的翻牆方式，看重要訊息或去設定更完整的 VPN。
              </p>
            </article>

            <article className="card" style={{ borderTop: "2px solid var(--color-text-secondary)", padding: "1.25rem" }}>
              <h3 className="app-card-name" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                🛡️ 次推薦方式：傳統 VPN
              </h3>
              <p className="check-note" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                一鍵安裝、開關即用。在大陸 GFW 封鎖下表現起伏較大，費用較高，但適合懶得動手設定訂閱的旅人。
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", listStyleType: "circle", display: "flex", flexDirection: "column", gap: "0.25rem", fontSize: "1.05rem", color: "var(--color-text-secondary)" }}>
                <li>
                  <strong><a href="https://letsvpn.world" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-text-secondary)" }}>LetsVPN (快連)</a></strong>：兩岸三地用戶最多體量最大的傳統VPN，連線穩定、費用便宜且操作最傻瓜，非常適合短途新手。
                </li>
                <li>
                  <strong><a href="https://www.astrill.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-text-secondary)" }}>Astrill VPN</a></strong>：價格相當昂貴，但具備專門的混淆技術，是商務出差與極度追求穩定者公認的傳統 VPN 霸主。
                </li>
              </ul>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}
