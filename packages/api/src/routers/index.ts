import type { RouterClient } from "@orpc/server";
import { protectedProcedure, publicProcedure } from "../index";

import { gatheringsRouter } from "./gatherings";
import { groupsRouter } from "./groups";
import { usersRouter } from "./users";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return { message: "This is private", user: context.session?.user };
  }),
  groups: groupsRouter,
  gatherings: gatheringsRouter,
  users: usersRouter,
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
