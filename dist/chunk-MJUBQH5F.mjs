import {
  accessInviteLink
} from "./chunk-36TTR4A4.mjs";
import {
  redis
} from "./chunk-BO77YDHI.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

// src/routes/access-invite-link-route.ts
import z from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      //validar o que está vindo do body
      schema: {
        summary: "Access invite link and redirects user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          302: z.null()
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      console.log(subscriberId);
      await accessInviteLink({ subscriberId });
      console.log(await redis.hgetall("referral:access-count"));
      const redirectUrl = new URL(env.WEB_URL);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
