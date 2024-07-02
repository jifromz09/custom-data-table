import React, { ReactNode, ReactElement, memo } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  onClick: (e: any) => void;
  children: ReactNode;
  styles: string;
  type?: ButtonType;
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  styles,
  disabled,
}: ButtonProps): ReactElement => {
  return (
    <button className={`${styles}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
