import { z } from "https://deno.land/x/zod/mod.ts";

export const zAccount = z.object({
  id: z.number(),
  userName: z.string(),
  email: z.string(),
  pwHash: z.string(),
  balance: z.number(),
});
export type Account = z.infer<typeof zAccount>;
