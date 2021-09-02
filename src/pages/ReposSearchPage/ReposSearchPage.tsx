import * as React from "react";

import Input from "@components/Input";
import Button from "@components/Button";
import RepoTile from "@components/RepoTile";
import { RepoItem } from "@store/GitHubStore/types";
import GitHubStore from "@store/GitHubStore";
import SearchIcon from "@components/SearchIcon";
import RepoBranchesDrawer from "@components/ RepoBranchesDrawer";

import "./ReposSearchPage.css";

const gitHubStore = new GitHubStore();

export const ReposSearchPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedRepo, setSelectedRepo] = React.useState<null | RepoItem>(null);

  const [localState, setLocalState] = React.useState({
    value: "",
    isLoading: false,
    list: [] as RepoItem[],
  });

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedRepo(null);
  };

  const handleKeyboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalState({ value: e.target.value, isLoading: false, list: [] });
  };

  const handleClick = () => {
    setLocalState({
      value: localState.value,
      isLoading: true,
      list: localState.list,
    });
    gitHubStore
      .getOrganizationReposList({
        organizationName: localState.value,
      })
      .then((result) => {
        if (result.success) {
          setLocalState({
            value: localState.value,
            isLoading: false,
            list: result.data,
          });
        } else {
          setLocalState({
            value: localState.value,
            isLoading: false,
            list: localState.list,
          });
        }
      });
  };
  return (
    <div className="main-page">
      <div className="search">
        <Input
          placeholder="Введите название организации"
          onChange={handleKeyboard}
          value={localState.value}
        />
        <Button
          children={<SearchIcon currentColor={"var(--colorBackground)"} />}
          disabled={localState.isLoading}
          onClick={handleClick}
        />
      </div>
      {localState.list.map((item) => {
        const handleRepoCardClick = () => {
          setSelectedRepo(item);
          showDrawer();
        };
        return (
          <RepoTile key={item.id} item={item} onClick={handleRepoCardClick} />
        );
      })}
      <RepoBranchesDrawer
        selectedRepo={selectedRepo}
        onClose={onClose}
        visible={visible}
      />
    </div>
  );
};
