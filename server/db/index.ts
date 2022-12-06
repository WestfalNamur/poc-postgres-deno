import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const DATABASE_URL = Deno.env.get("MANDS_DB_URL");

/* Connection pool of our PostgreSQL driver.
 * see: https://deno-postgres.com/#/
 */
export const dbPool = new Pool(DATABASE_URL, 20);
