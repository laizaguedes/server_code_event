import {
  getSubscriberInvitesClicks
} from "./chunk-OW2G55XZ.mjs";

// src/routes/get-subscriber-invites-clicks-route.ts
import { z } from "zod";
var getSubscriberInvitesClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber ranking invites clicks count",
        operationId: "getSubscriberInviteClicks",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({ count: z.number() })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInvitesClicks({
        subscriberId
      });
      return { count };
    }
  );
};

export {
  getSubscriberInvitesClicksRoute
};
