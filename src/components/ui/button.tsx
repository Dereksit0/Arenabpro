"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-black hover:bg-brand-dark hover:shadow-[0_0_24px_rgba(82,240,1,0.4)] active:scale-[0.98]",
        outline:
          "border-2 border-white/80 text-white hover:bg-white/10 active:scale-[0.98]",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
        dark: "bg-[#1C1C1C] text-white hover:bg-[#2A2A2A] active:scale-[0.98]",
        black:
          "bg-black text-white border-2 border-black hover:bg-[#1C1C1C] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded",
        md: "h-11 px-6 text-sm rounded",
        lg: "h-14 px-8 text-base rounded-sm",
        xl: "h-16 px-10 text-lg rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
