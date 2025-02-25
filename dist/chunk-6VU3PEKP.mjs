import {
  env
} from "./chunk-T7YZC4SA.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis = new Redis(env.REDIS_URL);

export {
  redis
};
