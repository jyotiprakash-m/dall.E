"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export default function AutoScrollContainer({
  children,
}: {
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, []); // Scroll only on mount

  return (
    <div
      ref={contentRef}
      className="overflow-auto h-full p-4 max-h-screen scroll-smooth"
    >
      {children}
    </div>
  );
}
