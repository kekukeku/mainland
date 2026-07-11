import { useEffect, useState } from "react";
import { navItems } from "../content/guide";
import { useScrollProgress, useScrollSpy } from "../hooks";

const ids = navItems.map((n) => n.id);

export default function Nav() {
  const progress = useScrollProgress();
  const active = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`} aria-label="主要區塊導覽">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          Kevin的赴陸旅遊教戰守則
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? " is-active" : ""}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div
        className="nav-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="閱讀進度"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </nav>
  );
}
