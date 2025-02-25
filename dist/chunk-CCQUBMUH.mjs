import {
  db
} from "./chunk-URTX3HFY.mjs";
import {
  subscriptions
} from "./chunk-7C2ZELRU.mjs";

// src/functions/subscribe-to-event.ts
async function subscribeToEvent({
  name,
  email
}) {
  const result = await db.insert(subscriptions).values({
    name,
    email
  }).returning();
  const subscriber = result[0];
  return {
    subscriberId: subscriber.id
  };
}

export {
  subscribeToEvent
};
