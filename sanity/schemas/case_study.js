export default {
    name: 'case_study',
    type: 'document',
      title: 'Case Study',
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
        required: true,
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
        required: true,
        to: [
          {type: 'hero'},
        ]
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
        required: true,
      },
      {
        name: 'featured',
        type: 'boolean',
        title: 'Featured',
        required: true,
      },
      {
        name: 'partners',
        type: 'array',
        title: 'Partners',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'client'},
            ]
          }
        ]
      },
      {
        name: 'services',
        type: 'array',
        title: 'Services',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'service'},
            ]
          }
        ]
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
      {
        name: 'challenge',
        type: 'array',
        title: 'Challenge',
        of: [
          {
            type: 'block',
          }
        ]
      },
      {
        name: 'solution',
        type: 'array',
        title: 'Solution',
        of: [
          {
            type: 'block',
          }
        ]
      },
      {
        name: 'results',
        type: 'array',
        title: 'Results',
        of: [
          {
            type: 'block',
          }
        ]
      },
    ],
  }