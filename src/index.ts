import { Auth, Config, ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { Configuration } from "./Generated";

export namespace organizationStructureApiClient {
  export async function getApiConfig(
    configOption: ConfigOptions,
    endpointUrl: string | null = null
  ) {
    return new Configuration({
      basePath:
        endpointUrl ??
        process.env.X_DATENKRAFT_ORGANIZATION_STRUCTURE_API_URL ??
        "",
      accessToken: await new Auth(new Config(configOption)).getAccessToken(),
    });
  }
}
