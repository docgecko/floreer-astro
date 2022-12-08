import sanityClient from '@sanity/client';

const options = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION, // use current UTC date - see "specifying API version"!
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
};

export default sanityClient(options);