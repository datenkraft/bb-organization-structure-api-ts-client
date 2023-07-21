/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseCustomer } from './baseCustomer';

export type customer = ({
    /**
     * Customer Id
     */
    customerId?: string,
} & baseCustomer);
