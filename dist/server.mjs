import {
  accessInviteLinkRoute
} from "./chunk-MJUBQH5F.mjs";
import {
  getRankingRoute
} from "./chunk-M4SSLBNV.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-UQDWJNJD.mjs";
import {
  getSubscriberInvitesCountRoute
} from "./chunk-4SNZOH2K.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-GAQPV43Z.mjs";
import "./chunk-OPRWD5AX.mjs";
import {
  subscribeToEventRoute
} from "./chunk-JZN7Z5JL.mjs";
import "./chunk-NYOY62FX.mjs";
import "./chunk-36TTR4A4.mjs";
import "./chunk-Q4J6KL5Y.mjs";
import "./chunk-BOD4FIOX.mjs";
import "./chunk-7C2ZELRU.mjs";
import "./chunk-K3PLGQH2.mjs";
import "./chunk-H5PDAEMA.mjs";
import "./chunk-BO77YDHI.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

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
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server runing!");
});
