export default {
  name: 'animal',
  type: 'document',
  title: 'Animal',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      type: 'cloudinary.asset',
      name: 'image',
      description: 'This asset is served from Cloudinary',
    },
  ],
};
