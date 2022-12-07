import { runQuery } from "./index.ts";
import { queryValidatorFactory } from "../../types/index.ts";
import { Account, zAccount } from "../../types/accounts.ts";

// Create query validator
const queryValidatorAccounts = queryValidatorFactory(zAccount);

// TODO: Docs && Err handling
export const accountsGetAll = async (): Promise<Account[]> => {
  const query = "SELECT * FROM accounts";
  const result = await runQuery(query);
  return queryValidatorAccounts(result);
};
