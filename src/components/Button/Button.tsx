import React from "react";

import "./Button.css";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}: ButtonProps) => {
  if (!disabled) {
    return (
      <button type="submit" onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button type="submit" disabled={true}>
      {children}
    </button>
  );
};

export default Button;
