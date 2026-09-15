import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-offset-2 disabled:opacity-50 diasbled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 px-4 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 px-4 text-gray-900 hover:bg-gray-300",
        outline: "border border-blue-600 px-4 text-blue-600 hover:bg-blue-50",
        danger: "bg-red-600 px-4 text-white hover:bg-red-700",
        empty: "border-0 px-0 hover:text-slate-500",
      },
      size: {
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  className,
  variant,
  size,
  ref,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
