import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";

const client = generateClient<Schema>();

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const { userAttributes } = event.request;

  await client.models.Todo.create({
    content: userAttributes.email,
  });

  return event;
};