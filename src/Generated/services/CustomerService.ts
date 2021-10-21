/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer } from '../models/customer';
import type { errorResponse } from '../models/errorResponse';
import type { newCustomer } from '../models/newCustomer';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Get a Customer by customerId
     * Get a Customer by customerId
     * @param customerId Customer Id
     * @returns customer OK
     * @throws ApiError
     */
    public static async getCustomer(
        customerId: string,
    ): Promise<customer> {
        const result = await __request({
            method: 'GET',
            path: `/customer/${customerId}`,
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
     * Update a Customer
     * Update a Customer
     * @param customerId Customer Id
     * @param requestBody
     * @returns customer OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async putCustomer(
        customerId: string,
        requestBody: newCustomer,
    ): Promise<customer | errorResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/customer/${customerId}`,
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

    /**
     * Delete a Customer
     * Delete a Customer
     * @param customerId Customer Id
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteCustomer(
        customerId: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/customer/${customerId}`,
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
     * Add a new Customer
     * Add a new Customer
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns customer Created
     * @throws ApiError
     */
    public static async postCustomer(
        requestBody: newCustomer,
    ): Promise<errorResponse | customer> {
        const result = await __request({
            method: 'POST',
            path: `/customer`,
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

}