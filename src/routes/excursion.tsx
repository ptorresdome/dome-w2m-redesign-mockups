import { createFileRoute, redirect } from "@tanstack/react-router";

/** Excursions now live on the home page; keep the old address working. */
export const Route = createFileRoute("/excursion")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
