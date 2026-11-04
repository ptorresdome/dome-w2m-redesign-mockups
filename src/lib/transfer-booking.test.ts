import { describe, expect, it } from "vitest";
import { passengerLabels, resolveTransferSearch, validateBookingSearch } from "./transfer-booking";

describe("Selected transfer confirmation", () => {
  it("keeps the selected service and submitted journey", () => {
    expect(validateBookingSearch({ vehicle: "minivan-65", from: "Aeropuerto de Cancun", to: "Tulum", date: "14/11/2026", ret: "21/11/2026", adults: 2, children: 1 })).toMatchObject({ vehicle: "minivan-65", from: "Aeropuerto de Cancun", to: "Tulum", date: "14/11/2026", ret: "21/11/2026", adults: 2, children: 1 });
  });
  it("creates a passenger entry for every adult, child and baby", () => {
    expect(passengerLabels({ adults: 2, children: 1, babies: 1 })).toEqual(["Titular", "Adulto 2", "Niño 1", "Bebé 1"]);
  });
  it("does not overwrite a completed search with example values", () => {
    expect(resolveTransferSearch({ to: "Tulum", adults: 1, children: 3, ret: "21/11/2026" })).toMatchObject({ to: "Tulum", adults: 1, children: 3, ret: "21/11/2026" });
  });
  it("does not select a different service when the service identifier is invalid", () => {
    expect(validateBookingSearch({ vehicle: "unknown" }).vehicle).toBeUndefined();
  });
});