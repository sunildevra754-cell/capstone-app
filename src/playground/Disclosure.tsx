"use client";

import { useState, useId } from "react";

interface DisclosureProps {
  summary: string;
  children: React.ReactNode;
}

export default function Disclosure({ summary, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-semibold py-2"
      >
        <span aria-hidden="true">{isOpen ? "▼" : "▶"}</span>
        {summary}
      </button>
      {isOpen && (
        <div id={contentId} className="pl-6 py-2">
          {children}
        </div>
      )}
    </div>
  );
}