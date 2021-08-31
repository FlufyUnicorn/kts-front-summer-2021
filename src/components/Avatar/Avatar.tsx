import "./Avatar.css";
import React from "react";

export type AvatarProps = {
  alt: string,
  //letter: string;
  src?: string;
};

export const Avatar: React.FC<AvatarProps> = ({alt, src} : AvatarProps) => {
  return <img className="repo-icon" alt={alt} src={src}/>;
};

