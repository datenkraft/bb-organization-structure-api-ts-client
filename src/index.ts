import { Config, ConfigOptions, Auth } from '@datenkraft/bb-base-api-ts-client';
import { OpenAPI } from './Generated';
import * as GeneratedClient from './Generated/index';

export namespace OrganizationStructureApiClient {
  export async function init(
      configOptions: ConfigOptions,
      endpointUrl: string | null = null
  ) {
    OpenAPI.BASE = endpointUrl ?? process.env.X_DATENKRAFT_ORGANIZATION_STRUCTURE_API_URL ?? '';
    OpenAPI.TOKEN = await new Auth(new Config(configOptions)).getAccessToken();
  }

  // eslint-disable-next-line no-unused-vars
  export import Generated = GeneratedClient;
}
