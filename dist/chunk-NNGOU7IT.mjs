import {
  schema
} from "./chunk-CAGRLTI6.mjs";
import {
  db
} from "./chunk-NCBYNWWU.mjs";
import {
  redis
} from "./chunk-6VU3PEKP.mjs";

// src/functions/get-ranking.ts
import { inArray } from "drizzle-orm";
async function getRanking() {
  const topThree = await redis.zrevrange("referral:ranking", 0, 2, "WITHSCORES");
  const ranking = {};
  for (let i = 0; i < topThree.length; i += 2) {
    ranking[topThree[i]] = Number.parseInt(topThree[i + 1]);
  }
  const subscribersFromRanking = await db.select().from(schema.subscriptions).where(inArray(schema.subscriptions.id, Object.keys(ranking)));
  const rankingWithScores = subscribersFromRanking.map((subscriber) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      score: ranking[subscriber.id]
    };
  }).sort((a, b) => b.score - a.score);
  return { rankingWithScores };
}

export {
  getRanking
};
