import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

export const accountsGetAll = async (pool: Pool) => {
  const poolClient = await pool.connect();
  const rows = await poolClient.queryArray("SELECT * FROM accounts");
  await poolClient.release();
  return rows
}
