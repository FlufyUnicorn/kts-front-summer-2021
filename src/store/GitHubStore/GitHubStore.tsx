import ApiStore from '../../shared/store/ApiStore';
import {ApiResp, GetOrganizationReposListParams, IGitHubStore, RepoItem} from "./types";
import {HTTPMethod} from "../../shared/store/ApiStore/types";

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com/'); // TODO: не забудьте передать baseUrl в конструктор

    // TODO: реализовать интерфейс IGitHubStore

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
        const result = await this.apiStore.request({
            method: HTTPMethod.GET,
            data: {},
            headers: {},
            endpoint: `orgs/${params.organizationName}/repos`
        });

        const repos = result.data.map((item: { id: any; full_name: string; private: boolean; }) =>
            ({
            id: Number(item.id),
            fullName: item.full_name,
            private: item.private,
        }));

        return {
            status: result.status,
            data: repos,
        }
    }
}
