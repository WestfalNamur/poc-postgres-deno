import { z } from "https://deno.land/x/zod/mod.ts";

export const zAccount = z.object({
  id: z.number(),
  user_name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  balance: z.number(),
});
export type Account = z.infer<typeof zAccount>;
