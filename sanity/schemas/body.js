export default {
  name: 'body',
  type: 'document',
  title: 'Body',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        }
      ]
    },
  ],
}