import {
  checklistPhases,
  emergencyBlocks,
  emergencyContacts,
} from "../content/guide";
import { LAST_CHECKED } from "../content/sources";

/**
 * 隨身旅行小卡：僅在列印／存 PDF 時顯示（見 global.css @media print）。
 * 三折頁純文字黑白排版，隱藏所有裝飾與互動元件。
 */
export default function PrintCard() {
  const mustTasks = checklistPhases.flatMap((p) =>
    p.tasks.filter((t) => t.priority === "must").map((t) => t.label),
  );

  return (
    <div className="print-card" aria-hidden="true">
      <p className="print-title">Kevin的赴陸旅遊教戰守則隨身小卡（查核日 {LAST_CHECKED}）</p>
      <div className="print-cols">
        <div className="print-fold">
          <h2>出發必備</h2>
          <ul>
            {mustTasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="print-fold">
          <h2>緊急備援</h2>
          {emergencyBlocks.map((b) => (
            <div key={b.id}>
              <strong>{b.title}</strong>
              <ul>
                {b.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="print-fold">
          <h2>緊急聯絡</h2>
          <ul>
            {emergencyContacts.map((c) => (
              <li key={c.id}>
                {c.label}：{c.value}
              </li>
            ))}
          </ul>
          <h2>飯店地址（手寫）</h2>
          <ul>
            <li>中文：__________________</li>
            <li>英文：__________________</li>
          </ul>
          <h2>備註</h2>
          <ul>
            <li>號碼與規定上線前務必再次查核</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
