import {
  subscriptions
} from "./chunk-7C2ZELRU.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

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
