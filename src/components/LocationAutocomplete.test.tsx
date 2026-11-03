import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LocationAutocomplete } from "./LocationAutocomplete";

beforeEach(() => {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: true, media: query, addEventListener: () => {}, removeEventListener: () => {},
  }));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe.each([
  ["pickupLocation", "Origen", "Orígenes disponibles"],
  ["returnLocation", "Destino", "Destinos disponibles"],
])("Mobile location selection: %s", (id, title, panelLabel) => {
  const mount = (value = "") => {
    const onChange = vi.fn();
    render(<LocationAutocomplete id={id} tabIndex={1} value={value} onChange={onChange} panelLabel={panelLabel} />);
    return { input: screen.getByPlaceholderText(id === "pickupLocation" ? "Aeropuerto de origen" : "Zona u hotel de destino"), onChange };
  };

  it("opens only on click, not hover or focus", () => {
    const { input } = mount();
    fireEvent.mouseEnter(input.parentElement ?? input);
    fireEvent.focus(input);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(input);
    expect(screen.getByRole("dialog", { name: title })).toBeInTheDocument();
  });

  it("blocks the background until selecting a value", () => {
    const { input, onChange } = mount();
    fireEvent.click(input);
    expect(document.body.style.pointerEvents).toBe("none");
    const selection = id === "pickupLocation" ? "Aeropuerto de Cancun" : "Tulum";
    fireEvent.click(screen.getByRole("option", { name: selection }));
    expect(onChange).toHaveBeenCalledWith(selection);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.pointerEvents).not.toBe("none");
  });

  it("allows closing without changing the selected value", () => {
    const { input, onChange } = mount("Tulum");
    fireEvent.click(input);
    fireEvent.click(screen.getByRole("button", { name: "Cerrar lista" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("Tulum");
  });
});

describe("Desktop list overflow", () => {
  afterEach(() => vi.restoreAllMocks());

  it.each([[900, true], [650, false]])("scrolls only when the destination list exceeds the viewport (bottom %s)", async (bottom, shouldScroll) => {
    vi.stubGlobal("matchMedia", (query: string) => ({ matches: false, media: query, addEventListener: () => {}, removeEventListener: () => {} }));
    vi.stubGlobal("innerHeight", 735);
    const scroll = vi.fn();
    vi.stubGlobal("scrollBy", scroll);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
      return { top: 350, bottom: this.getAttribute("role") === "listbox" ? bottom : 400, height: 50, left: 0, right: 400, width: 400, x: 0, y: 350, toJSON: () => ({}) };
    });
    render(<LocationAutocomplete id="returnLocation" tabIndex={1} value="" onChange={() => {}} panelLabel="Destinos disponibles" />);
    fireEvent.click(screen.getByPlaceholderText("Zona u hotel de destino"));
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument());
    await new Promise((resolve) => requestAnimationFrame(resolve));
    if (shouldScroll) expect(scroll).toHaveBeenCalledWith({ top: 181, behavior: "smooth" });
    else expect(scroll).not.toHaveBeenCalled();
  });
});