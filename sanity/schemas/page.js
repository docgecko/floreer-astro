export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        required: true,
      },
      {
        name: 'page_title',
        type: 'string',
        title: 'Page Title',
      },
      {
        name: 'page_description',
        type: 'text',
        title: 'Page Description',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        required: true,
      },
      {
        name: 'hero',
        type: 'reference',
        title: 'Hero',
        required: true,
        to: [
          {type: 'hero'},
        ]
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Sections',
        of: [
          {
            type: 'reference',
            to: [{type: 'section'}],
          }
        ]
      }
    ],
  }