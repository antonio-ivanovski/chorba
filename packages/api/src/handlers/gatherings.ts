import { z } from "zod";
import type { Context } from "../context";

export const listInputSchema = z.object({
  groupId: z.string(),
});

export type ListInput = z.infer<typeof listInputSchema>;

// Extracted nested schema
export const gatheringItemSchema = z.object({
  id: z.string(),
  restaurantName: z.string(),
  date: z.number(), // timestamp
  initiatorName: z.string().optional(),
  photoUrl: z.string().optional(),
});

export type GatheringItem = z.infer<typeof gatheringItemSchema>;

export const listOutputSchema = z.array(gatheringItemSchema);

export type ListOutput = z.infer<typeof listOutputSchema>;

export const listHandler = async ({
  input: _input,
}: {
  input: ListInput;
  context: Context;
}): Promise<ListOutput> => {
  // MOCKED: List gatherings for group
  return [
    {
      id: "gat_1",
      restaurantName: "Old House",
      date: Date.now(),
      initiatorName: "Alice",
    },
  ];
};

export const createInputSchema = z.object({
  groupId: z.string(),
  restaurantName: z.string(),
  date: z.number(),
  initiatorId: z.string().optional(),
  participantIds: z.array(z.string()),
  photoUrl: z.string().optional(),
});

export type CreateInput = z.infer<typeof createInputSchema>;

export const createOutputSchema = z.object({
  id: z.string(),
});

export type CreateOutput = z.infer<typeof createOutputSchema>;

export const createHandler = async ({
  input: _input,
}: {
  input: CreateInput;
  context: Context;
}): Promise<CreateOutput> => {
  // MOCKED: Create new gathering
  return {
    id: "gat_new_" + Date.now(),
  };
};

export const updateInputSchema = z.object({
  gatheringId: z.string(),
  restaurantName: z.string().optional(),
  date: z.number().optional(),
  participantIds: z.array(z.string()).optional(),
  photoUrl: z.string().optional(),
});

export type UpdateInput = z.infer<typeof updateInputSchema>;

export const updateOutputSchema = z.object({
  id: z.string(),
  updated: z.boolean(),
});

export type UpdateOutput = z.infer<typeof updateOutputSchema>;

export const updateHandler = async ({
  input,
}: {
  input: UpdateInput;
  context: Context;
}): Promise<UpdateOutput> => {
  // MOCKED: Update gathering
  return {
    id: input.gatheringId,
    updated: true,
  };
};

export const getInputSchema = z.object({
  gatheringId: z.string(),
});

export type GetInput = z.infer<typeof getInputSchema>;

// Extracted nested schemas for Get
export const participantSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Participant = z.infer<typeof participantSchema>;

export const initiatorSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export type Initiator = z.infer<typeof initiatorSchema>;

export const getOutputSchema = z.object({
  id: z.string(),
  restaurantName: z.string(),
  date: z.number(),
  initiator: initiatorSchema.optional(),
  participants: z.array(participantSchema),
  photoUrl: z.string().optional(),
});

export type GetOutput = z.infer<typeof getOutputSchema>;

export const getHandler = async ({
  input,
}: {
  input: GetInput;
  context: Context;
}): Promise<GetOutput> => {
  // MOCKED: Get gathering details
  return {
    id: input.gatheringId,
    restaurantName: "Old House",
    date: Date.now(),
    initiator: { id: "u1", name: "Alice" },
    participants: [
      { id: "u1", name: "Alice" },
      { id: "u2", name: "Bob" },
    ],
  };
};
