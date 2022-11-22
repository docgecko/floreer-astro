import sanityClient from '@lib/sanityClient';

export const getPage = async (pageTitle) => {
  const query = `*[_type == "page" && page_title == "${pageTitle}"][0]{
    ...,
    'hero_title': hero->hero_title,
    'hero_description': hero->hero_description,
    'hero_image': hero->hero_image->image.asset->url,
    'hero_image_owner_name': hero->hero_image->owner_name,
    'hero_image_owner_url': hero->hero_image->owner_url,
    'hero_image_source_name': hero->hero_image->source_name,
    'hero_image_source_url': hero->hero_image->source_url,
  }`;
  console.log({ query });
  const data = await sanityClient.fetch(query);

  console.log({ data });
  return data;
}
