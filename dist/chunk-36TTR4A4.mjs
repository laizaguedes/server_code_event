import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/access-invite-link.ts
async function accessInviteLink({
  subscriberId
}) {
  await redis.hincrby("referral:access-count", subscriberId, 1);
}

export {
  accessInviteLink
};
