import { portableTextToHtml } from 'astro-sanity';

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext);
}