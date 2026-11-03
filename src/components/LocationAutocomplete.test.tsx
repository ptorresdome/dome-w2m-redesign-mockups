import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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
    return { input: screen.getByPlaceholderText("Aeropuerto, zona u hotel"), onChange };
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
    fireEvent.click(screen.getByRole("option", { name: "Aeropuerto de Cancun" }));
    expect(onChange).toHaveBeenCalledWith("Aeropuerto de Cancun");
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