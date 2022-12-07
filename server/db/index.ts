import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { QueryObjectResult } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

const DATABASE_URL = Deno.env.get("MANDS_DB_URL");

/* Connection pool of our PostgreSQL driver.
 * see: https://deno-postgres.com/#/
 */
const pool = new Pool(DATABASE_URL, 20);

/* Query abstraction to yeild a connection from the connection pool, run the query,
 * log errors, return the result and release the connection again.
 */
export const runQuery = async (
  query: string,
): Promise<QueryObjectResult<unknown> | undefined> => {
  const client = await pool.connect();
  let result;
  try {
    result = await client.queryObject(query);
  } catch (e) {
    console.log("Err while running query: ", e);
  } finally {
    client.release();
  }
  return result;
};
