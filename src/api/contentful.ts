import { client } from '@lib/contentful';
import type { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const getSpace = async () => {
  const space = await client.getSpace();
  return space;
};

export const getEntries = async () => {
  const entries = await client.getEntries();
  return entries;
};

export const getEntry = async (entryId: string) => {
  const entry = await client.getEntry(entryId);
  return entry;
};

export const getEntriesByContentTypeBySlug = async (
  contentTypeId: string,
  slug: string
) => {
  const entries = await client.getEntries({
    content_type: contentTypeId,
    'fields.slugId': slug,
  });
  return entries;
};

export const getEntriesByContentType = async (
  contentTypeId: string
): Promise<Entry<unknown>[]> => {
  const entries = await client.getEntries({
    content_type: contentTypeId,
  });
  return entries.items;
};

export const getEntriesBySearch = async (
  contentTypeId: string,
  serviceId: string,
  industryId: string,
  clientId: string
) => {
  const entries = await client.getEntries({
    content_type: contentTypeId,
    'fields.services.sys.id': serviceId,
    'fields.industries.sys.id': industryId,
    'fields.partners.sys.id': clientId,
  });
  return entries;
};

export const getContentType = async (contentTypeId: string) => {
  const entries = await client.getEntries({
    content_type: contentTypeId,
  });
  return entries;
};

export const getEntriesByQuery = async (query: string) => {
  const entries = await client.getEntries({
    query,
  });
  return entries;
};

export const convertRichTextPropertyToHTML = (rawRichTextField: any) => {
  return documentToHtmlString(rawRichTextField);
};
