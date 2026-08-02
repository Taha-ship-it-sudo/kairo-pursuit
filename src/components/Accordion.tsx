"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState, type ReactNode } from "react";

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  summary?: ReactNode;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  summary,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
      >
        <span className="min-w-0 flex-1">
          <span className="block font-[family-name:var(--font-display)] text-lg font-semibold text-ink sm:text-xl">
            {title}
          </span>
          {summary ? (
            <span className="mt-1 block text-sm leading-relaxed text-muted sm:text-base">
              {summary}
            </span>
          ) : null}
        </span>
        <span
          aria-hidden
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-transform duration-300 ${
            open ? "rotate-45 bg-accent-soft" : "bg-surface-elevated"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-10 text-base leading-relaxed text-muted">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
