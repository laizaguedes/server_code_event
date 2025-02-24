import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/get-subscriber-ranking-position.ts
async function getSubscriberRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank === null) {
    return { position: null };
  }
  return { position: rank + 1 };
}

export {
  getSubscriberRankingPosition
};
