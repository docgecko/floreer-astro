export default {
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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