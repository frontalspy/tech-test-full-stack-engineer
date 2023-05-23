import React, { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <ButtonComponent variant={variant} {...props}>
      {children}
    </ButtonComponent>
  );
};
