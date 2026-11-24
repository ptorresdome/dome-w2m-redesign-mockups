import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { LocationAutocomplete, type AcGroup } from "@/components/LocationAutocomplete";
import { BrandButton } from "@/components/brand";
import { DESTINATIONS, EXCURSIONS } from "@/lib/excursions";

const GROUPS: AcGroup[] = [
  { title: "Destinos", icon: "fa-map", items: DESTINATIONS.map((d) => d.name) },
  { title: "Actividades", icon: "fa-ticket", itemIcon: "fa-star", items: EXCURSIONS.map((e) => e.title) },
];

/** Free-text excursion search: the list of destinations and activities opens on click, before typing. */
export function ExcursionQuickSearch() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const go = (value: string, group?: string) => {
    const act = group === "Actividades" ? EXCURSIONS.find((e) => e.title === value) : undefined;
    void navigate({ to: "/excursion-resultados", search: act ? { act: act.id } : { dest: value.trim() || undefined } });
  };
  return (
    <form className="rd-qsearch" onSubmit={(e) => { e.preventDefault(); go(text); }}>
      <h1 className="rd-qsearch__title">Descubre las mejores excursiones</h1>
      <div className="rd-qsearch__row">
        <label className="rd-field rd-qsearch__field" htmlFor="excursionDestination">
          <span className="rd-field__icon"><svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></span>
          <span className="rd-field__body">
            <span className="rd-field__label">Destino o actividad</span>
            <LocationAutocomplete id="excursionDestination" tabIndex={1} value={text} onChange={setText} panelLabel="Destinos y actividades"
              groups={GROUPS} placeholder="¿Adónde vas o qué quieres hacer?" modalTitle="Destino o actividad" onSelect={go} />
          </span>
        </label>
        <BrandButton className="rd-btn rd-btn--primary rd-search__submit" id="searchBtn" type="submit">
          Buscar <svg className="rd-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        </BrandButton>
      </div>
    </form>
  );
}
