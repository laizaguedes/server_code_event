import {
  accessInviteLinkRoute
} from "./chunk-6ISNEXJH.mjs";
import {
  getRankingRoute
} from "./chunk-NENLIZMM.mjs";
import {
  getSubscriberInvitesClicksRoute
} from "./chunk-EVO5L2UI.mjs";
import {
  getSubscriberInvitesCountRoute
} from "./chunk-UGFPIOOI.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-JVRYI6KJ.mjs";
import {
  subscribeToEventRoute
} from "./chunk-AWLGFHNH.mjs";
import "./chunk-DAIJO2A6.mjs";
import "./chunk-76WOVQ2F.mjs";
import "./chunk-NNGOU7IT.mjs";
import "./chunk-CAGRLTI6.mjs";
import "./chunk-NCBYNWWU.mjs";
import "./chunk-7C2ZELRU.mjs";
import "./chunk-OW2G55XZ.mjs";
import "./chunk-WOLSDXJ7.mjs";
import "./chunk-IKAYSH5B.mjs";
import "./chunk-6VU3PEKP.mjs";
import {
  env
} from "./chunk-T7YZC4SA.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors, {
  origin: true
});
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Receita Connect",
      version: "0.0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInvitesClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ host: "0.0.0.0", port: env.PORT || 3333 }).then(() => {
  console.log("HTTP server runing!");
});
