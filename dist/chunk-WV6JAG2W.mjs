import {
  subscribeToEvent
} from "./chunk-CCQUBMUH.mjs";

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
          email: z.string().email()
        }),
        response: {
          201: z.object({
            subscriberId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email } = request.body;
      const { subscriberId } = await subscribeToEvent({
        name,
        email
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
