/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseCustomer } from './baseCustomer';

export type customer = (baseCustomer & {
    /**
     * Customer Id
     */
    customerId?: string,
});
