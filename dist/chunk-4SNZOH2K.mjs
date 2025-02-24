import {
  getSubscriberInvitesCount
} from "./chunk-H5PDAEMA.mjs";

// src/routes/get-subscriber-invites-count-route.ts
import z from "zod";
var getSubscriberInvitesCountRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      //validar o que está vindo do body
      schema: {
        summary: "Get subscriber ranking invites count",
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
      const { count } = await getSubscriberInvitesCount({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInvitesCountRoute
};
