export default {
    name: 'section',
    type: 'document',
    title: 'Section',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        required: true,
      },
      {
        name: 'section',
        type: 'array',
        title: 'Section',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'body'},
              {type: 'header'},
            ]
          }
        ]
      }
    ]
  }