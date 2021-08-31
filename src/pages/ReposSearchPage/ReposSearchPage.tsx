import * as React from "react";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { RepoTile } from "@components/RepoTile";
import { ApiResponse } from "../../shared/store/ApiStore/types";
import { RepoItem } from "../../store/GitHubStore/types";
import GitHubStore from "../../store/GitHubStore";
import { SearchIcon } from "@components/SearchIcon";

import "./ReposSearchPage.css";

export const ReposSearchPage = () => {
  const gitHubStore = new GitHubStore();
  const [value, setValue] = React.useState("");
  const [repos, setRepos] = React.useState<RepoItem[]>([]);

    const handleChange = (someValue: string): void => {
        setValue(someValue);
    };

  React.useEffect(() => {
    gitHubStore
      .getOrganizationReposList({ organizationName: value })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setRepos(result.data);
        }
      });
  }, [value]);
  return (
    <div className="main-page">
      <div className="search">
        <Input
          placeholder="Введите название организации"
          onChange={handleChange}
          value={value}
        />
        <Button children={<SearchIcon currentColor={'var(--colorBackground)'}/>}  />
      </div>
      {repos.map((item) => {
        return <RepoTile key={item.id} {...item} />;
      })}
    </div>
  );
};
