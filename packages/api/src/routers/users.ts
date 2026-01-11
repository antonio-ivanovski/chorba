import { protectedProcedure } from "../index";
import * as handlers from "../handlers/users";

export const usersRouter = {
  me: protectedProcedure
    .output(handlers.meOutputSchema)
    .handler(handlers.meHandler),

  update: protectedProcedure
    .input(handlers.updateInputSchema)
    .output(handlers.updateOutputSchema)
    .handler(handlers.updateHandler),
};

