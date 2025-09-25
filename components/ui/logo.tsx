import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

const sizeClasses = {
  sm: "h-6 w-auto",
  md: "h-8 w-auto",
  lg: "h-12 w-auto",
  xl: "h-16 w-auto",
  xxl: "h-23 w-auto",
};

export function Logo({ className, size = "md", href }: LogoProps) {
  const LogoContent = () => (
    <img
      src="/roofing-template.svg"
      alt="Roofing Company Logo"
      className={cn(sizeClasses[size])}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center transition-opacity hover:opacity-80",
          className
        )}
      >
        <LogoContent />
      </a>
    );
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      <LogoContent />
    </div>
  );
}
