import { createClient } from 'contentful';
import invariant from 'tiny-invariant';

const spaceId = import.meta.env.SPACE_ID;
const environmentId = import.meta.env.ENVIRONMENT_ID;
const contentDeliveryApiKey = import.meta.env.CONTENT_DELIVERY_API_KEY;

invariant(spaceId, 'spaceId is required');
invariant(environmentId, 'environmentId is required');
invariant(contentDeliveryApiKey, 'contentDeliveryApiKey is required');

const client = createClient({
  space: spaceId,
  environment: environmentId,
  accessToken: contentDeliveryApiKey,
});

export { client };
