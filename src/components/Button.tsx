import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
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

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
};

// when `href` is passed, accept Link's props (minus the ones we already define)
type AsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    href: LinkProps["href"];
  };

// when `href` is NOT passed, accept normal button props
type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AsLink | AsButton;

export function Button({
  className,
  variant,
  size,
  children,
  href,
  ref,
  ...props
}: ButtonProps) {
  const classes = buttonVariants({ variant, size, className });

  if (href)
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(props as Omit<LinkProps, "href">)}
      >
        {children}
      </Link>
    );

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonVariants({ variant, size, className })}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
