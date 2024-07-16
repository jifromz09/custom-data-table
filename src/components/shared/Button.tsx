import { ReactNode, ReactElement } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  onClick?: (e: any) => void | undefined;
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
  type,
}: ButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className={`${styles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
