import React, { useState, useEffect } from "react";

import { useReposContext } from "../../App";
import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";

import "./ReposSearchPage.scss";

export const ReposSearchPage: React.FC = () => {
  let history = useHistory();
  const reposContext = useReposContext();
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    reposContext.load();
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setDisabled(false);
  };

  const handleSearch = () => {
    const filteredData = reposContext.repoList.filter((repo) => {
      return repo.name.toLowerCase().includes(value.toLowerCase());
    });
    reposContext.setRepoList(filteredData);
    setDisabled(true);
  };

  return (
    <div className="main-page">
      <div className="search">
        <Spin spinning={reposContext.isLoading} tip="Loading...">
          <div className="repositoriesPage">
            <Input
              placeholder="Введите название репозитория"
              onChange={handleChange}
              value={value}
            />
            <Button onClick={handleSearch} disabled={disabled}>
              <SearchIcon />
            </Button>
            <div className="repositoriesPage__repoItem">
              <InfiniteScroll
                next={reposContext.fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                dataLength={reposContext.repoList.length}
              >
                {reposContext.repoList.map((item) => (
                  <React.Fragment key={item.id}>
                    <RepoTile
                      item={item}
                      onClick={() => {
                        history.push(`/repos/${item.id}`);
                      }}
                    />
                  </React.Fragment>
                ))}
                {!reposContext.repoList.length && (
                  <span>Репозиториев не найдено</span>
                )}
              </InfiniteScroll>
            </div>
          </div>
        </Spin>
      </div>
    </div>
  );
};
