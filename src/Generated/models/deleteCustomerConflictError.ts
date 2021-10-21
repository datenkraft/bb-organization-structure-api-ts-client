/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error } from './error';
import type { identity } from './identity';
import type { project } from './project';

export type deleteCustomerConflictError = (error & {
    /**
     * Extra
     */
    extra?: {
        /**
         * Projects
         */
        projects?: Array<project>,
        /**
         * Identites
         */
        identites?: Array<identity>,
    },
});
