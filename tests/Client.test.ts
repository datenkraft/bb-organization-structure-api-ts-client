import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {OrganizationStructureApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        OrganizationStructureApiClient.init(
            configOptions,
            'https://organization-structure-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                OrganizationStructureApiClient.Generated.ProjectService
                    .getProject('ba74c99d-d622-4dcd-a1d5-f3db80d0a1c8')
                    .then((project) => {
                        expect(project).toEqual({
                            projectId: 'ba74c99d-d622-4dcd-a1d5-f3db80d0a1c8',
                            customerId: '86cde51c-9fba-4d8b-8ff7-331645b5c31a',
                            name: 'Test Project of Customer A of A',
                            accountingProfileId: 'c4f96d2a-eee7-437f-bf78-622d8a1ae820',
                        });
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});
