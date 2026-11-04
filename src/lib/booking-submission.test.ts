import { describe, expect, it } from "vitest";
import { generateLocator, readBookingSubmission, saveBookingSubmission, type BookingSubmission } from "./booking-submission";

describe("booking submission handoff", () => {
  it("generates a locator with a W followed by six letters or digits", () => {
    expect(generateLocator()).toMatch(/^W[A-Z0-9]{6}$/);
    expect(generateLocator(() => 0)).toBe("WAAAAAA");
    expect(generateLocator(() => 0.999999)).toBe("W999999");
  });

  it("starts empty and returns the saved submission", () => {
    expect(readBookingSubmission()).toBeNull();
    const submission: BookingSubmission = {
      contact: { name: "Pedro", surname: "Torres", email: "ptorres@example.com", phonePrefix: "+34", phone: "666777888" },
      passengers: [{ label: "Titular", name: "Pedro", surname: "Torres", document: "12345678A", hotelBooking: "H-1" }],
      agencyReference: "REF-1",
      observations: "Llegamos tarde",
      locator: "W06EUFL",
    };
    saveBookingSubmission(submission);
    expect(readBookingSubmission()).toBe(submission);
  });
});
