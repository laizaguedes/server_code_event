// src/env.ts
import "dotenv/config";
import { z } from "zod";
var envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  WEB_URL: z.string().url().default("http://localhost:3000")
});
var env = envSchema.parse(process.env);

export {
  env
};
