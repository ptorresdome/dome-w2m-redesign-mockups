import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExcursionSearchForm } from "@/components/search/ExcursionSearchForm";
import { capturedCSS, redesignCSS } from "@/styles/page-styles";

export const Route = createFileRoute("/excursion")({
  head: () => ({ meta: [
    { title: "Excursiones | B2C-W2M Redesign" },
    { name: "description", content: "Busca excursiones por destino, fechas y número de personas." },
    { property: "og:title", content: "Buscar excursiones" },
    { property: "og:description", content: "Encuentra excursiones en barco y actividades en tu destino." },
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
      <div role="main">
        <SiteHeader active="excursions" />
        <ExcursionSearchForm />
        <SiteFooter />
      </div>
    </>
  );
}
