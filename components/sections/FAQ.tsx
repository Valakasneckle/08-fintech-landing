"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <SectionHeader
        badge="FAQ"
        title="Questions finance teams ask"
        description="Straight answers about security, integrations, pricing, and getting started."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="rounded-2xl border border-border bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="font-medium text-primary">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
