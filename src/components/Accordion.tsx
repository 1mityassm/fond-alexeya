"use client";
import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="acc-item">
      <div className="acc-header" onClick={() => setOpen(!open)}>
        <span className="plus">{open ? "−" : "+"}</span>
        <span>{title}</span>
      </div>
      {open && <div className="acc-body">{children}</div>}
    </div>
  );
}
