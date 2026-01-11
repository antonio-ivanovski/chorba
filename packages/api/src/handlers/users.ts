import { z } from "zod";
import type { Context } from "../context";

export const meOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type MeOutput = z.infer<typeof meOutputSchema>;

export const meHandler = async ({ context }: { context: Context }): Promise<MeOutput> => {
  // In a real implementation, we would fetch fresh data from DB
  // matching context.session.user.id
  const user = context.session?.user;

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export const updateInputSchema = z.object({
  name: z.string().min(2).optional(),
});

export type UpdateInput = z.infer<typeof updateInputSchema>;

export const updateOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type UpdateOutput = z.infer<typeof updateOutputSchema>;

export const updateHandler = async ({
  input,
  context,
}: {
  input: UpdateInput;
  context: Context;
}): Promise<UpdateOutput> => {
  // MOCKED: Update user in DB
  // Ensure user is authenticated (handled by protectedProcedure, but double check context)
   if (!context.session?.user) {
    throw new Error("Unauthorized");
  }
  
  return {
    id: context.session.user.id,
    name: input.name ?? context.session.user.name,
  };
};
