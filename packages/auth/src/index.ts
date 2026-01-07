import { db } from "@chorba/db";
import * as schema from "@chorba/db/schema/auth";
import { env } from "@chorba/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",

    schema: schema,
  }),
  trustedOrigins: [env.CORS_ORIGIN],
  emailAndPassword: { enabled: true },
  advanced: {
    defaultCookieAttributes: { sameSite: "none", secure: true, httpOnly: true },
  },
  plugins: [],
});
