import {
  LAST_CHECKED,
  officialSources,
  SITE_VERSION,
  type Source,
} from "../content/sources";

const REPORT_URL = "https://github.com/kekukeku/mainland/issues";

function SourceRow({ source }: { source: Source }) {
  const isOfficial =
    source.sourceType === "official" || source.sourceType === "platform";
  const typeLabel: Record<Source["sourceType"], string> = {
    official: "官方",
    platform: "平臺",
    blog: "部落格",
    video: "影片",
  };
  return (
    <li className="source-item">
      <span className={`source-type${isOfficial ? " official" : ""}`}>
        {typeLabel[source.sourceType]}
      </span>
      <span>
        <a
          className="source-title"
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {source.title}
        </a>
        <span className="source-meta">
          {source.publisher}・最後查核 {source.checkedAt}
        </span>
        {source.note && <span className="source-meta">{source.note}</span>}
      </span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="sources-title">
      <div className="container">
        <p className="disclaimer">
          本頁內容為旅遊資訊整理，不構成法律、金融或入境保證。所有政策、費率、數量、日期與聯絡資訊，
          實際規定以主管機關與各服務商最新公告為準。出發前請務必自行再次查核。
        </p>



        <h3
          className="section-title"
          style={{ fontSize: "1.25rem", marginTop: "2rem" }}
        >
          官方查核來源
        </h3>
        <ul className="source-list" style={{ marginTop: "1rem" }}>
          {officialSources.map((s) => (
            <SourceRow key={s.id} source={s} />
          ))}
        </ul>

        <div className="footer-meta">
          <span className="footer-badge">版本 v{SITE_VERSION}</span>
          <span>資料最後查核：{LAST_CHECKED}</span>
          <a href={REPORT_URL} target="_blank" rel="noopener noreferrer">
            發現資訊過期？回報給我們
          </a>
        </div>
      </div>
    </footer>
  );
}
