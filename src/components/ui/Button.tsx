"use client";

import React from "react";
import { SpecularButton, SpecularButtonProps } from "./SpecularButton";

export interface ButtonProps extends Omit<SpecularButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  radius = 18,
  type = "button",
  ...props
}) => {
  const isPrimary = variant === "primary";
  const mappedVariant = isPrimary ? "primary" : variant === "outline" ? "outline" : "glass";

  return (
    <SpecularButton
      variant={mappedVariant as any}
      size={size}
      radius={radius}
      href={href}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </SpecularButton>
  );
};

export default Button;
