import { ReactElement, createRef, forwardRef } from "react";

type InputType = "email" | "password" | "text" | "number" | "checkbox" |undefined;

export interface InputProps {
  onChange: (e: any) => void;
  value?: string;
  type?: InputType;
  placeholder?: string;
  name?: string;
  label?: string;
  checked?: boolean;
}

const RefInput = forwardRef<HTMLInputElement, InputProps>(
  ({
    onChange,
    type,
    value,
    placeholder,
    name,
    label,
    checked
  }, ref): JSX.Element => {
    return (
      <>
        {label && <label>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          name={name}
          checked={checked}
          ref={ref}
        />
      </>
    );
  });


export default RefInput;
