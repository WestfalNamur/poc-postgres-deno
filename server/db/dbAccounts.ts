import { runQuery } from "./index.ts";
import { queryValidatorFactory } from "../../types/index.ts";
import { Account, zAccount } from "../../types/accounts.ts";

const queryValidatorAccounts = queryValidatorFactory(zAccount);

export async function accountsGetAll(): Promise<Account[]> {
  const query = "SELECT * FROM accounts";
  const result = await runQuery(query);
  return queryValidatorAccounts(result);
}

export async function accountsGetById(id: string): Promise<Account[]> {
  const query = `SELECT * FROM accounts WHERE id = ${id} LIMIT 1`;
  const result = await runQuery(query);
  return queryValidatorAccounts(result);
}
