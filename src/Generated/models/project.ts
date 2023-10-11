/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseProject } from './baseProject';

export type project = (baseProject & {
    /**
     * Project Id
     */
    projectId?: string,
});
