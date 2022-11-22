export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      required: true,
    },
    {
      name: 'item',
      type: 'string',
      title: 'Item',
      required: true,
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      required: true,
    },
    {
      name: 'site_navigation',
    }
  ],
}