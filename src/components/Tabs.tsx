"use client";
import { useState } from "react";

export default function Tabs({ tabs, children }: { tabs: string[]; children: React.ReactNode[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="tabs">
        {tabs.map((t, i) => (
          <button key={i} className={`tab${i === active ? " active" : ""}`} onClick={() => setActive(i)}>{t}</button>
        ))}
      </div>
      <div>{children[active]}</div>
    </div>
  );
}
