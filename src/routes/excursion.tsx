import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionTitle } from "@/components/brand";
import { ExcursionQuickSearch } from "@/components/search/ExcursionQuickSearch";
import { ActivityCard, DestinationCard } from "@/components/excursions/HomeCards";
import { DESTINATIONS, EXCURSIONS, excursionsIn, fromPrice } from "@/lib/excursions";
import boat from "@/assets/excursion_boat.avif.asset.json";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/excursion")({
  head: () => ({ meta: [
    { title: "Excursiones | B2C-W2M Redesign" },
    { name: "description", content: "Busca excursiones por destino o actividad y descubre los destinos y actividades destacadas." },
    { property: "og:title", content: "Excursiones y actividades | B2C-W2M Redesign" },
    { property: "og:description", content: "Principales destinos y actividades destacadas en el Caribe." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Excursions,
});

function Excursions() {
  return (
    <>
      <style>{capturedCSS}</style>
      <style>{redesignCSS}</style>
      <div role="main" className="rd-xhome">
        <SiteHeader active="excursions" />
        <section className="rd-xhome__hero" aria-label="Buscar excursiones">
          <img className="rd-xhome__bg" src={boat.url} alt="Barco de excursión en el mar Caribe" />
          <div className="rd-xhome__search"><ExcursionQuickSearch /></div>
        </section>
        <section className="rd-xhome__section" aria-label="Principales destinos">
          <SectionTitle>Principales destinos</SectionTitle>
          <div className="rd-xhome__dests">
            {DESTINATIONS.map((d) => <DestinationCard key={d.name} {...d} count={excursionsIn(d.name).length} />)}
          </div>
        </section>
        <section className="rd-xhome__section" aria-label="Actividades destacadas">
          <SectionTitle>Actividades destacadas</SectionTitle>
          <div className="rd-xhome__acts">
            {EXCURSIONS.slice(0, 4).map((e) => <ActivityCard key={e.id} e={e} price={fromPrice(e)} />)}
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}
