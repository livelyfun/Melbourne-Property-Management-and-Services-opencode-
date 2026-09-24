"use client";

import { useState } from "react";
import "./FAQAccordion.css";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                className="faq__trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq__icon" aria-hidden="true">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className="faq__panel"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}