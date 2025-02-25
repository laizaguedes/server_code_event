import {
  redis
} from "./chunk-6VU3PEKP.mjs";

// src/functions/get-subscriber-ranking-position.ts
async function getSubscriberRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank === null) {
    return { position: null };
  }
  const position = rank + 1;
  return { position };
}

export {
  getSubscriberRankingPosition
};
