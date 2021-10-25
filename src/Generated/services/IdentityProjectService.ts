/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getIdentityProjectCollectionResponse } from '../models/getIdentityProjectCollectionResponse';
import { request as __request } from '../core/request';

export class IdentityProjectService {

    /**
     * Get a list of Identities and the Projects they are related to
     * Get a list of Identities and the Projects they are related to
     * @returns getIdentityProjectCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getIdentityProjectCollection(): Promise<getIdentityProjectCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/identity-project`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}