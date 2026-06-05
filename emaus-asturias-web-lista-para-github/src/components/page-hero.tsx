type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="border-b border-night/10 bg-white">
      <div className="shell py-14 md:py-20">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-title mt-4 max-w-4xl">{title}</h1>
        <p className="lead mt-6 max-w-3xl">{lead}</p>
      </div>
    </section>
  );
}
