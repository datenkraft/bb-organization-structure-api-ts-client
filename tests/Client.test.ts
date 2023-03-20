import { ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { OrganizationStructureApiClient } from "../dist";
import { AuthRoleApi } from "../dist/Generated";

describe("Client Test (staging)", () => {
  test("Initialize and use the generated Client", (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? "",
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? "",
      oAuthTokenHost:
        "https://authentication-api.staging.backbone.datenkraft.info",
    };

    OrganizationStructureApiClient.getApiConfig(
      configOptions,
      "https://organization-structure-api.staging.backbone.datenkraft.info/v1"
    )
      .then((config) => {
        const authRoleApi = new AuthRoleApi(config);

        authRoleApi
          .getAuthRoleCollection()
          .then(({ data: response }) => {
            if (response instanceof Array) {
              expect(response).toContainEqual({
                roleCode:
                  "bb-organization-structure-api/auth_access-management",
                name: "Role for access management",
              });
              done();
            } else {
              done("Auth Role Collection not found");
            }
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
