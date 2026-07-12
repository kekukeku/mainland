import {
  LAST_CHECKED,
  SITE_VERSION,
} from "../content/sources";

const REPORT_URL = "mailto:k@kuo.ooo";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-meta">
      <div className="container">
        <p className="disclaimer">
          本頁內容為旅遊資訊整理，不構成法律、金融或入境保證。所有政策、費率、數量、日期與聯絡資訊，
          實際規定以主管機關與各服務商最新公告為準。出發前請務必自行再次查核。
        </p>

        <div className="footer-meta" id="footer-meta">
          <span className="footer-badge">版本 v{SITE_VERSION}</span>
          <span>資料最後查核：{LAST_CHECKED}</span>
          <a href={REPORT_URL} target="_blank" rel="noopener noreferrer">
            發現資訊過期？回報給Kevin
          </a>
        </div>
      </div>
    </footer>
  );
}
