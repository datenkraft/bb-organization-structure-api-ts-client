/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getIdentityCollectionResponse } from '../models/getIdentityCollectionResponse';
import type { identity } from '../models/identity';
import type { newIdentity } from '../models/newIdentity';
import { request as __request } from '../core/request';

export class IdentityService {

    /**
     * Get a list of Identities
     * Get a list of Identities
     * @param filterEmail Email filter
     * @returns getIdentityCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getIdentityCollection(
        filterEmail?: string,
    ): Promise<getIdentityCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/identity`,
            query: {
                'filter[email]': filterEmail,
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
     * Post a new Identity
     * Post a new Identity
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns identity created
     * @throws ApiError
     */
    public static async postIdentity(
        requestBody: newIdentity,
    ): Promise<errorResponse | identity> {
        const result = await __request({
            method: 'POST',
            path: `/identity`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get an Identity by identityId
     * Get an Identity by identityId
     * @param identityId Identity Id
     * @returns identity OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getIdentity(
        identityId: string,
    ): Promise<identity | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/identity/${identityId}`,
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
     * Delete an Identity by identityId
     * Delete an Identity by identityId
     * @param identityId Identity Id
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteIdentity(
        identityId: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/identity/${identityId}`,
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
     * Update an Identity
     * Update one or more fields of an Identity
     * @param identityId Identity Id
     * @param requestBody
     * @returns identity OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchIdentity(
        identityId: string,
        requestBody: newIdentity,
    ): Promise<identity | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/identity/${identityId}`,
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

}