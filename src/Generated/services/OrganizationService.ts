/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { organization } from '../models/organization';
import { request as __request } from '../core/request';

export class OrganizationService {

    /**
     * Get an Organization by organizationId
     * Get an Organization by organizationId
     * @param organizationId Organization Id
     * @returns organization OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrganization(
        organizationId: string,
    ): Promise<organization | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/${organizationId}`,
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