import { useEffect, useState } from "react";
import { emergencyBlocks, emergencyContacts } from "../content/guide";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard 不可用時仍給視覺回饋 */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="copy-row">
      <span>
        <code>{label}</code>
        <br />
        <code style={{ color: "var(--color-primary)" }}>{value}</code>
      </span>
      <button
        type="button"
        className={`btn-copy${copied ? " copied" : ""}`}
        onClick={copy}
      >
        {copied ? "已複製 ✓" : "複製"}
      </button>
    </div>
  );
}

function SosContent() {
  return (
    <div className="sos-section">
      <span className="sos-badge" aria-hidden="true">
        急
      </span>
      {emergencyBlocks.map((block) => (
        <div className="sos-block" key={block.id}>
          <p className="sos-block-title">
            <span aria-hidden="true">{block.icon}</span> {block.title}
          </p>
          <ul>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="sos-block">
        <p className="sos-block-title">
          <span aria-hidden="true">📞</span> 緊急聯絡（上線前請再次查核）
        </p>
        {emergencyContacts.map((c) => (
          <CopyRow key={c.id} label={c.label} value={c.value} />
        ))}
      </div>

      <div className="sos-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.print()}
        >
          產生隨身旅行小卡（列印／存 PDF）
        </button>
      </div>
    </div>
  );
}

interface EmergencyCardProps {
  drawerOpen: boolean;
  onCloseDrawer: () => void;
}

export default function EmergencyCard({
  drawerOpen,
  onCloseDrawer,
}: EmergencyCardProps) {
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, onCloseDrawer]);

  return (
    <>
      <section
        className="section"
        id="emergency"
        aria-labelledby="emergency-title"
      >
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">緊急備援</span>
            <h2 className="section-title" id="emergency-title">
              隨身救援包
            </h2>
            <p className="section-lead">
              手機沒電、斷網、支付失敗、證件遺失或身體不適時，先看這裡。可列印成隨身小卡。
            </p>
          </div>
          <SosContent />
        </div>
      </section>

      {drawerOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={onCloseDrawer}
            aria-hidden="true"
          />
          <div
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="緊急備援指南"
          >
            <div className="drawer-head">
              <h2>SOS 緊急備援</h2>
              <button
                type="button"
                className="drawer-close"
                aria-label="關閉"
                onClick={onCloseDrawer}
              >
                ×
              </button>
            </div>
            <div className="drawer-body">
              <SosContent />
            </div>
          </div>
        </>
      )}
    </>
  );
}
