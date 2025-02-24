import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/get-subscriber-invites-count.ts
async function getSubscriberInvitesCount({
  subscriberId
}) {
  const countInvites = await redis.zscore("referral:ranking", subscriberId);
  return { count: countInvites ? Number.parseInt(countInvites) : 0 };
}

export {
  getSubscriberInvitesCount
};
