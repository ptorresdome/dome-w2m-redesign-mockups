/** Search parameters passed from the search form to the results page via the URL. */
export type TransferSearch = {
  from?: string | undefined;
  to?: string | undefined;
  date?: string | undefined; // dd/mm/yyyy
  ret?: string | undefined; // dd/mm/yyyy (round trip only)
  adults?: number | undefined;
  children?: number | undefined;
  babies?: number | undefined;
  privateOnly?: boolean | undefined;
};

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 120) : undefined);
const num = (v: unknown, min: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(min, Math.min(5, Math.round(n))) : undefined;
};

export function validateTransferSearch(s: Record<string, unknown>): TransferSearch {
  return {
    from: str(s["from"]),
    to: str(s["to"]),
    date: str(s["date"]),
    ret: str(s["ret"]),
    adults: num(s["adults"], 1),
    children: num(s["children"], 0),
    babies: num(s["babies"], 0),
    privateOnly: s["privateOnly"] === true || s["privateOnly"] === "true" ? true : undefined,
  };
}

export const formatDate = (d: Date | null) =>
  d ? `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}` : undefined;

export function parseTransferDate(value?: string): Date | null {
  if (!value) return null;
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return null;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

export function paxText(a = 1, c = 0, b = 0) {
  const parts = [`${a} ${a === 1 ? "adulto" : "adultos"}`];
  if (c) parts.push(`${c} ${c === 1 ? "niño" : "niños"}`);
  if (b) parts.push(`${b} ${b === 1 ? "bebé" : "bebés"}`);
  return parts.join(", ");
}
