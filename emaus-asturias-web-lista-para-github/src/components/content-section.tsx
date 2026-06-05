import type { TextBlock } from "@/lib/emaus-content";

export function ContentSection({ block, index }: { block: TextBlock; index?: number }) {
  return (
    <section className={`section ${index && index % 2 === 1 ? "border-y border-night/10 bg-white" : ""}`}>
      <div className="shell grid gap-9 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h2 className="page-title">{block.title}</h2>
        </div>
        <div className="grid gap-5 text-base leading-8 text-ink/76">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
