import { describe, expect, it } from "vitest";
import { formatDate, parseTransferDate, validateTransferSearch } from "./transfer-search";

describe("Previous search values", () => {
  it("restores the departure date 01/12/2026 without changing the day", () => {
    expect(formatDate(parseTransferDate("01/12/2026"))).toBe("01/12/2026");
  });
  it("restores the return date independently", () => {
    expect(formatDate(parseTransferDate("08/12/2026"))).toBe("08/12/2026");
  });
  it("rejects impossible dates instead of moving them to another month", () => {
    expect(parseTransferDate("31/02/2026")).toBeNull();
  });
  it("preserves the locations and 2 adults used in the previous search", () => {
    expect(validateTransferSearch({ from: "Aeropuerto de Cancun", to: "Hotel Iberostar Selection Paraiso del Mar (CUN)", adults: 2 })).toMatchObject({ from: "Aeropuerto de Cancun", to: "Hotel Iberostar Selection Paraiso del Mar (CUN)", adults: 2 });
  });
});