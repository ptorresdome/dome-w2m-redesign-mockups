/**
 * Personal booking data handed from the confirmation form to the summary page.
 * Kept in memory (never in the URL) so personal data is not stored or shared;
 * a reload of /resumen shows placeholders instead of the form values.
 */
export type BookingContact = { name: string; surname: string; email: string; phonePrefix: string; phone: string };
export type BookingPassenger = { label: string; name: string; surname: string; document: string; hotelBooking?: string | undefined };
export type BookingSubmission = { contact: BookingContact; passengers: BookingPassenger[]; agencyReference: string; observations: string; locator: string };

let current: BookingSubmission | null = null;

export const saveBookingSubmission = (submission: BookingSubmission) => { current = submission; };
export const readBookingSubmission = () => current;

const LOCATOR_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** Illustrative locator like W06EUFL: a W followed by six letters or digits. */
export function generateLocator(rand: () => number = Math.random) {
  let code = "W";
  for (let i = 0; i < 6; i++) code += LOCATOR_CHARS[Math.floor(rand() * LOCATOR_CHARS.length)];
  return code;
}
