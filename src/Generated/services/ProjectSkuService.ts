/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createProjectSkuRequest } from '../models/createProjectSkuRequest';
import type { errorResponse } from '../models/errorResponse';
import type { project } from '../models/project';
import type { projectSku } from '../models/projectSku';
import type { projectSkuCollection } from '../models/projectSkuCollection';
import { request as __request } from '../core/request';

export class ProjectSkuService {

    /**
     * Get ProjectSku relations for a Project.
     * Get ProjectSku relations for a Project.
     * @param projectId Project Id
     * @returns projectSkuCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProjectSkuCollection(
        projectId: string,
    ): Promise<projectSkuCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/project/${projectId}/sku`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Post new ProjectSku relations
     * Post new ProjectSku relations
     * @param projectId Project Id
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns project created
     * @throws ApiError
     */
    public static async postProjectSkuCollection(
        projectId: string,
        requestBody: createProjectSkuRequest,
    ): Promise<errorResponse | project> {
        const result = await __request({
            method: 'POST',
            path: `/project/${projectId}/sku`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get ProjectSku relation entity.
     * Get ProjectSku relation entity.
     * @param projectId Project Id
     * @param skuCode Sku Code
     * @returns projectSku OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProjectSku(
        projectId: string,
        skuCode: string,
    ): Promise<projectSku | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/project/${projectId}/sku/${skuCode}`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Delete ProjectSku relation
     * Delete a ProjectSku relation
     * @param projectId Project Id
     * @param skuCode Sku Code
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteProjectSku(
        projectId: string,
        skuCode: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/project/${projectId}/sku/${skuCode}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}