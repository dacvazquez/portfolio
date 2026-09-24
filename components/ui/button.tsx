import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Barrido de brillo al pasar el cursor.
        default:
          "bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.4)] before:absolute before:inset-y-0 before:-left-full before:-z-10 before:w-1/2 before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent before:transition-[left] before:duration-700 before:ease-out hover:bg-primary/90 hover:shadow-[0_10px_36px_-8px_hsl(var(--primary)/0.7)] hover:before:left-[150%]",
        // Relleno suave desde abajo al pasar el cursor.
        outline:
          "border border-border bg-transparent before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-primary/10 before:transition-transform before:duration-300 before:ease-out hover:border-primary/50 hover:text-foreground hover:before:scale-y-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
