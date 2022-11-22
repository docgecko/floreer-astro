export default {
    name: 'policy',
    type: 'document',
      title: 'Policy',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        required: true,
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
      },
      {
        name: 'policy_title',
        type: 'string',
        title: 'Policy Title',
      },
      {
        name: 'policy_description',
        type: 'array',
        title: 'Policy Description',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'policy_last_updated',
        type: 'datetime',
        title: 'Policy Last Updated',
        required: true,
      },
    ],
  }