/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error } from './error';
import type { identity } from './identity';

export type identityConflictError = (error & {
    /**
     * Extra
     */
    extra?: {
        /**
         * Identites
         */
        identites?: Array<identity>,
    },
});
