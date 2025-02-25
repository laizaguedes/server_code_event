import {
  subscribeToEvent
} from "./chunk-DAIJO2A6.mjs";

// src/routes/subscribe-to-event-route.ts
import { z } from "zod";
var subscribeToEventRoute = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribe to event",
        tags: ["subscriptions"],
        operationId: "subscribeToEvent",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({ subscriberId: z.string() })
        }
      }
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;
      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        invitedBySubscriberId: referrer || null
      });
      return reply.status(201).send({ subscriberId });
    }
  );
};

export {
  subscribeToEventRoute
};
