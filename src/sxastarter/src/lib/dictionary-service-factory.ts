import {
  DictionaryService,
  RestDictionaryService,
  GraphQLDictionaryService,
  constants,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

export class DictionaryServiceFactory {
  create(): DictionaryService {
    return process.env.FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLDictionaryService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
          jssAppTemplateId:'{93B6AFDD-E017-4AD2-BE53-9B4C8ABE7F9E}',
          rootItemId:'{93B6AFDD-E017-4AD2-BE53-9B4C8ABE7F9E}'
          /*
          rootItem ID given here is  /sitecore/templates/Project/ChartwellSites/Page
           jssAppTemplateId:'{9ED66404-64C9-4122-90E1-869CB3CEA566}',
           rootItemId:'{9BE3118E-B5C1-4E8B-8BD4-0B1480EC3973}'
            The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current
            app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
            otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
            rootItemId: '{GUID}'
          */
        })
      : new RestDictionaryService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
        });
  }
}

export const dictionaryServiceFactory = new DictionaryServiceFactory();
