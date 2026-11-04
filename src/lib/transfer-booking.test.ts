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
import { cartItems, cartTotal, validateResultsSearch } from "./transfer-booking";
describe("multi-service cart", () => {
  it("adds arrival and return services and sums their prices", () => {
    const items = cartItems(validateResultsSearch({ from: "A", to: "H", date: "01/12/2026", ret: "08/12/2026", vehicle: "van-89", retVehicle: "suburban-110" }));
    expect(items.map(i => i.label)).toEqual(["Llegada", "Regreso"]);
    expect(items[1]).toMatchObject({ from: "H", to: "A", date: "08/12/2026" });
    expect(cartTotal(items)).toBe(207); // 89 arrival + 118 return price
  });
  it("ignores a return service without a return date", () => {
    expect(cartItems(validateResultsSearch({ vehicle: "van-89", retVehicle: "van-95" }))).toHaveLength(1);
  });
});

it("offers different return availability", () => {
  expect(cartItems(validateResultsSearch({ ret: "08/12/2026", vehicle: "van-89", retVehicle: "minivan-70" }))).toHaveLength(1);
});
