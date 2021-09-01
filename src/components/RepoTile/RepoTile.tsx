import * as React from "react";

import Avatar from "@components/Avatar";
import { RepoItem } from "@store/GitHubStore/types";
import { StarIcon } from "@components/StarIcon";
import dayjs from "dayjs";

import "../../styles/colors.css";
import "./RepoTile.css";

export type RepoTileProps = {
  item: RepoItem;
  onClick: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({item, onClick}: RepoTileProps) => {
  return (
    <div className="repo-card" onClick={onClick}>
      <Avatar
        alt="Аватар"
        src={item.owner.avatar_url}
        letter={item.name.charAt(0).toUpperCase()}
      />
      <div className="repo-info">
        <div className="repo-name">{item.name}</div>
        <div className="repo-author">
          <a className="repo-author" href={item.owner.url}>
            {item.owner.login}
          </a>
        </div>
        <div className="repo-bottom-info">
          <div className="repo-rating">
            <StarIcon currentColor={"var(--colorStar)"} />
            {item.stargazers_count}
          </div>
          <div className="repo-update">
            {dayjs(item.updated_at).format("DD.MM.YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoTile;
