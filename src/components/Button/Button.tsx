import React from "react";

import "./Button.scss";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  if (!disabled) {
    return (
      <button type="submit" onClick={onClick} >
        {children}
      </button>
    );
  }
  return (
    <button disabled={true}>
      {children}
    </button>
  );
};

export default React.memo(Button);
