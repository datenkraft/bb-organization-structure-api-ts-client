/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseIdentity } from './baseIdentity';

export type identity = (baseIdentity & {
    /**
     * Identity Id
     */
    identityId?: string,
});
