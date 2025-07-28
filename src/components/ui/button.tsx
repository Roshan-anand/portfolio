import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "@/styles/hover.css";

const buttonVariants = cva("px-2 py-1 flex justify-center items-center", {
  variants: {
    variant: {
      default: "",
      prime: "",
      accent:
        "text-prime-one bg-prime-two border-2 border-brd-one rounded-[10px] cursor-pointer outline-none shadow-txt-dim/15 shadow-[0px_8px_15px] hover:shadow-accent hover:shadow-[1px_5px_7px_1px,-1px_5px_7px_1px] hover:-translate-y-[4px] transition-all duration-300 ease-in-out",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

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
