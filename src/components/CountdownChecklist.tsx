import { useMemo, useState } from "react";
import {
  checklistPhases,
  priorityLabel,
  type ChecklistTask,
} from "../content/guide";
import { useLocalStorage } from "../hooks";

const STORAGE_KEY = "mainland-checklist-v1";

const allTaskIds = checklistPhases.flatMap((p) => p.tasks.map((t) => t.id));

function tagClass(priority: ChecklistTask["priority"]) {
  if (priority === "must") return "check-tag tag-must";
  if (priority === "recommend") return "check-tag tag-recommend";
  return "check-tag tag-option";
}

export default function CountdownChecklist() {
  const [done, setDone] = useLocalStorage<Record<string, boolean>>(
    STORAGE_KEY,
    {},
  );
  const [open, setOpen] = useState<Record<string, boolean>>({
    [checklistPhases[0].id]: true,
  });

  const completed = useMemo(
    () => allTaskIds.filter((id) => done[id]).length,
    [done],
  );
  const total = allTaskIds.length;
  const pct = total > 0 ? completed / total : 0;

  const toggleTask = (id: string) =>
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  const togglePhase = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  const reset = () => setDone({});
  
  const expandAll = () => {
    const all: Record<string, boolean> = {};
    checklistPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpen(all);
  };
  const collapseAll = () => setOpen({});

  const radius = 34;
  const circ = 2 * Math.PI * radius;

  return (
    <section className="section" id="checklist" aria-labelledby="checklist-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">核心互動</span>
          <h2 className="section-title" id="checklist-title">
            30 天倒數 Checklist
          </h2>
          <p className="section-lead">
            勾選狀態會自動存在你的裝置（localStorage），不需登入。分四個時間段，照順序完成就能安心出發。
          </p>
        </div>

        <div className="checklist-progress card">
          <svg
            className="progress-ring"
            width="86"
            height="86"
            viewBox="0 0 86 86"
            role="img"
            aria-label={`已完成 ${completed} 之 ${total} 項`}
          >
            <circle
              cx="43"
              cy="43"
              r={radius}
              fill="none"
              stroke="var(--color-bg-canvas)"
              strokeWidth="8"
            />
            <circle
              cx="43"
              cy="43"
              r={radius}
              fill="none"
              stroke="var(--color-success)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={circ * (1 - pct)}
              transform="rotate(-90 43 43)"
            />
            <text
              x="43"
              y="48"
              textAnchor="middle"
              fontSize="18"
              fontWeight="700"
              fill="var(--color-text-primary)"
            >
              {Math.round(pct * 100)}%
            </text>
          </svg>
          <div className="progress-meta">
            <strong>
              已完成 {completed} / {total} 項
            </strong>
            <p>
              {completed === total
                ? "全部完成！可以安心出發。"
                : "把「必備」項目先清空，再處理強烈建議與選配。"}
            </p>
          </div>
          <div className="checklist-controls">
            <button className="btn-control" type="button" onClick={expandAll}>
              全部展開
            </button>
            <button className="btn-control" type="button" onClick={collapseAll}>
              全部收摺
            </button>
            <button className="btn-reset" type="button" onClick={reset}>
              一鍵重設
            </button>
          </div>
        </div>

        <div>
          {checklistPhases.map((phase) => {
            const isOpen = !!open[phase.id];
            const phaseDone = phase.tasks.filter((t) => done[t.id]).length;
            return (
              <div
                key={phase.id}
                className={`accordion-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  className="accordion-header"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${phase.id}`}
                  onClick={() => togglePhase(phase.id)}
                >
                  <span className="accordion-header-main">
                    <span>
                      <span className="accordion-phase">{phase.phase}</span>
                      <br />
                      <span className="check-note">{phase.subtitle}</span>
                    </span>
                    <span className="accordion-badge">
                      {phaseDone}/{phase.tasks.length}
                    </span>
                  </span>
                  <svg
                    className="accordion-chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className="accordion-panel"
                  id={`panel-${phase.id}`}
                  role="region"
                  aria-label={phase.phase}
                >
                  <div className="accordion-panel-inner">
                    <ul className="accordion-list">
                      {phase.tasks.map((task) => {
                        const isDone = !!done[task.id];
                        return (
                          <li key={task.id}>
                            <button
                              type="button"
                              className={`check-item${isDone ? " is-done" : ""}`}
                              aria-pressed={isDone}
                              onClick={() => toggleTask(task.id)}
                            >
                              <span className="check-box" aria-hidden="true">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M5 13l4 4L19 7"
                                    stroke="#fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="check-content">
                                <span className="check-label">
                                  {task.label}
                                </span>
                                {task.note && (
                                  <span className="check-note">
                                    {task.note}
                                  </span>
                                )}
                                <span className={tagClass(task.priority)}>
                                  {priorityLabel[task.priority]}
                                </span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
