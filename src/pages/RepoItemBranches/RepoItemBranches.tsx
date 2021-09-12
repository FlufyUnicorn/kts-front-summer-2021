import { useEffect, useState } from "react";
import React from "react";

import { useReposContext} from "../../App";
import Button from "@components/Button";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import { RepoItem } from "@store/GitHubStore/types";
import { Spin, Breadcrumb } from "antd";
import { useParams, Link } from "react-router-dom";

import styles from "./RepoItemBranches.module.scss";

const RepoItemBranches: React.FC = () => {
    const reposContext = useReposContext();
    const [visible, setVisible] = useState(false);
    const { id } = useParams<{ id: string }>();
    const repo = reposContext.repoList.filter((repo: RepoItem) => repo.id == id);

    useEffect(() => {
        reposContext.load();
    }, [id]);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Spin spinning={reposContext.isLoading} tip="Loading...">
            <div className={styles.repoItemPage}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/repos">Список репозиториев</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Репозиторий № {id}</Breadcrumb.Item>
                </Breadcrumb>
                {repo.map((repo) => (
                    <React.Fragment key={repo.id}>
                        <h2>Репозиторий {repo.name}</h2>
                        <div className={styles.repoItemPage__content}>
                            <div>
                                <p>
                                    URL: <a href={repo.url}>{repo.name}</a>
                                </p>
                                <p>Приватность: {repo.private ? "Да" : "Нет"}</p>
                                <p>Количество звезд: {repo.stargazers_count}</p>
                                <Button onClick={showDrawer}>Показать ветки репозитория</Button>
                            </div>
                            <div>
                                <h3>Информация о владельце</h3>
                                <p>Имя владельца: {repo.owner.login}</p>
                                <p>
                                    URL: <a href={repo.owner.url}>{repo.owner.login}</a>
                                </p>
                            </div>
                        </div>
                        <RepoBranchesDrawer
                            selectedRepo={repo}
                            visible={visible}
                            onClose={onClose}
                        />
                    </React.Fragment>
                ))}
            </div>
        </Spin>
    );
};

export default RepoItemBranches;