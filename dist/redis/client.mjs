import {
  env
} from "../chunk-NFTOJHVO.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis = new Redis(env.REDIS_URL);
export {
  redis
};
