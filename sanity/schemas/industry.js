export default {
  name: 'industry',
  type: 'document',
  title: 'Industry',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      required: true,
    },
    {
      name: 'category',
      type: 'boolean',
      title: 'Category',
      required: true,
    },
    {
      name: 'industries',
      type: 'array',
      title: 'Industries',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'industry'},
          ]
        }
      ]
    },  
  ],
}