import {
  db
} from "./chunk-BOD4FIOX.mjs";
import {
  subscriptions
} from "./chunk-7C2ZELRU.mjs";
import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/get-ranking.ts
import { inArray } from "drizzle-orm";
async function getRanking() {
  const ranking = await redis.zrevrange("referral:ranking", 0, 2, "WITHSCORES");
  const subscriberIdAndScore = {};
  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1]);
  }
  const subscribers = await db.select().from(subscriptions).where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)));
  const rankingWithScore = subscribers.map((subscriber) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      score: subscriberIdAndScore[subscriber.id]
    };
  }).sort((sub1, sub2) => {
    return sub2.score - sub1.score;
  });
  return { rankingWithScore };
}

export {
  getRanking
};
