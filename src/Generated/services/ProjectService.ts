/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getProjectCollectionResponse } from '../models/getProjectCollectionResponse';
import type { newProject } from '../models/newProject';
import type { project } from '../models/project';
import { request as __request } from '../core/request';

export class ProjectService {

    /**
     * Get a list of Projects
     * Get a list of Projects
     * @param filterAccountingProfileId Accounting Profile Id filter
     * @returns getProjectCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProjectCollection(
        filterAccountingProfileId?: string,
    ): Promise<getProjectCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/project`,
            query: {
                'filter[accountingProfileId]': filterAccountingProfileId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Post a new Project
     * Post a new Project
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns project created
     * @throws ApiError
     */
    public static async postProject(
        requestBody: newProject,
    ): Promise<errorResponse | project> {
        const result = await __request({
            method: 'POST',
            path: `/project`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a Project by projectId
     * Get a Project by projectId
     * @param projectId Project Id
     * @returns project OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getProject(
        projectId: string,
    ): Promise<project | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/project/${projectId}`,
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
     * Delete Project by projectId
     * Delete a Project by projectId
     * @param projectId Project Id
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteProject(
        projectId: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/project/${projectId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update a Project
     * Update one or more fields of a Project
     * @param projectId Project Id
     * @param requestBody
     * @returns project OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchProject(
        projectId: string,
        requestBody: newProject,
    ): Promise<project | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/project/${projectId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}