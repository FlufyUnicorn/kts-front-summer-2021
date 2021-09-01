import ApiStore from "../../shared/store/ApiStore";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  RepoItem,
  GetOrganizationRepoBranchesParams,
} from "./types";
import { HTTPMethod, ApiResponse } from "../../shared/store/ApiStore/types";
import { BranchItem } from "./types";

const BASE_URL = "https://api.github.com";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(BASE_URL);

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/orgs/${params.organizationName}/repos`,
    });
  }

  async getOrganizationRepoBranches(
    params: GetOrganizationRepoBranchesParams
  ): Promise<ApiResponse<BranchItem[], any>> {
    return await this.apiStore.request({
      data: {},
      endpoint: `/repos/${params.organizationName}/${params.repoName}/branches`,
      headers: {},
      method: HTTPMethod.GET,
    });
  }
}
