import React from "react";
import styles from "./button.module.css";
import cn from "classnames";

 export type ButtonProps = {
   onClick?: (e: React.MouseEvent) => void;
   children: React.ReactNode;
   disabled?: boolean;
};

export const Button: React.FC <ButtonProps> = ({onClick,children,disabled=false}: ButtonProps) => {
  return <button className={cn(styles.search_button, {[styles.disabled]: disabled,})} onClick={onClick} >{children}</button>;
};
