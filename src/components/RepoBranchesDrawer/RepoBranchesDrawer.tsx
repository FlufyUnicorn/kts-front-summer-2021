import React, { useEffect, useState } from "react";

import GitHubStore from "@store/GitHubStore";
import { BranchItem, RepoItem } from "@store/GitHubStore/types";
import { Drawer } from "antd";
declare type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

export type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem;
  onClose: (e: EventType) => void;
  visible: boolean;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  selectedRepo,
  onClose,
  visible,
}) => {
  const [branchesList, setBranchesList] = useState<BranchItem[]>([]);

  useEffect(() => {
    const getBranches = async () => {
      const EXAMPLE_ORGANIZATION = selectedRepo.owner.login;
      const EXAMPLE_REPO = selectedRepo.name;
      try {
        await new GitHubStore()
          .getRepoBranchesList({
            ownerName: EXAMPLE_ORGANIZATION,
            repoName: EXAMPLE_REPO,
          })
          .then((branch) => setBranchesList(branch.data));
      } catch (err) {}
    };
    getBranches();
  }, [selectedRepo.owner.login, selectedRepo.name]);

  return (
    <Drawer
      title="Список веток"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      {branchesList.length &&
        branchesList.map((branch, i) => (
          <React.Fragment key={i}>
            <p>
              {i + 1}. {branch.name}
            </p>
          </React.Fragment>
        ))}
    </Drawer>
  );
};

export default RepoBranchesDrawer; // import React from "react";
//
// import {RepoItem, BranchItem} from "@store/GitHubStore/types";
// import { Drawer } from "antd";
// import { MAIN_CONST } from "@config/config";
// import {Link} from "react-router-dom";
//
// import "./RepoBranchesDrawer.scss";
// import {useParams} from "react-router-dom";
//
// type RepoBranchesDrawerProps = {
//   selectedRepo: RepoItem | null;
//   onClose: () => void;
//   visible: boolean;
// };
//
// const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
//   selectedRepo,
//   onClose,
//   visible = true,
// }) => {
//   const {name, owner} = useParams<{name: string, owner: string}>();
//   const [list, setList] = React.useState<BranchItem[]>([]);
//   const [repo, setRepo] = React.useState<RepoItem>();
//
//   React.useEffect(() => {
//       gitHubStore
//         .getOrganizationRepoBranches({
//           organizationName: owner,
//           repoName: name,
//         })
//         .then((result) => {
//           setList(result.data);
//           console.log(result.data);
//         });
//   }, [selectedRepo]);
//
//   React.useEffect(() => {
//     gitHubStore
//         .getOrganizationRepo({
//           organizationName: owner,
//           repoName: name,
//         })
//         .then((res) => {
//           setRepo(res.data);
//           console.log(res.data);
//         });
//   }, [selectedRepo]);
//
//   if (selectedRepo !== null) {
//     return (
//         <div>
//           <div>Имя организации: {repo?.owner.login}</div>
//           <div>Название репозитория: {repo?.name}</div>
//
//       <Drawer
//         title={`${MAIN_CONST.SIDE_NAME_REPO} ${name}`}
//         placement="right"
//         closable={false}
//         onClose={onClose}
//         visible={visible}
//       >
//         {list.map((item) => {
//           return (
//             <p key={item.name} className="repo-branches">
//               • {item.name}
//             </p>
//           );
//         })}
//           <Link to='/repos'><button>Вернуться к списку репозиториев</button></Link>
//       </Drawer>
//         </div>
//     );
//   }
//   return null;
// };
// export default RepoBranchesDrawer;
