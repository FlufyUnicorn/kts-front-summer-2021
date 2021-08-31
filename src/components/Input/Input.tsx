import "./Input.css";
import React from "react";

export type InputProps = {
  value: string;
  placeholder: string;
  //onChange: (e: React.ChangeEvent) => void;
  onChange: (someValue:string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event)=> onChange(event.target.value)}
    />
  );
};
