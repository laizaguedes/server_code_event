import {
  getSubscriberInviteClicks
} from "./chunk-K3PLGQH2.mjs";

// src/routes/get-subscriber-invite-clicks-route.ts
import z from "zod";
var getSubscriberInviteClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      //validar o que está vindo do body
      schema: {
        summary: "Get subscriber ranking invite clicks count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInviteClicks({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInviteClicksRoute
};
