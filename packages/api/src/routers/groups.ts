import { protectedProcedure } from "../index";
import * as handlers from "../handlers/groups";

export const groupsRouter = {
  list: protectedProcedure
    .output(handlers.listOutputSchema)
    .handler(handlers.listHandler),

  create: protectedProcedure
    .input(handlers.createInputSchema)
    .output(handlers.createOutputSchema)
    .handler(handlers.createHandler),

  get: protectedProcedure
    .input(handlers.getInputSchema)
    .output(handlers.getOutputSchema)
    .handler(handlers.getHandler),

  join: protectedProcedure
    .input(handlers.joinInputSchema)
    .output(handlers.joinOutputSchema)
    .handler(handlers.joinHandler),
};

