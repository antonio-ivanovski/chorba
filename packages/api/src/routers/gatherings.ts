import { protectedProcedure } from "../index";
import * as handlers from "../handlers/gatherings";

export const gatheringsRouter = {
  list: protectedProcedure
    .input(handlers.listInputSchema)
    .output(handlers.listOutputSchema)
    .handler(handlers.listHandler),

  create: protectedProcedure
    .input(handlers.createInputSchema)
    .output(handlers.createOutputSchema)
    .handler(handlers.createHandler),

  update: protectedProcedure
    .input(handlers.updateInputSchema)
    .output(handlers.updateOutputSchema)
    .handler(handlers.updateHandler),

  get: protectedProcedure
    .input(handlers.getInputSchema)
    .output(handlers.getOutputSchema)
    .handler(handlers.getHandler),
};

