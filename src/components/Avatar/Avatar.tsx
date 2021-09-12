import React from "react";

import "./Avatar.scss";

export type AvatarProps = {
  alt: string;
  letter: string;
  src?: string;
};

const Avatar: React.FC<AvatarProps> = ({ alt, letter, src }: AvatarProps) => {
  if (!src) {
    return <span className="company-letter">{letter}</span>;
  }
  return <img className="repo-icon" alt={alt} src={src} />;
};

export default React.memo(Avatar);
