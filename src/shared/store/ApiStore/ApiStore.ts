import {ApiResponse, IApiStore, RequestParams, HTTPMethod} from "./types";

const baseUrl = 'https://api.github.com/';
export default class ApiStore implements IApiStore {
    public baseUrl:string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        let response;
        try {
            response = await fetch(baseUrl + params.endpoint, {
                method: params.method,
            });
        } catch(error) {
            console.log(error);

            return {
                success: false,
                data: {} as ErrorT,
                status: response?.status || 500,
            }
        }

        const data = await response.json();

        return {
            success: true,
            data: data as SuccessT,
            status: response.status,
        };
    }
}