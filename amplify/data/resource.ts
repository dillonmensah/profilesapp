import { defineData, a } from '@aws-amplify/backend';

export const data = defineData({
  schema: a.schema({
    Profile: a
      .model({
        email: a.string(),
      })
      .authorization((allow) => [allow.publicApiKey()]),
  }),
});