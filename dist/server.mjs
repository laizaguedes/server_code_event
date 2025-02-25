import {
  subscribeToEventRoute
} from "./chunk-WV6JAG2W.mjs";
import "./chunk-CCQUBMUH.mjs";
import "./chunk-URTX3HFY.mjs";
import {
  env
} from "./chunk-NFTOJHVO.mjs";
import "./chunk-7C2ZELRU.mjs";

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
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server runing!");
});
