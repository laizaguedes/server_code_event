import {
  redis
} from "./chunk-6VU3PEKP.mjs";

// src/functions/get-subscriber-invites-clicks.ts
async function getSubscriberInvitesClicks({
  subscriberId
}) {
  const accessCount = await redis.hget("referral:access-count", subscriberId);
  return { count: accessCount ? Number.parseInt(accessCount) : 0 };
}

export {
  getSubscriberInvitesClicks
};
