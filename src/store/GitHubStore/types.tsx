/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */
import {StatusHTTP} from "../../shared/store/ApiStore/types";

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
}

export interface GetOrganizationReposListParams {
    organizationName: string;
}

export interface RepoItem {
    id: number;
    fullName: string;
    private: boolean;
}

export interface ApiResp<T> {
    data: T;
    status: StatusHTTP;
}