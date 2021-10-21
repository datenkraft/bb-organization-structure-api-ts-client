/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error } from './error';
import type { projectSku } from './projectSku';

export type postProjectSkuCollectionConflictError = (error & {
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
