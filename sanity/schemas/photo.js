export default {
    name: 'photo',
    type: 'document',
    title: 'Photo',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        required: true,
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
     {
        name: 'owner_name',
        type: 'string',
        title: 'Owner Name',
        options: {
            maxLength: 256,
        },
      },
      {
        name: 'owner_url',
        type: 'url',
        title: 'Owner URL',
        validation: Rule => Rule.uri({
            scheme: ['http', 'https'],
        }),
      },
      {
        name: 'source_name',
        type: 'string',
        title: 'Source Name',
        options: {
            maxLength: 256,
        },
      },
      {
        name: 'source_url',
        type: 'url',
        title: 'Source URL',
        validation: Rule => Rule.uri({
            scheme: ['http', 'https'],
        }),
      }
    ],
  }
