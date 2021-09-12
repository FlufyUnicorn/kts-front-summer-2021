import * as React from "react";

import Avatar from "@components/Avatar";
import { RepoItem } from "@store/GitHubStore/types";
import StarIcon from "@components/StarIcon";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

import "@styles/colors.scss";
import "./RepoTile.scss";

export type RepoTileProps = {
  item: RepoItem;
  onClick: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({
  item,
  onClick,
}: RepoTileProps) => {
  return (
    <Link to={`/repos/${item.owner.login}/${item.name}`} className="repo-card" onClick={onClick}>
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
            <StarIcon currentColor={"#ff9432"} />
            {item.stargazers_count}
          </div>
          <div className="repo-update">
            {dayjs(item.updated_at).format("DD.MM.YYYY")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(RepoTile);
