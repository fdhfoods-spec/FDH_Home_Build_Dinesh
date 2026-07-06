"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fdh-primary)]/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--fdh-primary)] text-white shadow-[0_12px_30px_rgba(46,125,50,0.2)] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--fdh-primary)_85%,black)]",
        secondary:
          "bg-[var(--fdh-surface)] text-[var(--fdh-text)] border border-[var(--fdh-border)] hover:-translate-y-0.5 hover:border-[var(--fdh-primary)]/35",
        ghost:
          "text-[var(--fdh-text)] hover:bg-[var(--fdh-accent)] dark:hover:bg-white/10",
        accent:
          "bg-[var(--fdh-secondary)] text-white shadow-[0_12px_30px_rgba(245,124,0,0.2)] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--fdh-secondary)_85%,black)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
