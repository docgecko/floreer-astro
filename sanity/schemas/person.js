export default {
  name: 'person',
  type: 'document',
  title: 'Person',
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
      name: 'name',
      type: 'string',
      title: 'Name',
      required: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      required: true,
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      required: true,
    },
    {
      name: 'image',
      type: 'reference',
      title: 'Image',
      to: [
        {type: 'photo'},
      ]
    },
    {
      name: 'Location',
      type: 'string',
      title: 'Location',
      required: true,
    },
    {
      name: 'bio',
      type: 'array',
      title: 'Bio',
      required: true,
      of: [
        {
          type: 'block',
        }
      ]
    },
    {
      name: 'expertise',
      type: 'array',
      title: 'Expertise',
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