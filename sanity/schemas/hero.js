export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'hero_title',
      type: 'array',
      title: 'Hero Title',
      of: [
        {
          type: 'block',
        }
      ]
    },
    {
      name: 'hero_description',
      type: 'array',
      title: 'Hero Description',
      of: [
        {
          type: 'block',
        }
      ]
    },
    {
      name: 'hero_image',
      type: 'reference',
      title: 'Hero Image',
      required: true,
      to: [{type: 'photo'}], 
    },
  ],
}