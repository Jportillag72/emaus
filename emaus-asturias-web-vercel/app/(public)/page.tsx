import Image from "next/image";
import Link from "next/link";
import { CommunityGrid } from "@/components/community-grid";
import { ContactForm } from "@/components/contact-form";
import { NewsCard } from "@/components/news-card";
import { RetreatCard } from "@/components/retreat-card";
import { getPublishedNews, getPublicRetreats } from "@/lib/supabase-rest";
import { parishName } from "@/lib/site";

export default async function HomePage() {
  const [retreats, news] = await Promise.all([getPublicRetreats(), getPublishedNews()]);
  const upcomingRetreats = retreats.filter((retreat) => retreat.status !== "finalizado").slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-night/10 bg-parchment">
        <Image
          src="/images/religious/hero-cross-light.webp"
          alt="Cruz de madera iluminada por la luz de una capilla"
          fill
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-center"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,248,243,0.96)_0%,rgba(250,248,243,0.86)_46%,rgba(250,248,243,0.38)_100%)]" />
        <div className="shell flex min-h-[calc(100svh-9rem)] max-w-[1120px] flex-col justify-center py-16">
          <p className="eyebrow">EMAÚS Asturias</p>
          <h1 className="display-title mt-4 max-w-4xl">Un encuentro que puede cambiar tu vida</h1>
          <p className="lead mt-7 max-w-2xl">
            EMAÚS, Effetá y Bartimeo son experiencias de encuentro, fe y comunidad que ayudan a
            descubrir que Dios sigue caminando a nuestro lado. Cada camino ofrece un tiempo para
            detenerse, escuchar la propia vida y volver a mirar la fe con esperanza.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/retiros" className="btn btn-primary">
              Ver próximos retiros
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="mb-9 max-w-2xl">
            <p className="eyebrow">Nuestros caminos</p>
            <h2 className="page-title mt-3">Cuatro formas de vivir el encuentro</h2>
          </div>
          <CommunityGrid />
        </div>
      </section>

      <section className="section border-y border-night/10 bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Qué es EMAÚS</p>
            <h2 className="page-title mt-3">Un camino sencillo para volver al corazón</h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-md border border-night/10 bg-parchment">
              <Image
                src="/images/religious/emaus-bible-candle.webp"
                alt="Biblia abierta, vela y rama de olivo sobre una mesa de madera"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5 text-base leading-8 text-ink/76">
            <p>
              EMAÚS nace de una intuición profundamente humana: cuando caminamos acompañados,
              escuchamos con honestidad y dejamos espacio a Dios, la vida puede abrirse de nuevo.
            </p>
            <p>
              En Asturias, esta comunidad cuida experiencias de retiro, acogida y continuidad para
              que el encuentro no quede aislado, sino que se convierta en camino compartido.
            </p>
            <p>
              Lo vivido se acompaña con discreción, oración y cercanía, respetando siempre la
              historia personal de cada uno y los tiempos de cada proceso.
            </p>
            <Link href="/que-es-emaus" className="btn btn-secondary w-fit">
              Saber más
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Agenda</p>
              <h2 className="page-title mt-3">Próximos retiros</h2>
            </div>
            <Link href="/retiros" className="btn btn-secondary w-fit">
              Ver todos
            </Link>
          </div>
          <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-md border border-night/10 bg-white">
            <Image
              src="/images/religious/retreat-calendar-table.webp"
              alt="Mesa con calendario, cruz de madera y ramas de olivo"
              fill
              sizes="1120px"
              className="object-cover"
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingRetreats.map((retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-night/10 bg-night text-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_0.9fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Comunidad</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Vinculados a la {parishName}
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-white/76">
            <p>
              La parroquia es casa, referencia y punto de encuentro. Desde ahí, EMAÚS Asturias cuida
              la vida comunitaria que nace después de cada retiro.
            </p>
            <p>
              Esa continuidad ayuda a que la experiencia no se quede en un momento aislado, sino que
              pueda crecer en comunidad, servicio y vida cotidiana.
            </p>
            <Link href="/comunidad" className="btn bg-white text-night">
              Ver comunidad
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/14 bg-white/6">
            <Image
              src="/images/religious/community-prayer-table.webp"
              alt="Mesa comunitaria con Biblia, vela y manos en oración"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Noticias</p>
              <h2 className="page-title mt-3">Últimas noticias</h2>
            </div>
            <Link href="/noticias" className="btn btn-secondary w-fit">
              Ver noticias
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="page-title mt-3">Solicita información</h2>
            <p className="lead mt-5">
              Cuéntanos qué camino te interesa y la comunidad te responderá cuando sea posible.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-md border border-night/10 bg-white">
              <Image
                src="/images/religious/contact-note-window.webp"
                alt="Tarjeta en blanco y pluma junto a una vela con luz de vidriera"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
