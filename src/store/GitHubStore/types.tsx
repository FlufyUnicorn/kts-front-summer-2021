import { ApiResponse } from "@ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type GitHubRepoOwner = {
  id: number;
  url: string;
  avatar_url: string;
  login: string;
};

export type RepoItem = {
  id: number;
  url: string;
  name: string;
  stargazers_count: number;
  updated_at: Date;
  owner: GitHubRepoOwner;
};

export type BranchItem = {
  name: string;
};

export type GetOrganizationRepoBranchesParams = {
  organizationName: string;
  repoName: string;
};

export type GetOrganizationRepoParams = {
  organizationName: string;
  repoName: string;
};

export interface PostSomeDataPrams<ReqT> {
  data: ReqT;
}

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
  getOrganizationRepoBranches(
    params: GetOrganizationRepoBranchesParams
  ): Promise<ApiResponse<BranchItem[], any>>;
  getOrganizationRepo(
    params: GetOrganizationRepoParams
  ): Promise<ApiResponse<RepoItem, any>>;
}
