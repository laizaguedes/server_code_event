import {
  subscribeToEvent
} from "./chunk-NYOY62FX.mjs";

// src/routes/subscribe-to-event-route.ts
import z from "zod";
var subscribeToEventRoute = async (app) => {
  app.post(
    "/subscriptions",
    {
      //validar o que está vindo do body
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["subscription"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({
            subscriberId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;
      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        referrerId: referrer
      });
      return reply.status(201).send({
        subscriberId
      });
    }
  );
};

export {
  subscribeToEventRoute
};
