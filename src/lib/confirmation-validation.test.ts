import { describe, expect, it, vi } from "vitest";
import { validateConfirmation } from "./confirmation-validation";

function formFixture() {
  const form = document.createElement("form");
  form.innerHTML = '<input name="contact-name" required><input name="terms" type="checkbox" required>';
  const terms = form.querySelector<HTMLInputElement>('[name="terms"]');
  if (!terms) throw new Error("Missing terms checkbox");
  return { form, terms };
}

describe("confirmation validation", () => {
  it("validates unchecked terms before missing passenger/contact details", () => {
    const { form, terms } = formFixture();
    const consentValidation = vi.spyOn(terms, "reportValidity").mockReturnValue(false);
    const detailsValidation = vi.spyOn(form, "reportValidity");
    expect(validateConfirmation(form)).toBe(false);
    expect(consentValidation).toHaveBeenCalledOnce();
    expect(detailsValidation).not.toHaveBeenCalled();
  });

  it("still rejects invalid details after terms are accepted", () => {
    const { form, terms } = formFixture();
    terms.checked = true;
    expect(validateConfirmation(form)).toBe(false);
  });

  it("allows confirmation when terms are accepted and required fields are filled", () => {
    const { form, terms } = formFixture();
    terms.checked = true;
    const contact = form.querySelector<HTMLInputElement>('[name="contact-name"]');
    if (!contact) throw new Error("Missing contact input");
    contact.value = "Juan";
    expect(validateConfirmation(form)).toBe(true);
  });
});