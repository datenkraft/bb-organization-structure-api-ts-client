/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error } from './error';
import type { projectSku } from './projectSku';

export type deleteProjectConflictError = (error & {
    /**
     * Extra
     */
    extra?: {
        /**
         * ProjectSkus
         */
        projectSkus?: Array<projectSku>,
    },
});
