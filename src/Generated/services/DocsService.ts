/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class DocsService {

    /**
     * Get the openapi documentation as json
     * Get the openapi documentation as json
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOpenApi(): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/docs`,
            errors: {
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get the openapi documentation in the specified format (yaml or json, fallback is json)
     * Get the openapi documentation in the specified format (yaml or json, fallback is json)
     * @param format Openapi file format
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOpenApiInFormat(
        format: 'yaml' | 'json',
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/docs/openapi.${format}`,
            errors: {
                500: `Server error`,
            },
        });
        return result.body;
    }

}