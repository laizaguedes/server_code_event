import {
  env
} from "./chunk-NFTOJHVO.mjs";
import {
  subscriptions
} from "./chunk-7C2ZELRU.mjs";

// src/drizzle/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var pg = postgres(env.POSTGRES_URL);
var db = drizzle(pg, {
  schema: {
    subscriptions
  }
});

export {
  pg,
  db
};
