import { env } from "@chorba/env/server";
import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

const client = new SQL(env.DATABASE_URL!, { create: true });
export const db = drizzle({ client });
