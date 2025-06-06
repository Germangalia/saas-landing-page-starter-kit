"use client";
import React from "react";

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  return (
    <div className="w-full divide-y divide-gray-200">
      {faqs.map((faq: { question: string; answer: string }, idx: number) => (
        <div key={idx}>
          <button
            className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            type="button"
          >
            <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
            <span className="ml-4">
              {openIndex === idx ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="5" y="9" width="10" height="2" rx="1" fill="#2563eb"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="9" y="5" width="2" height="10" rx="1" fill="#2563eb"/><rect x="5" y="9" width="10" height="2" rx="1" fill="#2563eb"/></svg>
              )}
            </span>
          </button>
          {openIndex === idx && (
            <div className="pb-5 pr-2 text-gray-700 text-base">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
