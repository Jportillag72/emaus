type RichTextProps = {
  content: string;
};

export function RichText({ content }: RichTextProps) {
  const paragraphs = content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="grid gap-5 text-base leading-8 text-ink/78">
      {paragraphs.length > 0 ? (
        paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}
