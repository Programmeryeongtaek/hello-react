import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, children, ...rest }: Props) {
  return (
    <>
      <span>{label}</span>
      <button {...rest}>{children}</button>
    </>
  );
}
