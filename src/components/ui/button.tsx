"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#2E7D32] text-white shadow-[0_8px_30px_rgb(46_125_50/0.25)] hover:-translate-y-0.5 hover:bg-[#256b2a]",
        secondary:
          "border border-[#E5E7EB] bg-white text-[#1F2937] hover:-translate-y-0.5 hover:border-[#2E7D32]/25 hover:bg-[#F8F9FA] dark:border-white/20 dark:bg-[#111827] dark:text-white",
        outline:
          "border border-[#2E7D32]/30 bg-[#E8F5E9] text-[#1F2937] hover:bg-[#d3ead4]",
        ghost:
          "text-[#1F2937] hover:bg-[#F8F9FA] dark:text-white dark:hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-2xl px-4",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
