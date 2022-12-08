export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      required: true,
    },
    {
      name: 'image',
      type: 'reference',
      title: 'Image',
      to: [
        {type: 'photo'},
      ],
    },
  ],
}