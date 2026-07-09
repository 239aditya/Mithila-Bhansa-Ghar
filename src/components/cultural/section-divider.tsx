import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  icon?: React.ReactNode;
}

export function SectionDivider({ className, icon }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center justify-center py-8 md:py-12 w-full max-w-md mx-auto", className)}>
      <div className="h-px bg-[var(--color-terracotta)] opacity-30 flex-1" />
      <div className="mx-6 text-[var(--color-terracotta)] opacity-80">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" className="stroke-current fill-transparent"/>
            <circle cx="12" cy="12" r="3" className="fill-current"/>
          </svg>
        )}
      </div>
      <div className="h-px bg-[var(--color-terracotta)] opacity-30 flex-1" />
    </div>
  );
}
