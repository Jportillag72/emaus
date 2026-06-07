type RichTextProps = {
  content: string;
};

export function RichText({ content }: RichTextProps) {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="grid gap-5 text-base leading-8 text-ink/78">
      {blocks.length > 0 ? (
        blocks.map((block, index) => <RichTextBlock key={`${index}-${block}`} block={block} />)
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}

function RichTextBlock({ block }: { block: string }) {
  if (block.startsWith("## ")) {
    return (
      <h2 className="pt-3 font-display text-2xl font-bold leading-tight text-night">
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 className="pt-2 text-lg font-extrabold leading-tight text-night">
        {block.replace(/^###\s+/, "")}
      </h3>
    );
  }

  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
    return (
      <ul className="grid gap-2 pl-5">
        {lines.map((line) => (
          <li key={line} className="list-disc">
            {line.replace(/^-\s+/, "")}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      {lines.map((line, index) => (
        <span key={`${index}-${line}`}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  );
}
