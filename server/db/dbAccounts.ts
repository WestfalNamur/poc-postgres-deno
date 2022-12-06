import { dbPool } from "./index.ts";
import { Account, zAccount } from "../types/accounts.ts";
import { QueryArrayResult } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

// TODO: Docs && Err handling
export const accountsGetAll = async (): Promise<Account[]> => {
  // Query db
  const conn = await dbPool.connect();
  const query = "SELECT * FROM accounts";
  const qArrRes: QueryArrayResult = await conn.queryArray(query);
  await conn.release();

  // Parse querry result
  return qArrRes.rows.map((row) => {
    return zAccount.parse({
      id: Number(row[0]),
      userName: row[1],
      email: row[2],
      pwHash: row[3],
      balance: Number(row[4]),
    });
  });
};
