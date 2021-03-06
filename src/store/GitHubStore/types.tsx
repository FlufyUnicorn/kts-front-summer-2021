import {ApiResponse} from "../../shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
    organizationName: string;
}

export type GitHubRepoOwner = {
    id: number;
    url: string;
    avatar_urls: string;
    login: string;


}

export type RepoItem = {
    id: number;
    url: string;
    name: string;
    stareges_count: number;
    owner: GitHubRepoOwner;
}

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
}
