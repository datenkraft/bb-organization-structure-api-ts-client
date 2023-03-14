import { ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { organizationStructureApiClient } from "../dist";
import { AuthRoleApi } from "../dist/Generated";

describe("Client Test (staging)", () => {
  test("Initialize and use the generated Client", (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? "",
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? "",
      oAuthTokenHost:
        "https://authentication-api.staging.backbone.datenkraft.info",
    };

    organizationStructureApiClient
      .getApiConfig(
        configOptions,
        "https://organization-structure-api.staging.backbone.datenkraft.info/v1"
      )
      .then((config) => {
        const authRoleApi = new AuthRoleApi(config);

        authRoleApi
          .getAuthRoleCollection()
          .then((data) => {
            if (data instanceof Array) {
              expect(data).toContain({
                roleCode: "bb-accounting-profile-api/auth_access-management",
                name: "Role for access management",
              });
            }
            done();
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
