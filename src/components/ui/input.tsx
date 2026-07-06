import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[20px] border border-[var(--fdh-border)] bg-white px-4 py-2 text-sm text-[var(--fdh-text)] shadow-sm transition-colors placeholder:text-[var(--fdh-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fdh-primary)]/30 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/5",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
