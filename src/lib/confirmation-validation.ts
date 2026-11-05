/** Check consent before asking the browser to validate any personal fields. */
export function validateConfirmation(form: HTMLFormElement): boolean {
  const terms = form.elements.namedItem("terms");
  if (!(terms instanceof HTMLInputElement)) return false;
  if (!terms.checked) {
    terms.reportValidity();
    return false;
  }
  return form.reportValidity();
}