import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md flex items-center justify-center px-2 py-1 font-bold cursor-pointer",
  {
    variants: {
      variant: {
        default: "hover:bg-accent-one",
        prime: "bg-accent-one hover:bg-accent-two",
        accent: "bg-accent outline-2 -outline-offset-4 hover:outline-offset-0",
        action: "bg-btn-sec hover:scale-[0.9] text-bg-prime",
        link: "text-primary underline-offset-4 hover:underline hover:text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
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
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
