export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'category',
      type: 'boolean',
      title: 'Category',
      required: true,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        }
      ]
    },
    {
      name: 'hero',
      type: 'reference',
      title: 'Hero',
      to: [
        {type: 'hero'},
      ]
    },
    {
      name: 'service',
      type: 'array',
      title: 'Service',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'service'},
          ]
        }
      ]
    },  
  ],
}