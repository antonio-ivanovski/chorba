import { z } from "zod";
import type { Context } from "../context";

// Extracted nested schema
export const groupItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  memberCount: z.number(),
  role: z.enum(["admin", "member"]),
});

export type GroupItem = z.infer<typeof groupItemSchema>;

export const listOutputSchema = z.array(groupItemSchema);

export type ListOutput = z.infer<typeof listOutputSchema>;

export const listHandler = async ({}: { context: Context }): Promise<ListOutput> => {
  // MOCKED: List groups user belongs to
  return [
    {
      id: "g1",
      name: "Chorba Enjoyers",
      description: "We love soup",
      memberCount: 5,
      role: "admin" as const,
    },
  ];
};

export const createInputSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

export type CreateInput = z.infer<typeof createInputSchema>;

export const createOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type CreateOutput = z.infer<typeof createOutputSchema>;

export const createHandler = async ({
  input,
}: {
  input: CreateInput;
  context: Context;
}): Promise<CreateOutput> => {
  // MOCKED: Create new group
  return {
    id: "g_new_" + Date.now(),
    name: input.name,
  };
};

export const getInputSchema = z.object({
  groupId: z.string(),
});

export type GetInput = z.infer<typeof getInputSchema>;

// Extracted nested schema
export const groupMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(["admin", "member"]),
});

export type GroupMember = z.infer<typeof groupMemberSchema>;

export const getOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  code: z.string(), // Invite code
  members: z.array(groupMemberSchema),
});

export type GetOutput = z.infer<typeof getOutputSchema>;

export const getHandler = async ({
  input,
}: {
  input: GetInput;
  context: Context;
}): Promise<GetOutput> => {
  // MOCKED: Get group details
  return {
    id: input.groupId,
    name: "Chorba Enjoyers",
    description: "We love soup",
    code: "SOUP-123",
    members: [
      { id: "u1", name: "Alice", role: "admin" as const },
      { id: "u2", name: "Bob", role: "member" as const },
    ],
  };
};

export const joinInputSchema = z.object({
  code: z.string(),
});

export type JoinInput = z.infer<typeof joinInputSchema>;

export const joinOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type JoinOutput = z.infer<typeof joinOutputSchema>;

export const joinHandler = async ({
  input: _input,
}: {
  input: JoinInput;
  context: Context;
}): Promise<JoinOutput> => {
  // MOCKED: Join group by code
  return {
    id: "g_joined",
    name: "Joined Group",
  };
};
