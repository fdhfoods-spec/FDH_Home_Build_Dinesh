import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 text-sm text-[#1F2937] shadow-[0_8px_24px_rgb(15_23_42/0.06)] outline-none ring-0 transition placeholder:text-[#6B7280] focus-visible:border-[#2E7D32] focus-visible:ring-2 focus-visible:ring-[#2E7D32]/30 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-300",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
