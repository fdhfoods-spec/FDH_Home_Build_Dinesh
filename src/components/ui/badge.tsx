import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--fdh-accent)] text-[var(--fdh-primary)] dark:bg-[var(--fdh-primary)]/20 dark:text-[var(--fdh-secondary)]",
        secondary:
          "border-transparent bg-[var(--fdh-secondary)]/15 text-[var(--fdh-secondary)] dark:bg-[var(--fdh-secondary)]/20",
        outline: "border-[var(--fdh-border)] text-[var(--fdh-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
