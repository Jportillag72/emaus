import type { FaqItem } from "@/lib/emaus-content";

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="card p-5">
          <summary className="cursor-pointer font-display text-2xl font-bold text-night">
            {faq.question}
          </summary>
          <p className="mt-4 leading-8 text-ink/72">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
