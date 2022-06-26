import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
} from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { document } from '@keystone-6/fields-document';
import { Lists } from '.keystone/types';
import 'dotenv/config';

export const lists: Lists = {
  Image: list({
    fields: {
      name: text(),
      alternativeText: text({
        label: 'Alt Text',
      }),
      caption: text(),
      sourceFromCloudinary: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
          apiKey: process.env.CLOUDINARY_API_KEY || '',
          apiSecret: process.env.CLOUDINARY_API_SECRET || '',
          folder: process.env.CLOUDINARY_API_FOLDER || '',
        },
      }),
    },
  }),
  SocialMedia: list({
    fields: {
      name: text(),
      description: text(),
      url: text(),
      icon: text(),
      order: integer(),
    },
  }),
  Service: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text(),
      rate: integer(),
      turnaroundTime: text(),
    },
  }),
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
  }),
  Post: list({
    fields: {
      title: text(),
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        defaultValue: 'draft',
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp(),
      author: relationship({
        ref: 'User.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name', 'email'] },
        },
      }),
      tags: relationship({
        ref: 'Tag.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
        many: true,
      }),
    },
  }),
  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      posts: relationship({ ref: 'Post.tags', many: true }),
    },
  }),
};
