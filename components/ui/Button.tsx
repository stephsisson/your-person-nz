import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-dark focus-visible:bg-teal-dark",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink/5",
  ghost: "bg-transparent text-teal hover:text-teal-dark underline underline-offset-4",
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
