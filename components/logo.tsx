import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoVariants = cva(
  "inline-flex items-center font-extrabold tracking-tighter lowercase",
  {
    variants: {
      size: {
        sm: "gap-1 text-sm",
        lg: "gap-1.5 text-xl",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

const badgeVariants = cva(
  "flex shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent",
  {
    variants: {
      size: {
        sm: "size-5",
        lg: "size-7",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "size-3",
      lg: "size-4",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export default function Logo({ className, size }: LogoProps) {
  return (
    <span
      className={cn(logoVariants({ size }), className)}
      title="fli — Forward Leap International Affairs"
    >
      <span className={badgeVariants({ size })}>
        <ArrowUpRight
          aria-hidden
          strokeWidth={3}
          className={iconVariants({ size })}
        />
      </span>
      <span>
        <span className="text-accent">fli</span>
        <span className="text-foreground">affairs</span>
      </span>
    </span>
  );
}
