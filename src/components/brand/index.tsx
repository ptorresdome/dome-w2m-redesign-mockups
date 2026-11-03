import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Brand button: lime primary action or dark-grey secondary action. */
export function BrandButton({ variant = "primary", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return <button type="button" className={cn("rd-bbtn", `rd-bbtn--${variant}`, className)} {...props} />;
}

/** White surface with soft brand shadow. */
export function BrandCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rd-card", className)} {...props} />;
}

/** Section heading with optional Font Awesome icon in lime. */
export function SectionTitle({ icon, children, as: Tag = "h2" }: { icon?: string; children: ReactNode; as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag className="rd-stitle">
      {icon && <span className={`fa ${icon}`} aria-hidden="true" />}
      {children}
    </Tag>
  );
}

/** Label + value pair (e.g. search summary). */
export function InfoRow({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className="rd-info">
      <dt className="rd-info__label">{label}</dt>
      <dd className="rd-info__value">{value}</dd>
    </div>
  );
}
