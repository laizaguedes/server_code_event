import {
  getRanking
} from "./chunk-NNGOU7IT.mjs";

// src/routes/get-ranking-route.ts
import { z } from "zod";
var getRankingRoute = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "Get ranking",
        operationId: "getRanking",
        tags: ["referral"],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number()
              })
            )
          })
        }
      }
    },
    async () => {
      const { rankingWithScores } = await getRanking();
      return {
        ranking: rankingWithScores
      };
    }
  );
};

export {
  getRankingRoute
};
